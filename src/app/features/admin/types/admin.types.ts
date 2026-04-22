export interface LegalDocData {
  id?: string;
  title: string;
  fileUrl: string;
  projectSlug: string;
  createdAt?: any;
}

export interface InversionistaVideoData {
  id?: string;
  videoId: string;
  title: string;
  order?: number;
  type?: 'youtube' | 'tiktok' | 'shorts';
  createdAt?: any;
}

export interface InversionistaPhotoData {
  id?: string;
  imageUrl: string;
  caption: string;
  createdAt?: any;
}

export interface PaymentInstructionData {
  id?: string;
  title: string;
  fileUrl: string;
  bank: string; // e.g., 'Bancolombia', 'Davivenda'
  category: string; // e.g., 'APP', 'Portal Web', 'Otros Proyectos'
  createdAt?: any;
}
