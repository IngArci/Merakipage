import {
  DoorOpen,
  MessagesSquare,
  Waves,
  WavesLadder,
  Droplets,
  Dog,
  Wind,
  LandPlot,
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
  TreePalm,
  Hammer
} from 'lucide-react';
import { Project } from '../types/project';
import { FaTableTennisPaddleBall, FaChild, FaDoorOpen, FaRegTrashCan, FaFire, FaUmbrellaBeach, } from "react-icons/fa6";
import { TbSoccerField, TbPlayVolleyball } from "react-icons/tb";
import { PiTelevisionSimpleFill, PiTelevisionSimpleBold } from "react-icons/pi";
import { GiJumpingDog, GiRiver, GiKidSlide, GiSoccerKick, GiPoolTableCorner } from "react-icons/gi";
import { MdGrid4X4 } from "react-icons/md";
import { IoIosChatbubbles, IoIosBicycle } from "react-icons/io";
import { GiGate } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaTv, FaRegTrashAlt, FaChess } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { TbPicnicTable, TbMassage } from "react-icons/tb";
import { PiPark } from "react-icons/pi";
import { IoRestaurant } from "react-icons/io5";
import { GiHut, GiWaterTower } from "react-icons/gi";
import { MdLocalBar, MdPool } from "react-icons/md";
import { AiFillVideoCamera } from "react-icons/ai";
export const projectsData: Record<string, Project> = {
  'rio-claro': {
    title: 'Rio Claro Luxury Living Club',
    region: 'San Sebastián de Mariquita',
    status: 'en-venta',
    shortDescription: 'un espacio donde podrás construir tu futuro, en proyectos pensados para la inversión, confort y tranquilidad.',
    description: 'Río Claro es un exclusivo condominio campestre ubicado en una de las zonas más privilegiadas del Valle del Cauca. Con 200 lotes disponibles, este proyecto ofrece la combinación perfecta entre naturaleza, comodidad y rentabilidad. Rodeado de montañas y con acceso directo a fuentes hídricas naturales, Río Claro es el lugar ideal para construir tu casa de campo o hacer una inversión segura y rentable.',
    sizes: '300m² - 600m²',
    priceFrom: '$90,999,999',
    totalLots: 200,
    availableLots: 147,
    deliveryDate: 'Diciembre 2026',
    images: [
      '/images/rio-claro/PORTERIA.png',
      '/images/rio-claro/PISCINA.png',
      '/images/rio-claro/jacuzzi.png',
      '/images/rio-claro/rio-1.png',
      '/images/rio-claro/rio-lento.png',
      '/images/rio-claro/rio.png'
    ],
    amenities: [
      { icon: DoorOpen, name: 'Portería Exclusiva', description: '' },//
      { icon: MessagesSquare, name: 'Salón de eventos', description: '' },//
      { icon: Waves, name: 'Piscina tipo playa', description: '' },//
      { icon: Dog, name: 'Dogpark', description: '' },//
      { icon: Grid, name: 'Mallas Antiestres', description: '' },//
      { icon: Baby, name: 'Parque infantil', description: '' },//
      { icon: Volleyball, name: 'Cancha Volleyball playa', description: '' },//

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
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=60&fm=webp',
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
    title: 'LAGUNA MAR BUNGALOW COLIVING CLUB',
    region: 'Melgar - Ricaurte',
    status: 'en-venta',
    shortDescription: 'Ubicado en la mejor zona de gran valorización conocida como EL PASO justo en el epicentro de las ciudades de Ricaurte, Melgar, Girardot y Carmen de Apicalá, con acceso sobre la vía nacional Ibagué - Bogotá Ruta 40 Express.',
    description: 'LAGUNA MAR BUNGALOW COLIVING CLUB es un mega proyecto conformado por 10 etapas ubicado en el municipio de Ricaurte donde podrás disfrutar de todas las comodidades de un condominio campestre exclusivo con el sello de calidad del GRUPO CONSTRUCTOR MERAKI. ¡Realiza una inversión inteligente en LAGUNA MAR BUNGALOW COLIVING CLUB!  Su ubicación lo hace una inversión ganadora, en el corazón de la mejor zona de veraneo en Colombia, equidistante a Ricaurte, Melgar, Girardot y Carmen de Apicalá, en un sector de gran afluencia. Su acceso se encuentra sobre la doble calzada Girardot-Bogotá, en la vía 40 express, a 200 metros del sector conocido como “EL PASO”..',
    stages: [
      {
        name: 'Mar Santorini',
        subtitle: 'Primera Etapa',
        image: '/images/laguna-mar/LOGO-MAR-SANTORINI.png'
      },
      {
        name: 'Mar Canarias',
        subtitle: 'Segunda Etapa',
        image: '/images/laguna-mar/LOGO-MAR-CANARIAS.png'
      }
    ],
    sizes: '300m² hasta 2.500m²',
    priceFrom: '$220,000,000',
    totalLots: 150,
    availableLots: 89,
    deliveryDate: 'Junio 2027',
    images: [
      '/images/laguna-mar/PORTERIA-AJUSTES.png',
      '/images/laguna-mar/mascotas-1.png',
      '/images/laguna-mar/PISCINA-1.png',
      '/images/laguna-mar/piscina.png',
    ],
    amenities: [
      { icon: WavesLadder, name: 'Piscina tipo playa', description: '' },
      { icon: MessagesSquare, name: 'Salón de eventos', description: '' },
      { icon: TbSoccerField, name: 'Cancha sintética', description: '' },
      { icon: Wind, name: 'Tobogán', description: '' },
      { icon: LandPlot, name: 'Golfito', description: '' },
      { icon: Dog, name: 'pista canina', description: '' },
      { icon: FaTableTennisPaddleBall, name: 'Cancha de tenis', description: '' },
      { icon: FaChild, name: 'Parque infantil', description: '' },


    ],
    location: {
      address: 'A tan solo 2 horas de Bogotá se encuentran Ricaurte, Girardot, Melgar y Carmen de Apicalá, ciudades pujantes y epicentros de las mejores zonas de descanso de Colombia.',
      coordinates: '67W6+3X, Melgar, Tolima',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4890.696685498831!2d-74.7375625!3d4.2451875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f27f1fd164147%3A0x27733b3a994f332b!2sLaguna%20Mar!5e1!3m2!1ses-419!2sco!4v1775837818636!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 2 horas de Bogotá',
        'Ubicado entre Ricaurte, Melgar y Girardot',
        'A 3 minutos de Piscilago',
        'A 3 minutos del Lago Sol de Compensar',
        'Cerca de Carmen de Apicalá'
      ]

    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=60&fm=webp',
    videos: {
      informesGestion: [

      ],
      avancesObra: [

      ]
    },
    progress: [

    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/1eCEmzLEpUIt27OYe7Gd'
  },
  'cañon-arizona': {
    title: 'Cañón de Arizona',
    region: 'Alvarado',
    status: 'en-venta',
    shortDescription: 'Crea tu propio estilo de vida en un verdadero club de campo',
    description: 'Descubre Cañón de Arizona Club de Campo, un proyecto diseñado para quienes buscan libertad, naturaleza y una inversión estratégica en un solo lugar. Ubicado en Alvarado, Tolima, se destaca por estar sobre vía nacional, lo que garantiza fácil acceso, alta conectividad y una proyección de valorización constante. Además, cuenta con un diferencial único: acceso directo al río, brindando un entorno natural privilegiado donde la tranquilidad y el contacto con la naturaleza se convierten en parte de tu día a día.',
    sizes: '300m² - 1,760m²',
    priceFrom: '$132,990,000',
    totalLots: 331,
    availableLots: 135,
    deliveryDate: '',
    images: [
      '/images/cañon-arizona/1.jpg',

    ],
    amenities: [
      { icon: GiGate, name: 'Poteria', description: '' },
      { icon: HiOutlineOfficeBuilding, name: 'Oficina Para La Administración', description: '' },
      { icon: FaRegTrashAlt, name: 'Shut de Basuras', description: '' },
      { icon: FaTv, name: 'Circuito Cerrado de Televisión', description: '' },
      { icon: Dog, name: 'Pet Park', description: '' },
      { icon: FaChildren, name: 'Parque Infantil', description: '' },
      { icon: Flame, name: 'BBQ', description: '' },
      { icon: TbPicnicTable, name: 'Zona Picnic', description: '' },
      { icon: PiPark, name: 'Estancias Biosaludables', description: '' },
      { icon: Grid, name: 'Zonas de Mallas', description: '' },
      { icon: IoRestaurant, name: 'Espacio para Restaurante', description: '' },
      { icon: GiHut, name: 'Kioskos Estilo Falapa', description: '' },
      { icon: MdLocalBar, name: 'Pool Bar', description: '' },
      { icon: TbMassage, name: 'Zona de Masajes', description: '' },
      { icon: Volleyball, name: 'Cancha Volleyball', description: '' },
      { icon: MdPool, name: 'Piscina Para Niños', description: '' },
      { icon: TreePalm, name: 'Piscina Tipo Playa', description: '' },
      { icon: TreePine, name: 'Sendero Ecológico', description: '' },
      { icon: FaTableTennisPaddleBall, name: 'Cancha de tenis', description: '' },
      { icon: IoIosChatbubbles, name: 'Salón de Eventos', description: '' },

    ],
    location: {
      address: 'Cañon de Arizona Bungalow Luxury Club, se encuentra situado sobre la vía nacional Ibagué – Alvarado, con acceso exclusivo al costado izquierdo, justo antes del peaje de Alvarado. Ubicado en una zona de alta valorización, ideal para inversión, el proyecto se destaca por su entorno natural y estratégico.',
      coordinates: '4°30\'35.0\"N 74°59\'33.5\"W',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4894.1473537142465!2d-74.99527162418686!3d4.509737043281716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38cba87853e4d5%3A0x9ac562c944e79fb9!2sCa%C3%B1on%20de%20Arizona%20Bungalow%20Luxury%20Club!5e1!3m2!1ses-419!2sco!4v1775744090548!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'Ubicación sobre la vía nacional Ibagué – Alvarado',
        'Acceso exclusivo antes del peaje de Alvarado',
        'Zona de alta valorización',
        'Rodeado en gran parte por la ribera del río Alvarado',
        'Cuenta con dos lagos naturales dentro del proyecto',
        'Entorno con importante fuente hídrica',
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=60&fm=webp',
    videos: {
      informesGestion: [
      ],
      avancesObra: [
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
    formLink: 'https://api.leadconnectorhq.com/widget/form/9ZgMWa0gNMYaomA3lLqJ'
  },
  'sobre-montañas': {
    title: 'Sobre Montaña',
    region: 'alvarado',
    status: 'en-venta',
    shortDescription: 'Un lugar donde la montaña se convierte en estilo de vida y cada día se vive a otro nivel',
    description: 'Descubre The Protector Club de Campo, un proyecto concebido como un refugio natural donde la tranquilidad, la privacidad y la seguridad se convierten en el verdadero lujo. Inspirado en la idea de protección y equilibrio, este club de campo ha sido diseñado para brindar un entorno donde cada detalle cuida lo más importante: tu bienestar, tu inversión y tu calidad de vida. Aquí, la naturaleza no solo rodea, sino que envuelve, creando una sensación permanente de calma y desconexión del ritmo de la ciudad.',
    sizes: '30,000m²',
    priceFrom: '$129,000,000',
    totalLots: 17,
    availableLots: 17,
    deliveryDate: '',
    images: [
      '/images/sobre-montana/sobre-montana.jpeg',
    ],
    amenities: [
    ],
    location: {
      address: 'Ubicados en el pie de la cordillera central, a tan solo 10 minutos del casco urbano de Alvarado, se encuentra EL PARQUE TEMÁTICO EL PROTECTOR GLAMPING, un proyecto inspirado para el disfrute de toda la familia en conexión con la naturaleza.',
      coordinates: '4.589559°, -74.984938°',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0248250340524!2d-74.98751242418672!3d4.589567842609231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38b51213b39707%3A0x8435369ea5781c89!2sThe%20Protector%20Glamping!5e0!3m2!1ses-419!2sco!4v1775744220362!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 3 horas de Bogotá',
        'A 20 minutos de Ibagué',
        'A 10 minutos del casco urbano de Alvarado',
        'Ubicado en el pie de la cordillera central',
        'Cercano a fuentes hídricas como los ríos Alvarado, Totare y La China',
      ]
    },
    masterPlan: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=60&fm=webp',
    videos: {
      informesGestion: [
      ],
      avancesObra: [

      ]
    },
    progress: [

    ],
    formLink: 'https://api.leadconnectorhq.com/widget/form/JLSBZ7rxxoGUmlfJEXuv'
  },
  'llano-grande': {
    title: 'Llano Grande',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'ya es una realidad',
    description: 'Descubre Llano Grande Luxury Living Club, un club de campo que ya es una realidad y donde la exclusividad se vive en cada detalle. Ubicado en Alvarado, Tolima, este proyecto ha sido diseñado para quienes buscan tranquilidad, valorización y un estilo de vida superior en medio de la naturaleza. Aquí no solo adquieres un terreno campestre, inviertes en un entorno consolidado, con propietarios que ya están haciendo realidad su sueño de tener su segundo hogar. Su ambiente cálido, su ubicación estratégica y su concepto de lujo campestre lo convierten en una oportunidad única.\nLlano Grande es más que un proyecto, es un lugar donde el campo y la inversión se encuentran.',
    sizes: '800m² - 2,000m²',
    priceFrom: '$280,000,000',
    totalLots: 316,
    availableLots: 23,
    deliveryDate: 'Marzo 2026',
    images: [
      '/images/llano-grande/1.webp',
      '/images/llano-grande/2.webp',
      '/images/llano-grande/3.webp',
      '/images/llano-grande/4.webp',
      '/images/llano-grande/5.webp',
      '/images/llano-grande/6.webp',

    ],
    amenities: [
      { icon: FaDoorOpen, name: 'Porteria', description: '' },
      { icon: FaRegTrashCan, name: 'Shits de basuras', description: '' },
      { icon: PiTelevisionSimpleFill, name: 'Circuito cerrado de television', description: '' },
      { icon: GiJumpingDog, name: 'Pista Canina', description: '' },
      { icon: MdGrid4X4, name: 'Mallas anti-estrés', description: '' },
      { icon: FaChild, name: 'Parque infantil', description: '' },
      { icon: FaFire, name: 'Bbq', description: '' },
      { icon: GiRiver, name: 'Rio lento', description: '' },
      { icon: GiKidSlide, name: 'Tobogán', description: '' },
      { icon: FaUmbrellaBeach, name: 'Zona de playa en arena suelta', description: '' },
      { icon: TbPlayVolleyball, name: 'Cancha de vóley', description: '' },
      { icon: TbSoccerField, name: 'Cancha sintética', description: '' },
      { icon: PiTelevisionSimpleBold, name: 'Zona de cine al aire libre', description: '' },
      { icon: GiSoccerKick, name: 'Futbolín humano', description: '' },
      { icon: GiPoolTableCorner, name: 'Billar humano', description: '' },


    ],
    location: {
      address: 'A tan solo 3 horas de Bogotá se encuentra Ibagué, capital musical de Colombia; una ciudad pujante que cuenta con centros comerciales, universidades y un clima muy agradable.',
      coordinates: '4.55909° N, -74.95602° W',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893.819026479953!2d-74.95890371654087!3d4.558210370763409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35f298c15e87%3A0x871bc0b27a252322!2sLlano%20Grande%20Luxury%20Living%20Club!5e1!3m2!1ses-419!2sco!4v1775744114993!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 3 horas de Bogotá',
        'Cercano a Ibagué, capital musical de Colombia',
        'A 20 minutos de Alvarado',
        'Zona de alta valorización',
        'Presencia de importantes fuentes hídricas (ríos Alvarado, Totare y La China)',
        'Entorno natural con múltiples corrientes hídricas',


      ]
    },
    formLink: 'https://api.leadconnectorhq.com/widget/form/TBMTUqYORc8T1oOnpG5n'
  },
  'grand-arizona': {
    title: 'Grand Arizona',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'Un espacio donde podrás construir tu futuro, en proyectos pensados para la inversión, confort y tranquilidad',
    description: 'Gran Arizona Club de Campo, entregado en 2021, es el tercer proyecto desarrollado, marcando un punto de evolución en el concepto de club de campo. En este proyecto se innovaron los parámetros de construcción de viviendas, elevando el estándar y la armonía arquitectónica.',
    sizes: '70m² - 580m²',
    priceFrom: '$200,000,000',
    totalLots: 195,
    availableLots: 4,
    deliveryDate: '',
    images: [
      '/images/grand-arizona/1.webp',
      '/images/grand-arizona/2.webp',
      '/images/grand-arizona/3.webp',
      '/images/grand-arizona/4.webp',
      '/images/grand-arizona/5.webp',
      '/images/grand-arizona/6.webp',
    ],
    amenities: [
      { icon: HiOutlineOfficeBuilding, name: 'Oficina Para La Administración', description: '' },
      { icon: FaRegTrashCan, name: 'Shuts de basuras', description: '' },
      { icon: IoIosChatbubbles, name: 'Salón Social', description: '' },
      { icon: GiRiver, name: 'Piscina en Arena tipo Rio', description: '' },
      { icon: FaFire, name: 'BBQ', description: '' },
      { icon: PiTelevisionSimpleFill, name: 'Circuito cerrado de television', description: '' },
      { icon: GiWaterTower, name: 'Tanque de Reserva de Agua Potable', description: '' },
      { icon: GiKidSlide, name: 'Tobogán', description: '' },
      { icon: TreePine, name: 'Sendero Ecológico', description: '' },
      { icon: TbPicnicTable, name: 'Zona Picnic', description: '' },
      { icon: FaChess, name: 'Juegos de Mesa', description: '' },
      { icon: IoIosBicycle, name: 'Ciclo Ruta', description: '' },
      { icon: FaChild, name: 'Parque infantil', description: '' },
      { icon: AiFillVideoCamera, name: 'Acua Cine', description: '' },
      { icon: TbSoccerField, name: 'Cancha sintética', description: '' },
    ],
    location: {
      address: 'Vía Bogotá - Alvarado, Tolima',
      coordinates: '4.550976, -74.959325',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893.86805375107!2d-74.96189032418675!3d4.551004842935369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35ee94c29065%3A0x584cea73ba6e5b75!2sGrand%20Arizona%20Country%20Club!5e1!3m2!1ses-419!2sco!4v1775744132327!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 3 horas de Bogotá',
        'A 20 minutos de Ibague',
        'A 1 minuto del casco urbano de Alvarado',
        'Zona de alta valorización',
        'Cercano al Nevado del Ruiz',
      ]
    },
    formLink: 'https://api.leadconnectorhq.com/widget/form/4tRjvWfVixBfC90CrPUZ'
  },
  'Arizona-1': {
    title: 'Arizona Country club I',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'Un espacio donde podrás construir tu futuro, en proyectos pensados para la inversión, confort y tranquilidad.',
    description: 'Descubre Arizona 1 Club de Campo, un proyecto que marca el inicio de una nueva forma de vivir el campo: más natural, más libre y con mayor proyección de valorización. Ubicado en un entorno estratégico, este desarrollo ha sido pensado para quienes buscan invertir con visión y construir un espacio propio en medio de la tranquilidad.',
    sizes: '500m² - 1,200m²',
    priceFrom: '$190,000,000',
    totalLots: 141,
    availableLots: 1,
    deliveryDate: 'Agosto 2027',
    images: [
      '/images/arizona-1/1.webp',
      '/images/arizona-1/2.webp',
      '/images/arizona-1/3.webp',
    ],
    amenities: [
      { icon: HiOutlineOfficeBuilding, name: 'Oficina Para La Administración', description: '' },
      { icon: FaRegTrashCan, name: 'Shuts de basuras', description: '' },
      { icon: IoIosChatbubbles, name: 'Salón Social', description: '' },
      { icon: GiRiver, name: 'Piscina en Arena tipo Rio', description: '' },
      { icon: FaFire, name: 'BBQ', description: '' },
      { icon: PiTelevisionSimpleFill, name: 'Circuito cerrado de television', description: '' },
      { icon: GiWaterTower, name: 'Tanque de Reserva de Agua Potable', description: '' },
      { icon: GiKidSlide, name: 'Tobogán', description: '' },
      { icon: TreePine, name: 'Sendero Ecológico', description: '' },
      { icon: TbPicnicTable, name: 'Zona Picnic', description: '' },
      { icon: FaChess, name: 'Juegos de Mesa', description: '' },
      { icon: IoIosBicycle, name: 'Ciclo Ruta', description: '' },
      { icon: PiPark, name: 'Zona de Hamacas', description: '' },
      { icon: AiFillVideoCamera, name: 'Acua Cine', description: '' },
      { icon: TbSoccerField, name: 'Cancha sintética', description: '' },
    ],
    location: {
      address: 'Vía Bogotá - Alvarado, Tolima',
      coordinates: '4.556036, -74.958218',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.2108615034062!2d-74.96079392418676!3d4.55605834289277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35e50993ba33%3A0x54e842538fa446f5!2sArizona%20Country%20Club%20I!5e0!3m2!1ses-419!2sco!4v1775744168232!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 3 horas de Bogotá',
        'A 20 minutos de Ibague',
        'A 1 minuto del casco urbano de Alvarado',
        'Zona de alta valorización',
        'Cercano al Nevado del Ruiz',
      ]
    },
    formLink: 'https://api.leadconnectorhq.com/widget/form/3d8em4aWoejtXxJC6vPy'
  },
  'arizona-2': {
    title: 'Arizona Country Club II',
    region: 'Alvarado',
    status: 'entregado',
    shortDescription: 'Un espacio donde podrás construir tu futuro, en proyectos pensados para la inversión, confort y tranquilidad.',
    description: 'Arizona 2 Club de Campo es un proyecto entregado en 2016 que hoy se consolida como un verdadero caso de éxito. Con excelentes resultados en ventas, actualmente es una comunidad activa donde muchos propietarios ya han construido sus casas y disfrutan de su segundo hogar en el campo.',
    sizes: '600m² - 1,800m²',
    priceFrom: '$250,000,000',
    totalLots: 164,
    availableLots: 0,
    deliveryDate: 'Noviembre 2027',
    images: [
      '/images/arizona-2/1.webp',
      '/images/arizona-2/2.webp',
      '/images/arizona-2/3.webp',
      '/images/arizona-2/4.webp',
      '/images/arizona-2/5.webp',

    ],
    amenities: [
      { icon: HiOutlineOfficeBuilding, name: 'Oficina Para La Administración', description: '' },
      { icon: FaRegTrashCan, name: 'Shuts de basuras', description: '' },
      { icon: IoIosChatbubbles, name: 'Salón Social', description: '' },
      { icon: GiRiver, name: 'Piscina en Arena tipo Rio', description: '' },
      { icon: FaFire, name: 'BBQ', description: '' },
      { icon: PiTelevisionSimpleFill, name: 'Circuito cerrado de television', description: '' },
      { icon: GiWaterTower, name: 'Tanque de Reserva de Agua Potable', description: '' },
      { icon: GiKidSlide, name: 'Tobogán', description: '' },
      { icon: TreePine, name: 'Sendero Ecológico', description: '' },
      { icon: TbPicnicTable, name: 'Zona Picnic', description: '' },
      { icon: FaChess, name: 'Juegos de Mesa', description: '' },
      { icon: IoIosBicycle, name: 'Ciclo Ruta', description: '' },
      { icon: PiPark, name: 'Zona de Hamacas', description: '' },
      { icon: AiFillVideoCamera, name: 'Acua Cine', description: '' },
      { icon: TbSoccerField, name: 'Cancha sintética', description: '' },
    ],
    location: {
      address: 'Vía Bogotá - Alvarado, Tolima',
      coordinates: '4.552555, -74.958528',
      mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.230176588586!2d-74.96109722418669!3d4.55256514292227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f35aca08f5a81%3A0x6287d687a2a7870a!2sArizona%20II%20Country%20Club!5e0!3m2!1ses-419!2sco!4v1775744199419!5m2!1ses-419!2sco',
      nearbyPlaces: [
        'A 3 horas de Bogotá',
        'A 20 minutos de Ibague',
        'A 1 minuto del casco urbano de Alvarado',
        'Zona de alta valorización',
        'Cercano al Nevado del Ruiz',
      ]
    },
    formLink: 'https://api.leadconnectorhq.com/widget/form/BEq2mqNK7O5vZIFXKMuL'
  }
};
