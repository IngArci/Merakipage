import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';

/**
 * Extracts Video ID from YouTube or TikTok URLs
 */
export function extractYoutubeId(url: string): { id: string; type: 'youtube' | 'tiktok' | 'shorts' } | null {
  // TikTok
  const tiktokMatch = url.match(/tiktok\.com.*\/video\/(\d+)/i) || url.match(/^(\d{15,25})$/);
  if (tiktokMatch) return { id: tiktokMatch[1], type: 'tiktok' };

  // YouTube Shorts
  const shortsMatch = url.match(/(?:youtube\.com\/shorts\/)([^&\n?#]+)/i);
  if (shortsMatch) return { id: shortsMatch[1], type: 'shorts' };

  // YouTube Standard
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/i) || url.match(/^([a-zA-Z0-9_-]{11})$/);
  if (ytMatch) return { id: ytMatch[1], type: 'youtube' };
  
  return null;
}

/**
 * Uploads a file (image or doc) to Firebase Storage and returns the download URL.
 * Optional asAttachment forces the browser to download instead of opening it (important for mobile).
 */
export async function uploadImage(file: File, path: string, asAttachment: boolean = false): Promise<string> {
  const fileRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
  
  const metadata = asAttachment ? {
    contentDisposition: `attachment; filename="${file.name}"`,
    contentType: file.type
  } : undefined;

  const snapshot = await uploadBytes(fileRef, file, metadata);
  return await getDownloadURL(snapshot.ref);
}
