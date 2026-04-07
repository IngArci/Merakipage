import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ArrowLeft, 
  Check, 
  FileText, 
  Calendar,
  Home,
  TreePine,
  Waves,
  Dumbbell,
  ShoppingBag,
  Shield,
  Camera,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { LeadForm } from '../components/LeadForm';
import { useState } from 'react';
import Slider from 'react-slick';

// Datos de proyectos
const projectsData = {
  'rio-claro': {
    title: 'Río Claro',
    region: 'Valle del Cauca',
    shortDescription: 'Condominio campestre de lujo en el corazón del Valle',
    description: 'Río Claro es un exclusivo condominio campestre ubicado en una de las zonas más privilegiadas del Valle del Cauca. Con 200 lotes disponibles, este proyecto ofrece la combinación perfecta entre naturaleza, comodidad y rentabilidad. Rodeado de montañas y con acceso directo a fuentes hídricas naturales, Río Claro es el lugar ideal para construir tu casa de campo o hacer una inversión segura y rentable.',
    sizes: '500m² - 1,000m²',
    priceFrom: '$180,000,000',
    totalLots: 200,
    availableLots: 147,
    deliveryDate: 'Diciembre 2026',
    images: [
      'https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbGFuZHNjYXBlJTIwbmF0dXJlfGVufDF8fHx8MTc3Mzg0NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1080&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1080&q=80'
    ],
    amenities: [
      { icon: Home, name: 'Casa Club', description: 'Espacio social de 500m²' },
      { icon: Waves, name: 'Piscina', description: 'Piscina semi-olímpica' },
      { icon: Dumbbell, name: 'Gimnasio', description: 'Equipamiento completo' },
      { icon: TreePine, name: 'Senderos', description: '5km de senderos ecológicos' },
      { icon: ShoppingBag, name: 'Zona Comercial', description: 'Tiendas y restaurantes' },
      { icon: Shield, name: 'Seguridad 24/7', description: 'Vigilancia permanente' }
    ],
    location: {
      address: 'Km 15 Vía Cali - Jamundí, Valle del Cauca',
      coordinates: '3.3812° N, 76.5209° W',
      nearbyPlaces: [
        'A 20 min de Cali centro',
        'A 15 min del aeropuerto',
        'A 5 min de colegios',
        'A 10 min de centros comerciales'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    legalDocs: [
      { name: 'Licencia de Construcción', status: 'Aprobada', date: '15 Enero 2025' },
      { name: 'Escrituras', status: 'Disponible', date: '20 Febrero 2025' },
      { name: 'Certificado de Libertad', status: 'Vigente', date: '10 Marzo 2025' },
      { name: 'Reglamento de Copropiedad', status: 'Aprobado', date: '25 Enero 2025' }
    ],
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ', // Video ID de ejemplo
        '3JZ_D3ELwOQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4',
        'tgbNymZ7vqY'
      ]
    },
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Vías principales pavimentadas',
        percentage: 85,
        images: [
          'https://images.unsplash.com/photo-1763328044351-98341e9963da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9ncmVzcyUyMHJvYWQlMjBwYXZpbmd8ZW58MXx8fHwxNzc1NTc0NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
          'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80',
          'https://images.unsplash.com/photo-1706437524158-6ca925ce5a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3NTU3NDY5OHww&ixlib=rb-4.1.0&q=80&w=1080'
        ]
      },
      {
        date: 'Febrero 2026',
        title: 'Casa club en construcción',
        percentage: 60,
        images: [
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
          'https://images.unsplash.com/photo-1664976706112-864d7a38e12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGU8ZW58MXx8fHwxNzc1NTQ0NzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
          'https://images.unsplash.com/photo-1762049297262-4eef6d6d4d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc1NTM2ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
        ]
      },
      {
        date: 'Enero 2026',
        title: 'Redes de servicios instaladas',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80',
          'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBsYW5kfGVufDF8fHx8MTc3NTU3MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
        ]
      }
    ]
  },
  'laguna-mar': {
    title: 'Laguna Mar',
    region: 'Antioquia',
    shortDescription: 'Vive frente al agua en este paraíso natural',
    description: 'Laguna Mar es un proyecto único que combina la belleza de un entorno lacustre con todas las comodidades de un condominio moderno. Con 150 lotes frente al agua, este desarrollo ofrece una experiencia de vida incomparable. Los propietarios disfrutan de acceso directo a la laguna, perfecta para deportes acuáticos, pesca y contemplación de la naturaleza.',
    sizes: '600m² - 1,200m²',
    priceFrom: '$220,000,000',
    totalLots: 150,
    availableLots: 89,
    deliveryDate: 'Junio 2027',
    images: [
      'https://images.unsplash.com/photo-1618479357329-14dd10e76f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWdvb24lMjB0cm9waWNhbCUyMG5hdHVyYWwlMjB3YXRlcnxlbnwxfHx8fDE3NzM4NDU1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1080&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1080&q=80'
    ],
    amenities: [
      { icon: Home, name: 'Casa Club Premium', description: 'Salones de eventos' },
      { icon: Waves, name: 'Muelle Privado', description: 'Acceso a la laguna' },
      { icon: Dumbbell, name: 'Zona Deportiva', description: 'Canchas múltiples' },
      { icon: TreePine, name: 'Reserva Natural', description: '10 hectáreas protegidas' },
      { icon: Camera, name: 'Mirador', description: 'Vista panorámica 360°' },
      { icon: Shield, name: 'Portería', description: 'Control de acceso' }
    ],
    location: {
      address: 'Vía Medellín - Guatapé, Antioquia',
      coordinates: '6.2442° N, 75.5742° W',
      nearbyPlaces: [
        'A 90 min de Medellín',
        'A 30 min de Guatapé',
        'A 20 min de El Peñol',
        'A 15 min de Marinilla'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    legalDocs: [
      { name: 'Licencia de Construcción', status: 'Aprobada', date: '10 Marzo 2025' },
      { name: 'Escrituras', status: 'Disponible', date: '15 Marzo 2025' },
      { name: 'Certificado de Libertad', status: 'Vigente', date: '20 Marzo 2025' },
      { name: 'Estudio de Impacto Ambiental', status: 'Aprobado', date: '05 Marzo 2025' }
    ],
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Muelle privado completado',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
        ]
      },
      {
        date: 'Febrero 2026',
        title: 'Portería y cerramiento',
        percentage: 75,
        images: [
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
        ]
      }
    ]
  },
  'canon-arizona': {
    title: 'Cañón de Arizona',
    region: 'Santander',
    shortDescription: 'Terrenos premium con vista al cañón',
    description: 'Inspirado en los majestuosos paisajes del oeste americano, Cañón de Arizona ofrece lotes de gran tamaño con vistas espectaculares. Este exclusivo desarrollo cuenta con 120 lotes en un entorno de montaña único en Colombia. Ideal para quienes buscan privacidad, naturaleza y una inversión de alto nivel.',
    sizes: '800m² - 2,000m²',
    priceFrom: '$280,000,000',
    totalLots: 120,
    availableLots: 65,
    deliveryDate: 'Septiembre 2027',
    images: [
      'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1080&q=80'
    ],
    amenities: [
      { icon: Home, name: 'Club House', description: 'Arquitectura moderna' },
      { icon: Camera, name: 'Miradores', description: 'Múltiples puntos panorámicos' },
      { icon: Dumbbell, name: 'Centro Deportivo', description: 'Instalaciones premium' },
      { icon: TreePine, name: 'Senderos Naturales', description: '8km de caminos' },
      { icon: Waves, name: 'Piscina Infinity', description: 'Vista al cañón' },
      { icon: Shield, name: 'Seguridad Premium', description: 'Tecnología avanzada' }
    ],
    location: {
      address: 'Vía Bucaramanga - San Gil, Santander',
      coordinates: '6.9824° N, 73.0521° W',
      nearbyPlaces: [
        'A 45 min de Bucaramanga',
        'A 30 min de San Gil',
        'A 25 min de Barichara',
        'A 20 min de Chicamocha'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    legalDocs: [
      { name: 'Licencia de Construcción', status: 'Aprobada', date: '05 Febrero 2025' },
      { name: 'Escrituras', status: 'Disponible', date: '10 Febrero 2025' },
      { name: 'Certificado de Libertad', status: 'Vigente', date: '15 Febrero 2025' },
      { name: 'Permiso Ambiental', status: 'Aprobado', date: '01 Febrero 2025' }
    ],
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Accesos principales en construcción',
        percentage: 40,
        images: [
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
        ]
      },
      {
        date: 'Enero 2026',
        title: 'Estudios topográficos completados',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
        ]
      }
    ]
  },
  'valle-escondido': {
    title: 'Valle Escondido',
    region: 'Cundinamarca',
    shortDescription: 'Tranquilidad y naturaleza cerca de Bogotá',
    description: 'Valle Escondido es un proyecto pensado para quienes buscan escapar del ruido de la ciudad sin alejarse demasiado. Ubicado a solo 2 horas de Bogotá, este condominio ofrece 100 lotes en un entorno de montaña con clima templado. Ideal para construir tu refugio de fin de semana o hacer una inversión inteligente en una zona de alta valorización.',
    sizes: '700m² - 1,500m²',
    priceFrom: '$200,000,000',
    totalLots: 100,
    availableLots: 52,
    deliveryDate: 'Marzo 2027',
    images: [
      'https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMGNvdW50cnlzaWRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1080&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1080&q=80'
    ],
    amenities: [
      { icon: Home, name: 'Casa Social', description: 'Espacio de reunión' },
      { icon: TreePine, name: 'Bosque Nativo', description: '15 hectáreas preservadas' },
      { icon: Dumbbell, name: 'Zona Fitness', description: 'Equipamiento outdoor' },
      { icon: Camera, name: 'Sendero Ecológico', description: '3km de naturaleza' },
      { icon: Waves, name: 'Lago Privado', description: 'Pesca deportiva' },
      { icon: Shield, name: 'Portería 24/7', description: 'Acceso controlado' }
    ],
    location: {
      address: 'Vía La Vega - San Francisco, Cundinamarca',
      coordinates: '4.9456° N, 74.1856° W',
      nearbyPlaces: [
        'A 2 horas de Bogotá',
        'A 30 min de La Vega',
        'A 45 min de Villeta',
        'A 20 min de San Francisco'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    legalDocs: [
      { name: 'Licencia de Construcción', status: 'Aprobada', date: '20 Enero 2025' },
      { name: 'Escrituras', status: 'Disponible', date: '25 Enero 2025' },
      { name: 'Certificado de Libertad', status: 'Vigente', date: '30 Enero 2025' },
      { name: 'Reglamento Interno', status: 'Aprobado', date: '18 Enero 2025' }
    ],
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Vías de acceso',
        percentage: 50,
        images: [
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
        ]
      },
      {
        date: 'Enero 2026',
        title: 'Delimitación del predio',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
        ]
      }
    ]
  },
  'bosques-paraiso': {
    title: 'Bosques del Paraíso',
    region: 'Eje Cafetero',
    shortDescription: 'Vive rodeado del mejor café del mundo',
    description: 'Bosques del Paraíso está ubicado en el corazón del Eje Cafetero, en Armenia. Este proyecto de 80 lotes combina la belleza del paisaje cultural cafetero con todas las comodidades modernas. Un lugar perfecto para quienes aman el clima templado, la cultura paisa y la naturaleza exuberante de la región cafetera.',
    sizes: '500m² - 1,200m²',
    priceFrom: '$190,000,000',
    totalLots: 80,
    availableLots: 38,
    deliveryDate: 'Agosto 2027',
    images: [
      'https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3VudHJ5JTIwaG91c2UlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1080&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1080&q=80'
    ],
    amenities: [
      { icon: Home, name: 'Casa Campestre', description: 'Arquitectura cafetera' },
      { icon: TreePine, name: 'Plantación de Café', description: 'Tour incluido' },
      { icon: Waves, name: 'Piscina Natural', description: 'Agua de nacimiento' },
      { icon: Camera, name: 'Mirador Cafetero', description: 'Vista panorámica' },
      { icon: Dumbbell, name: 'Canchas', description: 'Fútbol y voleibol' },
      { icon: Shield, name: 'Seguridad', description: 'Vigilancia privada' }
    ],
    location: {
      address: 'Vía Armenia - Circasia, Quindío',
      coordinates: '4.5339° N, 75.6811° W',
      nearbyPlaces: [
        'A 15 min de Armenia',
        'A 20 min de Circasia',
        'A 30 min de Salento',
        'A 40 min de Valle de Cocora'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    legalDocs: [
      { name: 'Licencia de Construcción', status: 'Aprobada', date: '12 Febrero 2025' },
      { name: 'Escrituras', status: 'Disponible', date: '18 Febrero 2025' },
      { name: 'Certificado de Libertad', status: 'Vigente', date: '22 Febrero 2025' },
      { name: 'Permiso Ambiental', status: 'Aprobado', date: '08 Febrero 2025' }
    ],
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Cerramiento y portería',
        percentage: 70,
        images: [
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
        ]
      },
      {
        date: 'Febrero 2026',
        title: 'Planificación paisajística',
        percentage: 90,
        images: [
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
        ]
      }
    ]
  },
  'montana-dorada': {
    title: 'Montaña Dorada',
    region: 'Quindío',
    shortDescription: 'Lujo y exclusividad en el corazón del Quindío',
    description: 'Montaña Dorada es el proyecto más exclusivo del Quindío. Con solo 60 lotes de gran tamaño, este desarrollo boutique ofrece privacidad absoluta y vistas espectaculares de las montañas cafeteras. A solo 20 minutos de Montenegro, es el lugar ideal para construir tu casa de campo de ensueño o hacer una inversión premium.',
    sizes: '600m² - 1,800m²',
    priceFrom: '$250,000,000',
    totalLots: 60,
    availableLots: 28,
    deliveryDate: 'Noviembre 2027',
    images: [
      'https://images.unsplash.com/photo-1762438421221-1626a4958dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG5hdHVyZSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1080&q=80'
    ],
    amenities: [
      { icon: Home, name: 'Clubhouse Premium', description: 'Diseño arquitectónico de lujo' },
      { icon: Waves, name: 'Spa & Piscina', description: 'Zona wellness completa' },
      { icon: Dumbbell, name: 'Gimnasio Boutique', description: 'Equipamiento de última generación' },
      { icon: TreePine, name: 'Reserva Privada', description: '20 hectáreas de bosque' },
      { icon: Camera, name: 'Helipuerto', description: 'Acceso exclusivo' },
      { icon: Shield, name: 'Seguridad Premium', description: 'Tecnología de punta' }
    ],
    location: {
      address: 'Vía Montenegro - Pueblo Tapao, Quindío',
      coordinates: '4.5639° N, 75.7511° W',
      nearbyPlaces: [
        'A 20 min de Montenegro',
        'A 25 min de Armenia',
        'A 35 min del aeropuerto',
        'A 40 min de Filandia'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    legalDocs: [
      { name: 'Licencia de Construcción', status: 'Aprobada', date: '08 Marzo 2025' },
      { name: 'Escrituras', status: 'Disponible', date: '12 Marzo 2025' },
      { name: 'Certificado de Libertad', status: 'Vigente', date: '15 Marzo 2025' },
      { name: 'Estudio de Suelos', status: 'Aprobado', date: '05 Marzo 2025' }
    ],
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Diseño arquitectónico clubhouse',
        percentage: 30,
        images: [
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
        ]
      },
      {
        date: 'Enero 2026',
        title: 'Estudios preliminares',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
          'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80'
        ]
      }
    ]
  }
};

