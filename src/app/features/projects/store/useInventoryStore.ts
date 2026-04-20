import { create } from 'zustand';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface LotSummary {
  s: string;
  a?: string | number;
  n?: string | number;
  c?: string;
}

interface InventoryState {
  summary: Record<string, LotSummary>;
  fullLots: Record<string, any>;
  loading: boolean;
  activeProject: string | null;
  error: string | null;
  unsubscribe: (() => void) | null;
  subscribeToProject: (projectId: string) => void;
  fetchLotDetails: (lotId: string) => Promise<any>;
  cleanup: () => void;
}

export const useInventoryStore = create<InventoryState>((set, get) => ({
  summary: {},
  fullLots: {},
  loading: false,
  activeProject: null,
  error: null,
  unsubscribe: null,

  subscribeToProject: (projectId: string) => {
    if (get().activeProject === projectId && get().unsubscribe) return;
    if (get().unsubscribe) get().unsubscribe!();

    set({ loading: true, activeProject: projectId });

    const unsub = onSnapshot(
      doc(db, 'proyectos_resumen', projectId),
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          set({ summary: data.lots || {}, loading: false, error: null });
        } else {
          set({ summary: {}, loading: false, error: 'No summary found' });
        }
      },
      (err) => {
        console.error('Error listening to summary:', err);
        set({ error: err.message, loading: false });
      }
    );

    set({ unsubscribe: unsub });
  },

  fetchLotDetails: async (lotId: string) => {
    if (get().fullLots[lotId]) return get().fullLots[lotId];

    try {
      const snap = await getDoc(doc(db, 'inventario', lotId));
      if (snap.exists()) {
        const fullData = { id: snap.id, ...snap.data() };
        set((state) => ({
          fullLots: { ...state.fullLots, [lotId]: fullData }
        }));
        return fullData;
      }
    } catch (err) {
      console.error('Error fetching lot details:', err);
    }
    return null;
  },

  cleanup: () => {
    if (get().unsubscribe) get().unsubscribe!();
    set({ 
      unsubscribe: null, 
      activeProject: null,
      summary: {},
    });
  }
}));
