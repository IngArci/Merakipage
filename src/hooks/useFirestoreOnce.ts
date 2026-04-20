import { useState, useEffect } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  DocumentData,
  Query
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

/**
 * Lee una colección de Firestore UNA SOLA VEZ (sin listener).
 * Usar para datos que no cambian en tiempo real desde el cliente:
 * avances de obra, videos, ferias, asesores, etc.
 *
 * A diferencia de useFirestoreCollection (onSnapshot), este hook
 * NO mantiene una conexión abierta con Firebase, reduciendo lecturas
 * drásticamente en colecciones con muchos documentos.
 */
export function useFirestoreOnce<T = DocumentData>(
  collectionName: string,
  filterField?: string,
  filterValue?: string,
  orderField: string = 'createdAt',
  orderDirection: 'asc' | 'desc' = 'desc'
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // No hacer fetch si el filtro está vacío
    if (filterField && !filterValue) {
      setLoading(false);
      return;
    }

    let q: Query<DocumentData>;

    try {
      if (filterField && filterValue) {
        q = query(
          collection(db, collectionName),
          where(filterField, '==', filterValue),
          orderBy(orderField, orderDirection)
        );
      } else {
        q = query(
          collection(db, collectionName),
          orderBy(orderField, orderDirection)
        );
      }
    } catch {
      setLoading(false);
      return;
    }

    let cancelled = false;

    getDocs(q)
      .then((snapshot) => {
        if (cancelled) return;
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        setData(items);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error(`[useFirestoreOnce] Error en "${collectionName}":`, err);
        setError(err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  // Sólo re-ejecutar si cambia el slug o la colección
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName, filterField, filterValue]);

  return { data, loading, error };
}
