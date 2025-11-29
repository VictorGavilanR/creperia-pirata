import { Gem, Candy, UtensilsCrossed, Leaf, Beer } from 'lucide-react';

// 1. DEFINICIÓN DE CATEGORÍAS
export const categories = [
  { 
    id: 'cofres', 
    label: 'Cofres (Promos)', 
    icon: Gem,
    description: 'Botines compartidos para tripulaciones hambrientas.'
  },
  { 
    id: 'dulces', 
    label: 'crepas Dulces', 
    icon: Candy,
    description: 'Crepas bañadas en el néctar de los dioses.'
  },
  { 
    id: 'saladas', 
    label: 'Crepas Saladas', 
    icon: UtensilsCrossed, // O Fish si prefieres
    description: 'Sabores fuertes para navegar los siete mares.'
  },
  { 
    id: 'plant-based', 
    label: 'Crepas Plant-Based', 
    icon: Leaf,
    description: 'Tesoros de la tierra, 100% libre de crueldad.'
  },
  { 
    id: 'brebajes', 
    label: 'Brebajes', 
    icon: Beer, // O CupSoda
    description: 'Elixires para calmar la sed del pirata.'
  },
];

// 2. LISTA DE PLATOS (ITEMS)
export const menuItems = [



  // --- COFRES (PROMOS) ---
  {
    id: 1,
    name: "Cofre del Tesoro",
    desc: "¡Este cofre atesora 4 de nuestras crepas dulces más buscadas! Incluye 4 crepas del tesoro, totalmente personalizables.",
    price: "$19.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/0a7f8fb066f24e4ab6b1b8e00150b2a9.png",
    isPopular: true
  },
  {
    id: 2,
    name: "Cofre 4 Puertos",
    desc: "¡Cofre poseedor de nuestras 4 nuestras clásicas crepas saladas! Incluye 1 Napolitana, 1 Pepperoni, 1 Génova y 1 Americana.",
    price: "$17.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/0a7f8fb066f24e4ab6b1b8e00150b2a9.png",
    isPopular: false
  },

  {
    id: 3,
    name: "Cofre Oreo Love",
    desc: "¡Para l@s amantes del oreo! Incluye 4 Oreo Classics.",
    price: "$15.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/0a7f8fb066f24e4ab6b1b8e00150b2a9.png",
    isPopular: true
  },
  {
    id: 4,
    name: "Cofre Oreo Love plant based",
    desc: "¡Para nuestros amantes del oreo! Incluye 4 Oreo Classic plant based.",
    price: "$19.990",
    category: "cofres",
    isPopular: false
  },
  {
    id: 5,
    name: "Cofre Jack",
    desc: "Incluye 4 Sparrow plant based.",
    price: "$15.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/0a7f8fb066f24e4ab6b1b8e00150b2a9.png",
    isPopular: false
  },

  {
    id: 6,
    name: "Combo del Caribe",
    desc: "¡Simple pero poderoso!, incluye 1 Sparrow y 1 Perla Negra.",
    price: "$8.990",
    category: "cofres",
    image: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 7,
    name: "Combo Botín del Capitán",
    desc: "En este botín siempre encontrarás una crepa salada que irá variando al azar más un brebaje! Incluye 1 crepa Napolitana + 1 bebida a elección.",
    price: "$4.990",
    category: "cofres",
    image: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?auto=format&fit=crop&q=80&w=800",
    isPopular: true
  },
  {
    id: 8,
    name: "Combo Botín del Capitán",
    desc: "Incluye una Napolitana plant based y 1 bebida a elección.",
    price: "$4.990",
    category: "cofres",
    image: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?auto=format&fit=crop&q=80&w=800",
    isPopular: false
  },

  // Crepas Dulces
  {
    id: 9,
    name: "Crepas del Tesoro",
    desc: "Incluye 1 base, 1 fruta, 1 crocancia, 1 salsa y 1 topping",
    price: "$5.590",
    category: "dulces",
    image: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?auto=format&fit=crop&q=80&w=800",
    isPopular: false
  },
  {
    id: 10,
    name: "Básica",
    desc: "Incluye 1 base y azúcar flor. Crepa no modificable.",
    price: "$2.990",
    category: "dulces",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&q=80&w=800",
    isPopular: false
  },
  {
    id: 11,
    name: "Espada Dorada",
    desc: "Incluye manjar, plátano y azúcar flor.",
    price: "$4.490",
    category: "dulces",
    image: "",
    isPopular: false
  },

  {
    id: 12,
    name: "Espada Roja",
    desc: "Incluye crema de avellana, frutilla y azúcar flor.",
    price: "$4.490",
    category: "dulces",
    image: "",
    isPopular: true
  },
  {
    id: 13,
    name: "Perla Negra",
    desc: "Incluye crema de avellana, oreo, salsa de chocolate y azúcar flor.",
    price: "$4.790",
    category: "dulces",
    image: "",
    isPopular: false
  },
  {
    id: 14,
    name: "Sparrow",
    desc: "Incluye crema de avellana, plátano, frutilla y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "",
    isPopular: false
  },
  {
    id: 15,
    name: "Oreo Classic",
    desc: "Incluye 1 base, 1 fruta, oreo y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "",
    isPopular: false
  },
  {
    id: 16,
    name: "Triton Classic",
    desc: "Incluye 1 base, 1 fruta, triton y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "",
    isPopular: false
  },
  {
    id: 17,
    name: "Frutos del Bosque",
    desc: "Incluye mermelada, frutilla, arándanos y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "",
    isPopular: false
  },
  {
    id: 18,
    name: "Sirena Encantada",
    desc: "Incluye queso crema, frutilla, oreo, salsa de frambuesa y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "",
    isPopular: false
  },
  {
    id: 19,
    name: "Snicker",
    desc: "Incluye crema de avellana, mantequilla de maní, oreo, maní, salsa de caramelo y chispas de chocolate.",
    price: "$4.990",
    category: "dulces",
    image: "",
    isPopular: false
  },

  // Saladas

  {
    id: 20,
    name: "Aliada",
    desc: "Incluye jamón y queso.",
    price: "$4.490",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 21,
    name: "Cheddar-Bacon",
    desc: "Incluye cheddar, tocino y salsa barbecue.",
    price: "$4.490",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 22,
    name: "Napolitana",
    desc: "Incluye salsa de tomate, queso, jamón, tomate y orégano.",
    price: "$4.990",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 21,
    name: "Peperoni",
    desc: "Incluye salsa de tomate, queso, pepperoni, tomate y orégano.",
    price: "$4.990",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 23,
    name: "Omelette",
    desc: "Incluye 1 huevo, queso, jamón y tocino.",
    price: "$5.490",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 24,
    name: "Génova",
    desc: "Incluye queso crema, pesto, jamón, tocino y tomate.",
    price: "$4.490",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 25,
    name: "Todas las Carnes",
    desc: "Incluye queso, salsa de tomate, jamón, tocino, pepperoni y orégano.",
    price: "$5.490",
    category: "saladas",
    image: "",
    isPopular: false
  },
  {
    id: 26,
    name: "Americana",
    desc: "Incluye cheddar, tocino, jamón, lechuga, tomate, pepinillos y salsa barbecue.",
    price: "$5.990",
    category: "saladas",
    image: "",
    isPopular: false
  },

  // Crepas plant-based

  {
    id: 27,
    name: "Espada Dorada",
    desc: "Incluye dulce sin leche, plátano y azúcar flor.",
    price: "$4.490",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 28,
    name: "Sparrow",
    desc: "Incluye crema de avellana nusco, plátano, frutilla y azúcar flor.",
    price: "$4.990",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 29,
    name: "Oreo Classic",
    desc: "Incluye 1 base, 1 fruta, oreo y azúcar flor.",
    price: "$4.990",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 30,
    name: "Snicker",
    desc: "Incluye crema de avellana nusco, mantequilla de maní, oreo, maní, salsa de caramelo y chispas de chocolate.",
    price: "$5.690",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 31,
    name: "Cheddar-Tofu",
    desc: "Incluye cheddar plant based, tofu y salsa de barbecue.",
    price: "$4.490",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 32,
    name: "Aliada",
    desc: "Incluye queso plant based y tofu.",
    price: "$4.490",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 33,
    name: "Napolitana",
    desc: "Incluye queso plant-based, salsa de tomate, tofu, tomate y orégano.",
    price: "$4.990",
    category: "plant-based",
    image: "",
    isPopular: false
  },
  {
    id: 34,
    name: "Americana",
    desc: "Incluye cheddar plant based, tofu, lechuga, tomate, pepinillo y salsa de barbecue.",
    price: "$5.990",
    category: "plant-based",
    image: "",
    isPopular: false
  },

  // Bebidas
  {
    id: 35,
    name: "Coca-Cola(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 36,
    name: "Fanta(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 37,
    name: "Sprite(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 38,
    name: "Coca-Cola Zero(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 39,
    name: "Agua Mineral sin Gas",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 40,
    name: "Agua Mineral Gasificada",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 41,
    name: "Jugo Zuko Naranja",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 42,
    name: "Jugo Zuko Manzana",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 43,
    name: "Jugo Zuko Durazno",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 44,
    name: "Jugo Zuko Piña",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 45,
    name: "Jugo Zuko Naranja",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 46,
    name: "Té(Bolsa)",
    desc: "",
    price: "$500",
    category: "brebajes",
    image: "",
    isPopular: false
  },
  {
    id: 47,
    name: "Café(Sachet)",
    desc: "",
    price: "$500",
    category: "brebajes",
    image: "",
    isPopular: false
  },
 

];