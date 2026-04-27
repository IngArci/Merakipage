import { LucideIcon } from 'lucide-react';

export type ProjectStatus = 'en-venta' | 'preventa' | 'entregado';

export interface Amenity {
  icon: LucideIcon | React.ComponentType;
  name: string;
  description?: string;
}

export interface ProjectLocation {
  address: string;
  coordinates: string;
  mapIframe?: string;
  nearbyPlaces: string[];
}

export interface ProjectStage {
  name: string;
  subtitle: string;
  image: string;
  available?: boolean;
}

export interface ProgressUpdate {
  date: string;
  title?: string; // Some data uses title
  text?: string;  // Some data uses text
  percentage?: number;
  images: string[];
}

export interface ProjectVideos {
  informesGestion: string[];
  avancesObra: string[];
}

export interface Project {
  title: string;
  region: string;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  sizes: string;
  priceFrom: string;
  priceFromUSD?: string;
  totalLots: number;
  availableLots: number;
  deliveryDate: string;
  images: string[];
  amenities: Amenity[];
  location: ProjectLocation;
  masterPlan?: string;
  videos?: ProjectVideos;
  progress?: ProgressUpdate[];
  formLink: string;
  stages?: ProjectStage[];
}
