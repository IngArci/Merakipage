import { useState, useEffect, useCallback } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  DocumentData,
  Query
} from 'firebase/firestore';
import { db } from '../../lib/firebase';

// TTL de la caché en milisegundos (30 minutos)
const CACHE_TTL_MS = 30 * 60 * 1000;

interface CacheEntry<T> {
  data: T[];
  timestamp: number;
}

function getCacheKey(collectionName: string, filterField?: string, filterValue?: string): string {
  return `meraki_cache__${collectionName}__${filterField || ''}__${filterValue || ''}`;
}

function readFromCache<T>(cacheKey: string): T[] | null {
  try {
    const raw = localStorage.getItem(cacheKey);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    const isExpired = Date.now() - entry.timestamp > CACHE_TTL_MS;
    if (isExpired) {
      localStorage.removeItem(cacheKey);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function writeToCache<T>(cacheKey: string, data: T[]): void {
  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(cacheKey, JSON.stringify(entry));
  } catch {
    // localStorage puede fallar si está lleno; ignorar silenciosamente
  }
}

/**
 * Lee una colección de Firestore con:
 *  1. Caché en localStorage con TTL de 30 minutos
 *  2. getDocs (lectura única) — sin listener en tiempo real
 *
 * Ideal para: avances de obra, videos, ferias, asesores.
 * NO usar para disponibilidad de lotes (esos sí necesitan tiempo real).
 *
 * Ahorro estimado: 85-95% de lecturas en colecciones con >5 documentos.
 */
export function useFirestoreCached<T = DocumentData>(
  collectionName: string,
  filterField?: string,
  filterValue?: string,
  orderField: string = 'createdAt',
  orderDirection: 'asc' | 'desc' = 'desc'
) {
  const cacheKey = getCacheKey(collectionName, filterField, filterValue);

  const [data, setData] = useState<T[]>(() => readFromCache<T>(cacheKey) ?? []);
  const [loading, setLoading] = useState<boolean>(() => !readFromCache<T>(cacheKey));
  const [error, setError] = useState<Error | null>(null);
  const [fromCache, setFromCache] = useState<boolean>(() => !!readFromCache<T>(cacheKey));

  const fetchFromFirebase = useCallback(async () => {
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

    try {
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
      setData(items);
      writeToCache<T>(cacheKey, items);
      setFromCache(false);
    } catch (err) {
      console.error(`[useFirestoreCached] Error en "${collectionName}":`, err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [cacheKey, collectionName, filterField, filterValue, orderField, orderDirection]);

  useEffect(() => {
    const cached = readFromCache<T>(cacheKey);
    if (cached) {
      // Tenemos caché vigente: mostrar inmediatamente, sin tocar Firebase
      setData(cached);
      setFromCache(true);
      setLoading(false);
      return;
    }
    // Sin caché o expirada: ir a Firebase
    setLoading(true);
    setFromCache(false);
    fetchFromFirebase();
  }, [cacheKey, fetchFromFirebase]);

  /** Fuerza re-fetch ignorando la caché (útil tras actualizar datos en admin) */
  const invalidateCache = useCallback(() => {
    localStorage.removeItem(cacheKey);
    setLoading(true);
    setFromCache(false);
    fetchFromFirebase();
  }, [cacheKey, fetchFromFirebase]);

  return { data, loading, error, fromCache, invalidateCache };
}

/** Elimina todas las entradas de caché de Meraki en localStorage */
export function clearAllMerakiCache(): void {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith('meraki_cache__'))
      .forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore
  }
}
