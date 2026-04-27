import { Shield, Truck, Construction, Zap, CheckCircle2, Home, BarChart3, Globe, Briefcase, Building2, UserCircle } from 'lucide-react';

export const CASAS_DATA = {
  concept: {
    title: "El Concepto",
    subtitle: "Una Forma Moderna de Invertir en Turismo y Naturaleza",
    description: "Una Tiny House es una vivienda compacta diseñada para aprovechar cada centímetro de espacio sin comprometer el confort. Su arquitectura moderna permite disfrutar de la naturaleza mientras se mantiene el estilo de vida contemporáneo.",
    extra: "Estas estructuras están pensadas para integrarse perfectamente en entornos naturales, ofreciendo una experiencia única de conexión con la naturaleza sin sacrificar las comodidades modernas."
  },
  traditionalModels: [
    {
      id: "tipo-1",
      name: "Casa Tradicional",
      label: "CASA TIPO 1",
      images: [
        "/images/casas/casaTradicionalTipo1.png",
        "/images/casas/casaTradicionalTipo1.1.png",
        "/images/casas/casaTradicionalTipo1.2.png"
      ]
    },
    {
      id: "tipo-2",
      name: "Casa Tradicional",
      label: "Casa Tipo 2",
      images: [
        "/images/casas/casaTradicionalTipo2.png",
        "/images/casas/casaTradicionalTipo2.2.png",
        "/images/casas/casaTradicionalTipo2.3.png"
      ]
    }
  ],
  modularModels: [
    {
      id: "modular-1",
      name: "Tiny House Modular 1",
      area: "58 m² de diseño inicial",
      image: "/images/casas/tinyHouseModular1.jpeg",
      features: ["Espacio abierto optimizado", "Máxima versatilidad"]
    },
    {
      id: "modular-2",
      name: "Tiny House Modular 2",
      area: "77 m² de confort premium",
      image: "/images/casas/tinyHouseModular2.jpeg",
      features: ["Diseño elegante", "Acabados de calidad"]
    },
    {
      id: "modular-3",
      name: "Tiny House Modular 3",
      area: "100 m² con acabados superiores",
      image: "/images/casas/tinyhousemodular3.jpeg",
      features: ["Equipamiento completo", "Materiales premium"]
    }
  ],
  tinyHouseModels: [
    {
      id: "tiny-base",
      name: "Tiny House",
      area: "16,2 m² de diseño inicial",
      image: "/images/casas/tinyhouse.webp",
      features: ["Espacio abierto optimizado", "Máxima versatilidad"]
    },
    {
      id: "chalet-comfort",
      name: "Chalet Luxury Comfort",
      area: "13.5 m² de confort premium",
      image: "/images/casas/chaletluxurycomforty.jpg",
      features: ["Diseño elegante", "Acabados de calidad"]
    },
    {
      id: "chalet-complex",
      name: "Chalet Luxury Complex",
      area: "13.5 m² con acabados superiores",
      image: "/images/casas/chaletluxurycomplex.jpg",
      features: ["Equipamiento completo", "Materiales premium"]
    }
  ],
  ecoHouseModels: [
    {
      id: "eco-1",
      name: "Eco House Natura",
      area: "45 m² sostenibles",
      image: "/images/casas/modular-main.png",
      features: ["Materiales ecológicos", "Eficiencia energética"]
    },
    {
      id: "eco-2",
      name: "Eco House Forest",
      area: "65 m² de armonía",
      image: "/images/casas/tiny-16.png",
      features: ["Diseño bioclimático", "Mínimo impacto"]
    }
  ],
  mediterraneaModels: [
    {
      id: "med-1",
      name: "Casa Mediterránea Ibiza",
      area: "120 m² de estilo",
      image: "/images/casas/tradicional.png",
      features: ["Espacios luminosos", "Estética mediterránea"]
    },
    {
      id: "med-2",
      name: "Casa Mediterránea Santorini",
      area: "150 m² de lujo",
      image: "/images/casas/casaTradicionalTipo1.png",
      features: ["Terrazas amplias", "Diseño icónico"]
    }
  ],
  inclusions: [
    { id: "01", title: "Fabricación en Planta", desc: "Construcción controlada en nuestras instalaciones en Manizales" },
    { id: "02", title: "Traslado", desc: "Transporte seguro hasta su destino en cualquier ciudad de Colombia" },
    { id: "03", title: "Instalación sobre Pilotes", desc: "Base de concreto que garantiza estabilidad y durabilidad" },
    { id: "04", title: "Montaje y Conexiones", desc: "Instalación eléctrica e hidráulica completas" },
    { id: "05", title: "Entrega Lista para Uso", desc: "Todo listo para comenzar a operar inmediatamente" }
  ],
  technicalSpecs: [
    { icon: Shield, title: "Estructura Sismorresistente", desc: "Estructura metálica de alta resistencia diseñada para soportar sismos y condiciones climáticas extremas" },
    { icon: Construction, title: "Pared Exterior Superboard", desc: "Materiales de última generación que ofrecen durabilidad y aislamiento térmico superior" },
    { icon: Building2, title: "Piso SPC Impermeable", desc: "Superficie resistente al agua con acabado premium que garantiza confort y durabilidad" },
    { icon: Home, title: "Cubierta en Teja", desc: "Opción de teja Single o UPVC con acabados premium y máxima durabilidad" },
    { icon: Zap, title: "Instalaciones Completas", desc: "Sistema eléctrico e hidráulico incluido con estándares de calidad internacional" }
  ],
  advantages: [
    { title: "Instalación Rápida", desc: "Montaje en días, no meses" },
    { title: "Alta Demanda Turística", desc: "Concepto en crecimiento exponencial" },
    { title: "Construcción Modular", desc: "Control de calidad garantizado" },
    { title: "Movilidad", desc: "Transporte a cualquier ubicación" },
    { title: "Vida Útil Superior", desc: "Más de 30 años de durabilidad" }
  ],
  manufacturingProcess: [
    { step: 1, title: "Fabricación en Planta", desc: "Construcción controlada en nuestras instalaciones en Manizales con materiales certificados" },
    { step: 2, title: "Tiempo de Producción", desc: "Entrega en 10 a 15 días hábiles con todas las instalaciones completas" },
    { step: 3, title: "Transporte", desc: "Logística especializada que garantiza la llegada segura a cualquier destino" },
    { step: 4, title: "Instalación Rápida", desc: "Montaje profesional sobre base de pilotes con conexiones listas" }
  ],
  uses: [
    { icon: Globe, title: "Glamping", desc: "Proyectos turísticos de lujo que combinan confort con naturaleza" },
    { icon: BarChart3, title: "Airbnb", desc: "Propiedades para renta turística con alta demanda y rentabilidad" },
    { icon: Home, title: "Vivienda Campestre", desc: "Retiro en la naturaleza sin sacrificar las comodidades modernas" },
    { icon: Building2, title: "Proyectos Turísticos", desc: "Desarrollos hoteleros y resorts con estructuras modulares" },
    { icon: Briefcase, title: "Oficina o Estudio", desc: "Espacios de trabajo independientes y conectados con la naturaleza" }
  ],
  faqs: [
    { question: "¿Qué es una Tiny House?", answer: "Vivienda compacta diseñada para optimizar el espacio sin perder confort. Combina arquitectura moderna con funcionalidad práctica." },
    { question: "¿Cuántas personas puede alojar?", answer: "2 personas cómodamente y hasta 3 o 4 dependiendo del mobiliario seleccionado y la configuración interna." },
    { question: "¿Incluye baño?", answer: "Sí, incluye baño completo con sanitario, lavamanos y ducha. Todo el equipamiento necesario para el confort diario." },
    { question: "¿Se puede usar para Airbnb?", answer: "Sí, es ideal para renta turística y proyectos de glamping. Su diseño moderno y ubicación en naturaleza generan alta demanda." },
    { question: "¿Cuánto tarda la fabricación?", answer: "Entre 10 y 15 días hábiles en planta. Incluye todas las instalaciones eléctricas e hidráulicas listas para uso." },
    { question: "¿Se puede transportar a cualquier ciudad?", answer: "Sí, enviamos a todo Colombia con logística especializada. Transporte seguro y montaje profesional en destino." }
  ],
  cta: {
    title: "Una Forma Moderna de Invertir en Turismo y Naturaleza",
    desc: "Los chalets modulares representan una excelente oportunidad para emprendedores del sector turístico. Con instalación rápida, alta demanda y rentabilidad comprobada, son la solución ideal para proyectos de glamping, Airbnb y vivienda campestre.",
    footer: "Comience su proyecto hoy mismo. Inversión inteligente, retorno garantizado"
  }
};
