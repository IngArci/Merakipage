// Data: Salas de Ventas
export interface SalaVenta {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  schedule: {
    weekdays: string;   // Mon-Thu for Principal, Tue-Fri for Others
    friday?: string;    // Specific for Principal
    saturday: string;
    sunday: string;
  };
  coordinates: { lat: number; lng: number; };
  image: string;
  features: string[];
}

export const salasVentasData: SalaVenta[] = [
  {
    id: 1, name: 'Sala de Ventas Principal', city: 'Ibagué',
    address: 'Barrio Casa Club, Cra 3 #42 – 92', phone: '+57 314 786 8069',
    email: 'servicioalcliente.grupomeraki@gmail.com', whatsapp: '573147868069',
    schedule: {
      weekdays: 'Lunes a Jueves: 7:00 AM - 5:00 PM',
      friday: 'Viernes: 7:00 AM - 4:00 PM',
      saturday: 'Sábados: Cerrado',
      sunday: 'Domingos: Cerrado'
    },
    coordinates: { lat: 4.4310625, lng: -75.2104375 },
    image: 'https://images.unsplash.com/photo-1734937743443-a50fff0c0b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Café de cortesía', 'Sala de espera cómoda'],
  },
  {
    id: 2, name: 'Sala de Ventas Melgar', city: 'Melgar',
    address: 'A 200mts del sector conocido "El paso", sobre la via Girardot- Bogota Melgar, Tolima', phone: '+573223508759',
    email: 'chia@meraki.com', whatsapp: '573223508759',
    schedule: {
      weekdays: 'Martes a Viernes: 10:00 AM - 4:00 PM',
      saturday: 'Sábados: 10:00 AM - 4:00 PM',
      sunday: 'Domingos: 10:00 AM - 4:00 PM'
    },
    coordinates: { lat: 4.24521, lng: -74.73756 },
    image: 'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Zona comercial', 'Acceso fácil', 'Atención personalizada', 'Parqueadero', 'Hidratación', 'Zona tipica de restaurante'],
  },
  {
    id: 3, name: 'Sala de Ventas Alvarado', city: 'Alvarado',
    address: 'VIA Ibagué - Alvarado costado izquierdo justo antes del peaje de Alvarado', phone: '+57573116022710',
    email: 'medellin@meraki.com', whatsapp: '573116022710',
    schedule: {
      weekdays: 'Martes a Viernes: 10:00 AM - 4:00 PM',
      saturday: 'Sábados: 10:00 AM - 4:00 PM',
      sunday: 'Domingos: 10:00 AM - 4:00 PM'
    },
    coordinates: { lat: 4.50457, lng: -74.99485 },
    image: '/images/sala-de-ventas/sala-alvarado.webp',
    features: ['Zona comercial', 'Acceso fácil', 'Atención personalizada', 'Parqueadero',],
  },
  {
    id: 4, name: 'Sala de Ventas Mariquita', city: 'Mariquita',
    address: 'Mariquita Tolima', phone: '+573232094057',
    email: 'cartagena@meraki.com', whatsapp: '573232094057',
    schedule: {
      weekdays: 'Martes a Viernes: 10:00 AM - 4:00 PM',
      saturday: 'Sábados: 10:00 AM - 4:00 PM',
      sunday: 'Domingos: 10:00 AM - 4:00 PM'
    },
    coordinates: { lat: 5.16274, lng: -74.89580 },
    image: '/images/sala-de-ventas/sala-de-ventas-mariquita.png',
    features: ['Zona comercial', 'Acceso fácil', 'Atención personalizada', 'Parqueadero',],
  },
  {
    id: 5, name: 'Sala de Ventas de Grupo constructor Meraki en  Fusagasuga', city: 'Fusagasuga',
    address: 'Centro comercial avenida local 148 Fusagasugá', phone: '+57 3167903662',
    email: 'direccionadministrativa@gmgroup.com.co', whatsapp: '573167903662',
    schedule: {
      weekdays: 'Lunes a Viernes: 10:00 AM - 7:00 PM',
      saturday: 'Sábados: 10:00 AM - 7:00 PM',
      sunday: 'Domingos y Festivos: 12:00 PM - 7:00 PM'
    },
    coordinates: { lat: 4.3438019, lng: -74.3737815 },
    image: '/images/sala-de-ventas/sala-de-ventas-fusa.png',
    features: ['Zona comercial', 'Acceso fácil', 'Atención personalizada', 'Parqueadero',],
  },
];
