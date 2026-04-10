import {
  DoorOpen,
  MessagesSquare,
  Waves,
  Droplets,
  Dog,
  Wind,
  Grid,
  Baby,
  Volleyball,
  Eye,
  Utensils,
  Flame,
  Goal,
  Footprints,
  Users,
  Home,
  TreePine,
  Dumbbell,
  ShoppingBag,
  Shield,
  Camera,
  Hammer
} from 'lucide-react';

export const projectsData = {
  'rio-claro': {
    title: 'Rio Claro Luxury Living Club',
    region: 'San Sebastián de Mariquita',
    status: 'lanzamiento',
    shortDescription: 'un espacio donde podrás construir tu futuro, en proyectos pensados para la inversión, confort y tranquilidad.',
    description: 'Río Claro es un exclusivo condominio campestre ubicado en una de las zonas más privilegiadas del Valle del Cauca. Con 200 lotes disponibles, este proyecto ofrece la combinación perfecta entre naturaleza, comodidad y rentabilidad. Rodeado de montañas y con acceso directo a fuentes hídricas naturales, Río Claro es el lugar ideal para construir tu casa de campo o hacer una inversión segura y rentable.',
    sizes: '300m² - 600m²',
    priceFrom: '$180,000,000',
    totalLots: 200,
    availableLots: 147,
    deliveryDate: 'Diciembre 2026',
    images: [
      '../../public/images/rio-claro/PORTERIA.png',
      '../../public/images/rio-claro/piscina.png',
      '../../public/images/rio-claro/jacuzzi.png',
      '../../public/images/rio-claro/rio-1.png',
      '../../public/images/rio-claro/rio-lento.png',
      , '../../public/images/rio-claro/rio.png'
    ],
    amenities: [
      { icon: DoorOpen, name: 'Portería Exclusiva', description: '' },
      { icon: MessagesSquare, name: 'Salón de eventos', description: '' },
      { icon: Waves, name: 'Piscina tipo playa', description: '' },
      { icon: Droplets, name: 'Rio Lento', description: '' },
      { icon: Dog, name: 'Dogpark', description: '' },
      { icon: Wind, name: 'Tobogán', description: '' },
      { icon: Grid, name: 'Mallas Antiestres', description: '' },
      { icon: Baby, name: 'Parque infantil', description: '' },
      { icon: Volleyball, name: 'Cancha Volleyball', description: '' },
      { icon: Eye, name: 'Mirador', description: '' },
      { icon: Utensils, name: 'Zona picnic', description: '' },
      { icon: Flame, name: 'BBQ', description: '' },
      { icon: Goal, name: 'Cancha sintética', description: '' },
      { icon: Footprints, name: 'Sendero', description: '' },
      { icon: Users, name: 'Futbolín humano', description: '' }
    ],
    location: {
      address: 'Ubicados al norte del Tolima, sobre el costado de la vía nacional, a cinco minutos del casco urbano del municipio de San Sebastián de Mariquita.',
      coordinates: '5473+3M, Mariquita, Tolima',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.430530020674!2d-74.8983874241861!3d5.162692837477706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40b5843471a6cb%3A0x43264f2292654e0!2sRio%20Claro%20Luxury%20Living%20Club!5e1!3m2!1ses-419!2sco!4v1775744062619!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A pocos minutos del casco urbano de Mariquita',
        'Cercano a las Cascadas del Río Medina (“Laguna de la Serpiente Dorada”)',
        'Próximo a la Ciudad Perdida de Falan',
        'Cerca del Santuario del Milagroso – Señor de la Ermita',
        'A corta distancia de las Cataratas del Río Medina',
        'Cercano a la Casa de la Segunda Expedición Botánica',
        'Próximo a la Casa de Gonzalo Jiménez de Quesada'

      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [

      ],
      avancesObra: [

      ]
    },
    progress: [

    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'laguna-mar': {
    title: 'Laguna Mar',
    region: 'Melgar',
    status: 'lanzamiento',
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
      { icon: DoorOpen, name: 'Casa Club Premium', description: '' },
      { icon: Waves, name: 'Muelle Privado', description: '' },
      { icon: Dumbbell, name: 'Zona Deportiva', description: '' },
      { icon: TreePine, name: 'Reserva Natural', description: '' },
      { icon: Camera, name: 'Mirador', description: '' },
      { icon: Shield, name: 'Portería', description: '' }
    ],
    location: {
      address: 'Vía Medellín - Guatapé, Antioquia',
      coordinates: '6.2442° N, 75.5742° W',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8718521734777!2d-74.74013742418697!3d4.245192845436226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f27f1fd164147%3A0x27733b3a994f332b!2sLaguna%20Mar!5e0!3m2!1ses-419!2sco!4v1775744242657!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 90 min de Medellín',
        'A 30 min de Guatapé',
        'A 20 min de El Peñol',
        'A 15 min de Marinilla'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ',
        '3JZ_D3ELwOQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4',
        'tgbNymZ7vqY'
      ]
    },
    progress: [
      {
        date: 'Abril 2026',
        title: 'Movimiento de tierras sector A',
        images: [
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
        ]
      },
      {
        date: 'Marzo 2026',
        title: 'Muelle privado completado',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'cañon-arizona': {
    title: 'Cañón de Arizona',
    region: 'Alvarado',
    status: 'lanzamiento',
    shortDescription: 'Terrenos premium con vista al cañón',
    description: 'Cañón de Arizona ofrece lotes de gran tamaño con vistas espectaculares. Este exclusivo desarrollo cuenta con 120 lotes en un entorno de montaña único en Colombia. Ideal para quienes buscan privacidad, naturaleza and una inversión de alto nivel.',
    sizes: '800m² - 2,000m²',
    priceFrom: '$280,000,000',
    totalLots: 120,
    availableLots: 65,
    deliveryDate: 'Septiembre 2027',
    images: [
      'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080'
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
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4894.1473537142465!2d-74.99527162418686!3d4.509737043281716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38cba87853e4d5%3A0x9ac562c944e79fb9!2sCa%C3%B1on%20de%20Arizona%20Bungalow%20Luxury%20Club!5e1!3m2!1ses-419!2sco!4v1775744090548!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 45 min de Bucaramanga',
        'A 30 min de San Gil'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4'
      ]
    },
    progress: [
      {
        date: 'Marzo 2026',
        title: 'Vías principales pavimentadas',
        images: [
          'https://images.unsplash.com/photo-1763328044351-98341e9963da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9ncmVzcyUyMHJvYWQlMjBwYXZpbmd8ZW58MXx8fHx8MTc3NTU3NDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
          'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80'
        ]
      },
      {
        date: 'Febrero 2026',
        title: 'Instalación de redes eléctricas',
        images: [
          'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
          'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80'
        ]
      },
      {
        date: 'Enero 2026',
        title: 'Cerramiento perimetral y portería',
        percentage: 100,
        images: [
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'sobre-montañas': {
    title: 'Sobre Montaña',
    region: 'alvarado',
    status: 'lanzamiento',
    shortDescription: 'Terrenos premium con vista al cañón',
    description: 'Cañón de Arizona ofrece lotes de gran tamaño con vistas espectaculares. Este exclusivo desarrollo cuenta con 120 lotes en un entorno de montaña único en Colombia. Ideal para quienes buscan privacidad, naturaleza and una inversión de alto nivel.',
    sizes: '800m² - 2,000m²',
    priceFrom: '$280,000,000',
    totalLots: 120,
    availableLots: 65,
    deliveryDate: 'Septiembre 2027',
    images: [
      'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080'
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
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0248250340524!2d-74.98751242418672!3d4.589567842609231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38b51213b39707%3A0x8435369ea5781c89!2sThe%20Protector%20Glamping!5e0!3m2!1ses-419!2sco!4v1775744220362!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 45 min de Bucaramanga',
        'A 30 min de San Gil'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4'
      ]
    },
    progress: [
      {
        date: 'Abril 2026',
        title: 'Adecuación de miradores principales',
        percentage: 30,
        images: [
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'llano-grande': {
    title: 'Llano Grande',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'Terrenos premium con vista al cañón',
    description: 'Cañón de Arizona ofrece lotes de gran tamaño con vistas espectaculares. Este exclusivo desarrollo cuenta con 120 lotes en un entorno de montaña único en Colombia. Ideal para quienes buscan privacidad, naturaleza and una inversión de alto nivel.',
    sizes: '800m² - 2,000m²',
    priceFrom: '$280,000,000',
    totalLots: 120,
    availableLots: 65,
    deliveryDate: 'Septiembre 2027',
    images: [
      'https://images.unsplash.com/photo-1764223531702-1614efb82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080'
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
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893.819026479953!2d-74.95890371654087!3d4.558210370763409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35f298c15e87%3A0x871bc0b27a252322!2sLlano%20Grande%20Luxury%20Living%20Club!5e1!3m2!1ses-419!2sco!4v1775744114993!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 45 min de Bucaramanga',
        'A 30 min de San Gil'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4'
      ]
    },
    progress: [
      {
        date: 'Abril 2026',
        title: 'Adecuación de miradores principales',
        percentage: 30,
        images: [
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'gran-arizona': {
    title: 'Gran Arizona',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'Tranquilidad y naturaleza cerca de Bogotá',
    description: 'Valle Escondido es un proyecto pensado para quienes buscan escapar del ruido de la ciudad sin alejarse demasiado. Ubicado a solo 2 horas de Bogotá, este condominio ofrece 100 lotes en un entorno de montaña con clima templado.',
    sizes: '700m² - 1,500m²',
    priceFrom: '$200,000,000',
    totalLots: 100,
    availableLots: 52,
    deliveryDate: 'Marzo 2027',
    images: [
      'https://images.unsplash.com/photo-1758565811272-e79917ca0adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3VudHJ5c2lkZSUyMGVzdGF0ZSUyMGNvdW50cnlzaWRlJTIwbGFuZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3Mzg0NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080'
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
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893.86805375107!2d-74.96189032418675!3d4.551004842935369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35ee94c29065%3A0x584cea73ba6e5b75!2sGrand%20Arizona%20Country%20Club!5e1!3m2!1ses-419!2sco!4v1775744132327!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 2 horas de Bogotá',
        'A 30 min de La Vega'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4'
      ]
    },
    progress: [
      {
        date: 'Abril 2026',
        title: 'Trazo de senderos ecológicos',
        images: [
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'Arizona-1': {
    title: 'Arizona 1',
    region: 'Arizona country club I',
    status: 'entregado',
    shortDescription: 'Vive rodeado del mejor café del mundo',
    description: 'Bosques del Paraíso está ubicado en el corazón del Eje Cafetero, en Armenia. Este proyecto de 80 lotes combina la belleza del paisaje cultural cafetero con todas las comodidades modernas.',
    sizes: '500m² - 1,200m²',
    priceFrom: '$190,000,000',
    totalLots: 80,
    availableLots: 38,
    deliveryDate: 'Agosto 2027',
    images: [
      'https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNvdW50cnklMjBob3VzZSUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzczODQ1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    amenities: [
      { icon: Home, name: 'Casa Campestre', description: 'Arquitectura cafeteras' },
      { icon: TreePine, name: 'Plantación de Café', description: 'Tour incluido' },
      { icon: Waves, name: 'Piscina Natural', description: 'Agua de nacimiento' },
      { icon: Camera, name: 'Mirador Cafetero', description: 'Vista panorámica' },
      { icon: Dumbbell, name: 'Canchas', description: 'Fútbol y voleibol' },
      { icon: Shield, name: 'Seguridad', description: 'Vigilancia privada' }
    ],
    location: {
      address: 'Vía Armenia - Circasia, Quindío',
      coordinates: '4.5339° N, 75.6811° W',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.2108615034062!2d-74.96079392418676!3d4.55605834289277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35e50993ba33%3A0x54e842538fa446f5!2sArizona%20Country%20Club%20I!5e0!3m2!1ses-419!2sco!4v1775744168232!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 15 min de Armenia',
        'A 20 min de Circasia'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4'
      ]
    },
    progress: [
      {
        date: 'Abril 2026',
        title: 'Preparación de vivero forestal',
        images: [
          'https://images.unsplash.com/photo-1599420186946-7b6fb4eaba02?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  },
  'arizona-2': {
    title: 'Arizona country club II',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'Lujo y exclusividad en el corazón del Quindío',
    description: 'Montaña Dorada es el proyecto más exclusivo del Quindío. Con solo 60 lotes de gran tamaño, este desarrollo boutique ofrece privacidad absoluta y vistas espectaculares de las montañas cafeteras.',
    sizes: '600m² - 1,800m²',
    priceFrom: '$250,000,000',
    totalLots: 60,
    availableLots: 28,
    deliveryDate: 'Noviembre 2027',
    images: [
      'https://images.unsplash.com/photo-1762438421221-1626a4958dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG5hdHVyZSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3Mzg0NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080'
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
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.230176588586!2d-74.96109722418669!3d4.55256514292227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35aca08f5a81%3A0x6287d687a2a7870a!2sArizona%20II%20Country%20Club!5e0!3m2!1ses-419!2sco!4v1775744199419!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 20 min de Montenegro',
        'A 25 min de Armenia'
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080&q=80',
    videos: {
      informesGestion: [
        'dQw4w9WgXcQ'
      ],
      avancesObra: [
        'ScMzIvxBSi4'
      ]
    },
    progress: [
      {
        date: 'Abril 2026',
        title: 'Cimentación de Casa Club Luxury',
        images: [
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
        ]
      }
    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/yH7BClvxe1HiKll1tQYL'
  }
};
