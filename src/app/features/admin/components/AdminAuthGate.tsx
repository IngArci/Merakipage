import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { AdminLogin } from './AdminLogin';
import { AdminUnauthorized } from './AdminUnauthorized';
import { Loader2 } from 'lucide-react';

interface AdminAuthGateProps {
  children: React.ReactNode;
}

export function AdminAuthGate({ children }: AdminAuthGateProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        setLoading(true);
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } catch (error) {
          console.error('Error verificando rol de administrador:', error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#F4BA3E] animate-spin mb-4" />
        <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">
          Verificando permisos de acceso...
        </p>
      </div>
    );
  }

  // Si no estÃ¡ logueado, mostrar login
  if (!user) {
    return <AdminLogin />;
  }

  // Si estÃ¡ logueado pero NO es administrador
  if (isAdmin === false) {
    return <AdminUnauthorized />;
  }

  return <>{children}</>;
}
