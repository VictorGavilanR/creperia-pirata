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
    image: "https://backend.influye.app/storage/products/f11ed77ac48381f19f29f13cce22d241.png",
    isPopular: true
  },
  {
    id: 2,
    name: "Cofre 4 Puertos",
    desc: "¡Cofre poseedor de nuestras 4 nuestras clásicas crepas saladas! Incluye 1 Napolitana, 1 Pepperoni, 1 Génova y 1 Americana.",
    price: "$17.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/9d04c948a37a3f73f61ae5b85b5e0cad.png",
    isPopular: false
  },

  {
    id: 3,
    name: "Cofre Oreo Love",
    desc: "¡Para l@s amantes del oreo! Incluye 4 Oreo Classics.",
    price: "$15.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/7ab58afe3f5f48dc4d2e88bdd3c06e4a.png",
    isPopular: true
  },
  {
    id: 4,
    name: "Cofre Oreo Love plant based",
    desc: "¡Para nuestros amantes del oreo! Incluye 4 Oreo Classic plant based.",
    price: "$19.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/ae526f5cacb4b1ae42fc8a40c7f33051.png",
    isPopular: false
  },
  {
    id: 5,
    name: "Cofre de Jack",
    desc: "Incluye 4 Sparrow plant based.",
    price: "$15.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/00dbbcf0b773c9c81b6e33bad543730e.png",
    isPopular: false
  },

  {
    id: 6,
    name: "Combo del Caribe",
    desc: "¡Simple pero poderoso!, incluye 1 Sparrow y 1 Perla Negra.",
    price: "$8.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/cfded87846ecde9e1b9c6698a0637b19.png",
    isPopular: true
  },
  {
    id: 7,
    name: "Combo Botín del Capitán",
    desc: "En este botín siempre encontrarás una crepa salada que irá variando al azar más un brebaje! Incluye 1 crepa Napolitana + 1 bebida a elección.",
    price: "$4.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/3d8d4e28b3ee3ed0ebda149228943ba6.png",
    isPopular: true
  },
  {
    id: 8,
    name: "Combo Botín del Capitán",
    desc: "Incluye una Napolitana plant based y 1 bebida a elección.",
    price: "$4.990",
    category: "cofres",
    image: "https://backend.influye.app/storage/products/b3c650c4d3baf5883a01093866fff0f8.png",
    isPopular: false
  },

  // Crepas Dulces
  {
    id: 9,
    name: "Crepa del Tesoro",
    desc: "Incluye 1 base, 1 fruta, 1 crocancia, 1 salsa y 1 topping",
    price: "$5.590",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/06ae9912ae4191d696b4a22731a63e8e.png",
    isPopular: false
  },
  {
    id: 10,
    name: "Básica",
    desc: "Incluye 1 base y azúcar flor. Crepa no modificable.",
    price: "$2.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/85b3ab9838bc0699308fa936d02b7dd8.png",
    isPopular: false
  },
  {
    id: 11,
    name: "Espada Dorada",
    desc: "Incluye manjar, plátano y azúcar flor.",
    price: "$4.490",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/510a3ae9a3da82163b7d86b93e8f74dd.png",
    isPopular: false
  },

  {
    id: 12,
    name: "Espada Roja",
    desc: "Incluye crema de avellana, frutilla y azúcar flor.",
    price: "$4.490",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/79fed0157b1bd9b877a6624f3af919db.png",
    isPopular: true
  },
  {
    id: 13,
    name: "Perla Negra",
    desc: "Incluye crema de avellana, oreo, salsa de chocolate y azúcar flor.",
    price: "$4.790",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/4a95d3a49b9686608a5e0c388732ad30.png",
    isPopular: false
  },
  {
    id: 14,
    name: "Sparrow",
    desc: "Incluye crema de avellana, plátano, frutilla y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/b0b281edc5e680771ac10e7dd925ded9.png",
    isPopular: false
  },
  {
    id: 15,
    name: "Oreo Classic",
    desc: "Incluye 1 base, 1 fruta, oreo y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/24b3dcb88c3b9b3ebfc9fabd4dcbabcb.png",
    isPopular: false
  },
  {
    id: 16,
    name: "Triton Classic",
    desc: "Incluye 1 base, 1 fruta, triton y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/c96148c240dd6f222db61e4522b5900e.png",
    isPopular: false
  },
  {
    id: 17,
    name: "Frutos del Bosque",
    desc: "Incluye mermelada, frutilla, arándanos y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/05b50573db5450967b94b85d310a4abf.png",
    isPopular: false
  },
  {
    id: 18,
    name: "Sirena Encantada",
    desc: "Incluye queso crema, frutilla, oreo, salsa de frambuesa y azúcar flor.",
    price: "$4.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/8f8b4f42a52df2262ec50961167bca5e.png",
    isPopular: false
  },
  {
    id: 19,
    name: "Snicker",
    desc: "Incluye crema de avellana, mantequilla de maní, oreo, maní, salsa de caramelo y chispas de chocolate.",
    price: "$4.990",
    category: "dulces",
    image: "https://backend.influye.app/storage/products/77241d8f6d2ab0b4ce483c53163d45ce.png",
    isPopular: false
  },

  // Saladas

  {
    id: 20,
    name: "Aliada",
    desc: "Incluye jamón y queso.",
    price: "$4.490",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/93087454f9838450f51ce85d5184daff.png",
    isPopular: false
  },
  {
    id: 21,
    name: "Cheddar-Bacon",
    desc: "Incluye cheddar, tocino y salsa barbecue.",
    price: "$4.490",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/5cafb488e2d306c407d08b69345e4669.png",
    isPopular: false
  },
  {
    id: 22,
    name: "Napolitana",
    desc: "Incluye salsa de tomate, queso, jamón, tomate y orégano.",
    price: "$4.990",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/533f42ac98ac9fdbe96f08bb2c1af6e3.png",
    isPopular: false
  },
  {
    id: 23,
    name: "Peperoni",
    desc: "Incluye salsa de tomate, queso, pepperoni, tomate y orégano.",
    price: "$4.990",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/8318e709235c78ef3c79365cab8a95f5.png",
    isPopular: false
  },
  {
    id: 24,
    name: "Omelette",
    desc: "Incluye 1 huevo, queso, jamón y tocino.",
    price: "$5.490",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/125e67dacbdaf8bfaa300c82f51d8b4c.png",
    isPopular: false
  },
  {
    id: 25,
    name: "Génova",
    desc: "Incluye queso crema, pesto, jamón, tocino y tomate.",
    price: "$4.490",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/b98bd936686c5fe01fc96bfd3a1afa08.png",
    isPopular: false
  },
  {
    id: 26,
    name: "Todas las Carnes",
    desc: "Incluye queso, salsa de tomate, jamón, tocino, pepperoni y orégano.",
    price: "$5.490",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/6ac0a09183aab77bc3ea52bf37a1e1bc.png",
    isPopular: false
  },
  {
    id: 27,
    name: "Americana",
    desc: "Incluye cheddar, tocino, jamón, lechuga, tomate, pepinillos y salsa barbecue.",
    price: "$5.990",
    category: "saladas",
    image: "https://backend.influye.app/storage/products/0a7f8fb066f24e4ab6b1b8e00150b2a9.png",
    isPopular: false
  },

  // Crepas plant-based

  {
    id: 28,
    name: "Espada Dorada",
    desc: "Incluye dulce sin leche, plátano y azúcar flor.",
    price: "$4.490",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/7ac7e9eae51f9846efbc127d84b2e4d3.png",
    isPopular: false
  },
  {
    id: 29,
    name: "Sparrow",
    desc: "Incluye crema de avellana nusco, plátano, frutilla y azúcar flor.",
    price: "$4.990",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/d4965cd66f2f78e3551a39828f2457a1.png",
    isPopular: false
  },
  {
    id: 30,
    name: "Oreo Classic",
    desc: "Incluye 1 base, 1 fruta, oreo y azúcar flor.",
    price: "$4.990",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/6c5be9bbd7fe9c0bc7d5c4db5fb4eb9d.png",
    isPopular: false
  },
  {
    id: 31,
    name: "Snicker",
    desc: "Incluye crema de avellana nusco, mantequilla de maní, oreo, maní, salsa de caramelo y chispas de chocolate.",
    price: "$5.690",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/565066787a5efcf941b75f1188412406.png",
    isPopular: false
  },
  {
    id: 32,
    name: "Cheddar-Tofu",
    desc: "Incluye cheddar plant based, tofu y salsa de barbecue.",
    price: "$4.490",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/c51961185b5303ff2fb807e87cb46601.png",
    isPopular: false
  },
  {
    id: 33,
    name: "Aliada",
    desc: "Incluye queso plant based y tofu.",
    price: "$4.490",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/a459c8d9d1247e85c899021c3b81c7b3.png",
    isPopular: false
  },
  {
    id: 34,
    name: "Napolitana",
    desc: "Incluye queso plant-based, salsa de tomate, tofu, tomate y orégano.",
    price: "$4.990",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/338b7c4c869c3cfbb1f721d595a336bb.png",
    isPopular: false
  },
  {
    id: 35,
    name: "Americana",
    desc: "Incluye cheddar plant based, tofu, lechuga, tomate, pepinillo y salsa de barbecue.",
    price: "$5.990",
    category: "plant-based",
    image: "https://backend.influye.app/storage/products/a3e02b6e9d504b54c60e7c57538d92c9.png",
    isPopular: false
  },

  // Bebidas
  {
    id: 36,
    name: "Coca-Cola(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/ea6a00f6f7239cc98ef8f7b9516e4692.png",
    isPopular: false
  },
  {
    id: 37,
    name: "Fanta(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/07206995aff2a1856f4da4db04415375.png",
    isPopular: false
  },
  {
    id: 38,
    name: "Sprite(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/d773ea050db7d667e04d34192a7ad577.png",
    isPopular: false
  },
  {
    id: 39,
    name: "Coca-Cola Zero(220 ml)",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/59051a0f8a2e6664bfff09a860fd670a.png",
    isPopular: false
  },
  {
    id: 40,
    name: "Agua Mineral sin Gas",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/22f5658eacd60c1c3bd350a9838420cd.png",
    isPopular: false
  },
  {
    id: 41,
    name: "Agua Mineral Gasificada",
    desc: "",
    price: "$1.200",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/80bd406869ef16984b3f76cd37b5695b.png",
    isPopular: false
  },
  {
    id: 42,
    name: "Jugo Zuko Naranja",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/45d3423f884b901638dc0feb602f09c0.png",
    isPopular: false
  },
  {
    id: 43,
    name: "Jugo Zuko Manzana",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/7f0b218de510c0181ede05cd5d001d9c.png",
    isPopular: false
  },
  {
    id: 44,
    name: "Jugo Zuko Durazno",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/c52b3e582e1a948a1535ccd6f965d535.png",
    isPopular: false
  },
  {
    id: 45,
    name: "Jugo Zuko Piña",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/cc54a2bce86f4b386e3118181899413f.png",
    isPopular: false
  },
  {
    id: 46,
    name: "Jugo Zuko Naranja",
    desc: "",
    price: "$800",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/45d3423f884b901638dc0feb602f09c0.png",
    isPopular: false
  },
  {
    id: 47,
    name: "Té(Bolsa)",
    desc: "",
    price: "$500",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/cbf9cdb6f59e9ce5b78fa55c26656fa7.png",
    isPopular: false
  },
  {
    id: 48,
    name: "Café(Sachet)",
    desc: "",
    price: "$500",
    category: "brebajes",
    image: "https://backend.influye.app/storage/products/f4d6f367f5c0fb96d1b2632c0b9e2e2f.png",
    isPopular: false
  },
 

];