export default function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Si no existe el slug o el proyecto, redirigir
  if (!slug || !projectsData[slug as keyof typeof projectsData]) {
    return <Navigate to="/proyectos" replace />;
  }

  const project = projectsData[slug as keyof typeof projectsData];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section with Gallery */}
      <section className="relative py-12 bg-gradient-to-b from-black via-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/proyectos">
              <Button variant="outline" className="border-[#F4BA3E] text-[#F4BA3E] hover:bg-[#F4BA3E] hover:text-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a proyectos
              </Button>
            </Link>
          </motion.div>

          {/* Title and Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl mb-4 text-white">{project.title}</h1>
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin className="w-5 h-5 mr-2 text-[#F4BA3E]" />
              <span className="text-xl">{project.region}</span>
            </div>
            <p className="text-xl text-gray-400">{project.shortDescription}</p>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30"
            >
              <img
                src={project.images[selectedImage]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-[240px] rounded-xl overflow-hidden cursor-pointer transition-all ${
                    selectedImage === index
                      ? 'border-4 border-[#F4BA3E] scale-95'
                      : 'border-2 border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
              <p className="text-gray-400 text-sm mb-2">Desde</p>
              <p className="text-2xl text-[#F4BA3E] font-semibold">{project.priceFrom}</p>
            </div>
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
              <p className="text-gray-400 text-sm mb-2">Tamaños</p>
              <p className="text-2xl text-white font-semibold">{project.sizes}</p>
            </div>
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
              <p className="text-gray-400 text-sm mb-2">Disponibles</p>
              <p className="text-2xl text-white font-semibold">{project.availableLots}/{project.totalLots}</p>
            </div>
            <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20">
              <p className="text-gray-400 text-sm mb-2">Entrega</p>
              <p className="text-2xl text-white font-semibold">{project.deliveryDate}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section id="descripcion" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl mb-6 text-white">Descripción del Proyecto</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section id="ubicacion" className="py-16 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl mb-6 text-white">Ubicación Estratégica</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/20">
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-white mb-2">Dirección</h3>
                    <p className="text-gray-300">{project.location.address}</p>
                    <p className="text-gray-500 text-sm mt-2">{project.location.coordinates}</p>
                  </div>
                </div>

                <h3 className="text-xl text-white mb-4 mt-8">Cercanías</h3>
                <ul className="space-y-3">
                  {project.location.nearbyPlaces.map((place, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#F4BA3E] flex-shrink-0" />
                      <span className="text-gray-300">{place}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1080&q=80"
                  alt="Mapa de ubicación"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6">
                  <p className="text-white text-center">Ubicación privilegiada con fácil acceso</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenidades" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl mb-6 text-white">Amenidades</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 hover:border-[#F4BA3E]/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#947018] to-[#F4BA3E] flex items-center justify-center mb-4">
                    <amenity.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{amenity.name}</h3>
                  <p className="text-gray-400">{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Master Plan */}
      <section id="plano" className="py-16 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl mb-6 text-white">Plano Maestro</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30">
              <img
                src={project.masterPlan}
                alt="Plano maestro del proyecto"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4">
                <Button className="bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Plano
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
                <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{project.totalLots}</p>
                <p className="text-gray-300">Total de Lotes</p>
              </div>
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
                <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{project.availableLots}</p>
                <p className="text-gray-300">Lotes Disponibles</p>
              </div>
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
                <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{Math.round((project.totalLots - project.availableLots) / project.totalLots * 100)}%</p>
                <p className="text-gray-300">Avance de Ventas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Club News - Videos */}
      <section id="noticias" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl mb-6 text-white">Noticias de tu Club Campestre</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
            
            {/* Grid de videos lado a lado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informes de Gestión */}
              {project.videos && project.videos.informesGestion && project.videos.informesGestion.length > 0 && (
                <div>
                  <h3 className="text-2xl text-white mb-6">Informes de Gestión</h3>
                  <div className="videos-carousel-compact">
                    <VideoCarouselCompact videos={project.videos.informesGestion} />
                  </div>
                </div>
              )}

              {/* Avances de Obra (Videos) */}
              {project.videos && project.videos.avancesObra && project.videos.avancesObra.length > 0 && (
                <div>
                  <h3 className="text-2xl text-white mb-6">Avances de Obra</h3>
                  <div className="videos-carousel-compact">
                    <VideoCarouselCompact videos={project.videos.avancesObra} />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Construction Progress */}
      <section id="avances" className="py-16 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl mb-6 text-white">Avances de Obra</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
            
            <div className="space-y-8">
              {project.progress.map((update, index) => (
                <ProgressCard key={index} update={update} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-16 bg-gradient-to-b from-black via-[#0d060a] to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6 text-white">
                ¿Interesado en {project.title}?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Solicita más información sobre este proyecto. Un asesor especializado 
                te contactará para resolver todas tus dudas y programar una visita.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#F4BA3E]" />
                  <span className="text-gray-300">Asesoría personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#F4BA3E]" />
                  <span className="text-gray-300">Visita guiada gratuita</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#F4BA3E]" />
                  <span className="text-gray-300">Plan de financiamiento flexible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#F4BA3E]" />
                  <span className="text-gray-300">Beneficios exclusivos</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm 
                title="Solicita información"
                subtitle={`Proyecto ${project.title}`}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente para mostrar cada actualización de progreso con carrusel
function ProgressCard({ update, index }: { update: { date: string, title: string, percentage: number, images: string[] }, index: number }) {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-4",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all" />
    )
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/20"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-[#F4BA3E]" />
          <span className="text-gray-400">{update.date}</span>
        </div>
        <div className="text-right">
          <p className="text-4xl text-[#F4BA3E] font-semibold">{update.percentage}%</p>
          <p className="text-gray-400 text-sm">Completado</p>
        </div>
      </div>

      {/* Texto descriptivo (reemplaza el título) */}
      <p className="text-gray-300 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden mb-8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${update.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#FFF18F]"
        />
      </div>

      {/* Carrusel de imágenes */}
      <div className="progress-carousel">
        <Slider {...settings}>
          {update.images.map((image, imgIndex) => (
            <div key={imgIndex} className="px-2">
              <div className="relative h-96 rounded-xl overflow-hidden border border-[#F4BA3E]/20">
                <img
                  src={image}
                  alt={`Avance ${index + 1} - ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-[#F4BA3E]" />
                    <span className="text-white text-sm">Foto de avance {imgIndex + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}

// Componentes de flechas personalizadas para el carrusel
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F4BA3E] border border-[#F4BA3E]/30 hover:border-[#F4BA3E] flex items-center justify-center transition-all group"
    >
      <ChevronLeft className="w-6 h-6 text-[#F4BA3E] group-hover:text-black" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F4BA3E] border border-[#F4BA3E]/30 hover:border-[#F4BA3E] flex items-center justify-center transition-all group"
    >
      <ChevronRight className="w-6 h-6 text-[#F4BA3E] group-hover:text-black" />
    </button>
  );
}

// Componente para mostrar videos en carrusel
function VideoCarousel({ videos }: { videos: string[] }) {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-4",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all" />
    )
  };

  return (
    <div className="videos-carousel">
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} className="px-2">
            <div className="relative h-96 rounded-xl overflow-hidden border border-[#F4BA3E]/20">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${index + 1}`}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-[#F4BA3E]" />
                  <span className="text-white text-sm">Video {index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Componente para mostrar videos en carrusel compacto
function VideoCarouselCompact({ videos }: { videos: string[] }) {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-4",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all" />
    )
  };

  return (
    <div className="videos-carousel-compact">
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} className="px-2">
            <div className="relative h-64 rounded-xl overflow-hidden border border-[#F4BA3E]/20">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${index + 1}`}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-[#F4BA3E]" />
                  <span className="text-white text-sm">Video {index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}