import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  DocumentData
} from 'firebase/firestore';
import { db } from '../../lib/firebase';

export function useFirestoreCollection<T = DocumentData>(
  collectionName: string, 
  filterField?: string, 
  filterValue?: string
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));

    if (filterField && filterValue) {
      q = query(
        collection(db, collectionName), 
        where(filterField, '==', filterValue),
        orderBy('createdAt', 'desc')
      );
    }

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        setData(items);
        setLoading(false);
      },
      (err) => {
        console.error(`Error fetching collection ${collectionName}:`, err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, filterField, filterValue]);

  return { data, loading, error };
}
