import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../lib/firebase';

/**
 * Extracts YouTube Video ID from various URL formats
 */
export function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
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
