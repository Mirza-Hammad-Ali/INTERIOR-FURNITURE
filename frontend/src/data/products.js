
const products = [
  {
    id: 1,
    name: "Luxury Upholstered Bed",
    category: "Beds",
    price: 449,
    oldPrice: 599,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=85",
    badge: "BESTSELLER",
    description:
      "A beautifully designed upholstered bed combining modern elegance, comfort and quality craftsmanship.",
  },
  {
    id: 2,
    name: "Modern Wooden Wardrobe",
    category: "Wardrobes",
    price: 529,
    oldPrice: 649,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=85",
    badge: "POPULAR",
    description:
      "A stylish wooden wardrobe designed to bring practical storage and timeless style to your bedroom.",
  },
  {
    id: 3,
    name: "Premium Comfort Mattress",
    category: "Mattresses",
    price: 299,
    oldPrice: 399,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85",
    badge: "SALE",
    description:
      "Enjoy a comfortable night's sleep with this premium mattress, designed for everyday comfort.",
  },
  {
    id: 4,
    name: "Elegant Bedside Table",
    category: "Chest of Drawers",
    price: 129,
    oldPrice: 169,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=85",
    badge: "BESTSELLER",
    description:
      "A refined bedside table that combines elegant design with useful everyday storage.",
  },
  {
    id: 5,
    name: "Modern Dining Chair",
    category: "Dining Furniture",
    price: 149,
    oldPrice: 199,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=85",
    badge: "NEW",
    description:
      "A beautifully crafted dining chair that adds contemporary elegance and comfort to your dining space.",
  },
  {
    id: 6,
    name: "Contemporary Sofa",
    category: "Sofas",
    price: 799,
    oldPrice: 999,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85",
    badge: "",
    description:
      "A contemporary sofa designed to bring comfort, sophistication and timeless style to your living room.",
  },
  {
    id: 7,
    name: "Wooden Bunk Bed",
    category: "Bunk Beds",
    price: 389,
    oldPrice: 479,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=85",
    badge: "NEW",
    description:
      "A practical wooden bunk bed designed to maximise bedroom space while providing comfort and style.",
  },
  {
    id: 8,
    name: "Classic Bedroom Bed",
    category: "Beds",
    price: 599,
    oldPrice: 749,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=85",
    badge: "",
    description:
      "A classic bedroom bed featuring an elegant design and a comfortable sleeping experience.",
  },

  {
    id: 9,
    name: "Modern Bouclé Accent Chair",
    category: "Sofas",
    price: 279,
    oldPrice: 329,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=85",
    badge: "NEW",
    description:
      "A luxurious bouclé accent chair featuring soft textured upholstery and a contemporary design, perfect for adding elegance to your living space.",
  },
  {
    id: 10,
    name: "Minimalist Oak Coffee Table",
    category: "Dining Furniture",
    price: 189,
    oldPrice: 229,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=85",
    badge: "NEW ARRIVAL",
    description:
      "A minimalist oak coffee table designed to bring natural warmth and modern elegance to your home.",
  },
  {
    id: 11,
    name: "Contemporary Dining Chair",
    category: "Dining Furniture",
    price: 149,
    oldPrice: 189,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=85",
    badge: "NEW",
    description:
      "A contemporary dining chair combining comfortable seating with timeless modern styling.",
  },
  {
    id: 12,
    name: "Elegant Upholstered Sofa",
    category: "Sofas",
    price: 799,
    oldPrice: 949,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85",
    badge: "JUST IN",
    description:
      "An elegant upholstered sofa designed to create a sophisticated and comfortable living room.",
  },

 
{
  id: 13,
  name: "New Brand Divan Beds with Panel Headboard",
  category: "Beds",
  price: 190,
  withMattressPrice: 230,
  oldPrice: 190,
  image: "/images/new-brand-divan-bed.jpg",
  badge: "NEW ARRIVAL",
  description:
    "A stylish upholstered divan bed featuring a modern vertical panel headboard and elegant fabric finish. Customise your bed by choosing your preferred size, fabric and colour, with or without a mattress.",

  sizes: [
    {
      name: "Single",
      dimension: "3ft",
      withoutMattress: 190,
      withMattress: 230,
    },
    {
      name: "Small Double",
      dimension: "4ft",
      withoutMattress: 210,
      withMattress: 250,
    },
    {
      name: "Double",
      dimension: "4ft 6",
      withoutMattress: 230,
      withMattress: 270,
    },
    {
      name: "King",
      dimension: "5ft",
      withoutMattress: 260,
      withMattress: 300,
    },
  ],

  fabrics: [
    {
      name: "Plush Velvet",
      colors: [
        "Steel",
        "Silver",
        "Grey",
        "Black",
        "Sapphire",
        "White",
        "Mustard Gold",
        "Duck Egg",
        "Beige",
        "Teal",
        "Maroon",
        "Pink",
      ],
    },
    {
      name: "Chenille",
      colors: [
        "Mink",
        "Beige",
        "Brown",
        "Silver",
        "Charcoal",
        "Teal",
        "Purple",
        "Maroon",
        "Red",
        "Black",
      ],
    },
    {
      name: "Crushed Velvet",
      colors: [
        "White",
        "Silver",
        "Gold",
        "Beige",
        "Grey",
        "Pink",
        "Mink",
        "Teal",
        "Denim Blue",
        "Red",
        "Black",
        "Aubergine",
      ],
    },
    {
      name: "Naples",
      colors: [
        "Cream",
        "Mink",
        "Beige",
        "Silver",
        "Grey",
        "Charcoal",
        "Teal",
        "Blue",
        "Purple",
        "Black",
      ],
    },
  ],
},


];

export default products;
