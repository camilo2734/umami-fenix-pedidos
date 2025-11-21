import { Product } from '../types';

// LISTA ESTRICTA DE PRODUCTOS (Basada 100% en el PDF)
// Solo se asignan imágenes a los productos que tienen FOTO REAL en el PDF o se han añadido explícitamente.

export const PRODUCTS: Product[] = [
  // --- DEDITOS (GRID SUPERIOR CON FOTOS) ---
  {
    id: 'dedito-pollo-6',
    name: 'Empanada de Pollo x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-pollo-6.jpg',
    description: 'Empanada rellena de pollo. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-pollo-queso-6',
    name: 'Empanada Pollo/Queso x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-pollo-queso-6.jpg',
    description: 'Empanada rellena de pollo y queso. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-carne-6',
    name: 'Empanada de Carne x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-carne-6.jpg',
    description: 'Empanada rellena de carne. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-hawaiana-6',
    name: 'Empanada Hawaiana x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-hawaiana-6.jpg',
    description: 'Empanada hawaiana. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-maiz-pollo-queso-6',
    name: 'Empanada de Maíz/Pollo/Queso x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-maiz-pollo-queso-6.jpg',
    description: 'Masa de maíz con pollo y queso. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-jamon-queso-6',
    name: 'Empanada de Jamón/Queso x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-jamon-queso-6.jpg',
    description: 'Empanada de jamón y queso. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-espinaca-6',
    name: 'Empanada de Espinaca x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-espinaca-6.jpg',
    description: 'Queso y cebolla (Espinaca). Paquete por 6 unidades.'
  },
  {
    id: 'dedito-ranchera-6',
    name: 'Empanada Ranchera x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-ranchera-6.jpg',
    description: 'Maíz y queso (Ranchera). Paquete por 6 unidades.'
  },
  {
    id: 'dedito-napolitana-6',
    name: 'Empanada Napolitana x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-napolitana-6.jpg',
    description: 'Tomate, queso y orégano. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-salvaje-6',
    name: 'Empanada Salvaje x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'assets/images/dedito-salvaje-6.jpg',
    description: 'Chorizo, butifarra, maíz y queso. Paquete por 6 unidades.'
  },
  {
    id: 'dedito-platano-6',
    name: 'Empanada de Plátano Maduro x6',
    category: 'Empanadas x6',
    price: 14000,
    image: '', // No tiene foto individual clara en el grid, es un banner.
    description: 'Nueva presentación de plátano maduro.'
  },

  // --- PERSONALES (COLUMNA DERECHA CON FOTOS) ---
  {
    id: 'dedito-queso-8-25g',
    name: 'Dedito Queso x8 (25g)',
    category: 'Personales',
    price: 13000,
    image: 'assets/images/dedito-queso-x8-25g.jpg',
    description: 'Dedito de queso tamaño personal (25g).'
  },
  {
    id: 'dedito-queso-8-40g',
    name: 'Dedito Queso x8 (40g)',
    category: 'Personales',
    price: 15000,
    image: 'assets/images/dedito-queso-x8-40g.jpg',
    description: 'Dedito de queso tamaño personal grande (40g).'
  },
  {
    id: 'dedito-cazador-7',
    name: 'Dedito Cazador x7',
    category: 'Personales',
    price: 14000,
    image: 'assets/images/dedito-cazador-x7.jpg',
    description: 'Dedito con salchicha cazadora.'
  },
  {
    id: 'dedito-jamon-7',
    name: 'Dedito Jamón/Queso x7',
    category: 'Personales',
    price: 15000,
    image: 'assets/images/dedito-jamon-x7.jpg',
    description: 'Dedito de jamón.'
  },
  {
    id: 'dedito-bocadillo-7',
    name: 'Dedito de Bocadillo/Queso x7',
    category: 'Personales',
    price: 14000,
    image: 'assets/images/dedito-bocadillo-x7.jpg',
    description: 'Dedito de bocadillo.'
  },

  // --- LISTADOS (ALGUNOS CON FOTO) ---

  // Deditos
  {
    id: 'dedito-queso-25',
    name: 'Deditos Queso x25',
    category: 'Deditos',
    price: 14000,
    image: 'https://i.imgur.com/cfCbP0y.png',
    description: 'Paquete x25 unidades.'
  },
  {
    id: 'dedito-queso-60',
    name: 'Deditos Queso x60',
    category: 'Deditos',
    price: 32000,
    image: '',
    description: 'Paquete x60 unidades.'
  },
  {
    id: 'dedito-doble-queso-16',
    name: 'Deditos Doble Queso x16',
    category: 'Deditos',
    price: 13000,
    image: '',
    description: 'Paquete x16 unidades.'
  },
  {
    id: 'dedito-doble-queso-25',
    name: 'Deditos Doble Queso x25',
    category: 'Deditos',
    price: 19000,
    image: '',
    description: 'Paquete x25 unidades.'
  },

  // Empanadas
  {
    id: 'emp-pollo-18',
    name: 'Empanadas Pollo x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Paquete x18 unidades.'
  },
  {
    id: 'emp-pollo-queso-18',
    name: 'Empanadas Pollo/Queso x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Paquete x18 unidades.'
  },
  {
    id: 'emp-carne-18',
    name: 'Empanadas Carne x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Paquete x18 unidades.'
  },
  {
    id: 'emp-ranchera-18',
    name: 'Empanadas Ranchera x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Maíz y queso. Paquete x18 unidades.'
  },
  {
    id: 'emp-jamon-queso-18',
    name: 'Empanadas Jamón/Queso x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Paquete x18 unidades.'
  },
  {
    id: 'emp-hawaiana-18',
    name: 'Empanadas Hawaiana x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Paquete x18 unidades.'
  },
  {
    id: 'emp-bocadillo-queso-18',
    name: 'Empanadas Bocadillo/Queso x18',
    category: 'Empanadas x18',
    price: 14000,
    image: '',
    description: 'Paquete x18 unidades.'
  },

  // Bolitas y Medallones
  {
    id: 'medallon-salchicha-25',
    name: 'Medallones Salchicha x25',
    category: 'Bolitas y Medallones',
    price: 10000,
    image: '',
    description: 'Salchicha cazadora. Paquete x25 unidades.'
  },
  {
    id: 'bolitas-fenix-20',
    name: 'Bolitas Fénix (Carne) x20',
    category: 'Bolitas y Medallones',
    price: 10000,
    image: '',
    description: 'Bolitas pequeñas de carne. Paquete x20 unidades.'
  },

  // Surtidos
  {
    id: 'surtido-37',
    name: 'Surtidos x60',
    category: 'Surtidos',
    price: 37000,
    image: '',
    description: 'Deditos, empanadas surtidas, bolitas de carne y medallón de salchicha cazadora. (x60 unidades aprox según gráfico)'
  },
  {
    id: 'surtido-42',
    name: 'Surtidos x50',
    category: 'Surtidos',
    price: 42000,
    image: '',
    description: 'Deditos doble queso y empanadas surtidas. (x50 unidades aprox según gráfico)'
  },
  {
    id: 'surtido-56',
    name: 'Surtidos x100',
    category: 'Surtidos',
    price: 56000,
    image: '',
    description: 'Deditos, empanadas surtidas, bolitas de carne y medallón de salchicha cazadora. (x100 unidades aprox según gráfico)'
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));