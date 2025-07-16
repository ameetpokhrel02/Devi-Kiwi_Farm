import kiwi1 from '../assets/kiwi 1.jpg';
import kiwi2 from '../assets/kiwi 2.jpg';
import kiwi3 from '../assets/kiwi 3.jpg';
import kiwi4 from '../assets/kiwi 4.jpg';
import kwiwiJam from '../assets/kwiwi jam.webp';
import kiwi5 from '../assets/kiwi 5.webp';
import kiwi6 from '../assets/kiwi 6.jpeg';
import kiwi7 from '../assets/kiwi 7.jpg';
import driedKiwi from '../assets/dried kiwi.jpg';
import kiwi8 from '../assets/kiwi 8.jpg';
import kiwi9 from '../assets/kiwi 9.jpg';
import kiwi10 from '../assets/kiwi 10.jpg';
import kiwiJuice from '../assets/kiwi juice.png';
import kiwi11 from '../assets/kiwi 11.jpg';
import kiwi12 from '../assets/kiwi 12.jpg';
import kiwi13 from '../assets/kiwi 13.jpg';
import kiwi14 from '../assets/kiwi 14.jpg';
import kiwi15 from '../assets/kiwi15.jpg';
import kiwi18 from '../assets/kiwi 18.jpg';
import kiwiPickle from '../assets/kiwiw pickle.jpg';
import kiwiCream from '../assets/kiwi-cream.png';
import kiwi19 from '../assets/kiwi 19.jpg';
import kiwi20 from '../assets/kiwi 20.jpg';
import kiwi21 from '../assets/kiwi 21.webp';
import kiwiFruitCrush from '../assets/kiwi-fruit-crush-mapro-1.webp';
import kiwi22 from '../assets/kiwi 22.jpeg';
import kowi12 from '../assets/kowi 12.jpg';
import kiwiFarmHero from '../assets/kiwi-farm-hero.jpg';
import kiwiCutting from '../assets/Kiwi cutting.webp';
import kiwiFruits from '../assets/kiwi-fruits.jpg';
import kiwiIol from '../assets/kiwi-iol.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  benefits: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Kiwi',
    price: 120,
    images: [kiwi1, kiwi2, kiwi3, kiwi4],
    description: 'Delicious, organic kiwis grown on our sustainable farm.',
    benefits: [
      'Rich in Vitamin C',
      'Boosts immunity',
      'Good for digestion',
      'Low in calories',
    ],
    colors: ['#8BC34A', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '2',
    name: 'Kiwi Jam',
    price: 250,
    images: [kwiwiJam, kiwi5, kiwi6, kiwi7],
    description: 'Homemade kiwi jam with a sweet and tangy flavor.',
    benefits: [
      'Made from fresh kiwis',
      'No added preservatives',
      'Perfect for breakfast',
      'Sweet and tangy taste',
    ],
    colors: ['#A3D977', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '3',
    name: 'Dried Kiwi Slices',
    price: 180,
    images: [driedKiwi, kiwi8, kiwi9, kiwi10],
    description: 'Healthy dried kiwi slices, perfect for snacking.',
    benefits: [
      'Great snack option',
      'No added sugar',
      'Long shelf life',
      'Retains nutrients',
    ],
    colors: ['#C5E1A5', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '4',
    name: 'Kiwi Juice',
    price: 90,
    images: [kiwiJuice, kiwi11, kiwi12, kiwi13],
    description: 'Refreshing kiwi juice, packed with vitamins.',
    benefits: [
      'Hydrating and refreshing',
      'Rich in antioxidants',
      'No artificial flavors',
      'Boosts energy',
    ],
    colors: ['#AED581', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '5',
    name: 'Kiwi Pickle',
    price: 200,
    images: [kiwiPickle, kiwi14, kiwi15, kiwi18],
    description: 'Tangy and spicy kiwi pickle, a unique twist on traditional flavors.',
    benefits: [
      'Aids digestion',
      'Unique taste',
      'No artificial preservatives',
      'Handcrafted in small batches',
    ],
    colors: ['#A5D6A7', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '6',
    name: 'Kiwi Cream',
    price: 300,
    images: [kiwiCream, kiwi19, kiwi20, kiwi21],
    description: 'Smooth and luscious kiwi cream, perfect for desserts and spreads.',
    benefits: [
      'Rich and creamy texture',
      'Natural kiwi flavor',
      'Versatile use',
      'No added sugar',
    ],
    colors: ['#C8E6C9', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '7',
    name: 'Kiwi Fruit Crush',
    price: 220,
    images: [kiwiFruitCrush, kiwi22, kowi12, kiwiFarmHero],
    description: 'Kiwi fruit crush, ideal for drinks, desserts, and toppings.',
    benefits: [
      'Easy to use in recipes',
      'Intense kiwi flavor',
      'No artificial colors',
      'Great for summer drinks',
    ],
    colors: ['#B2DFDB', '#FFD700', '#FF5722', '#F44336'],
  },
  {
    id: '8',
    name: 'Kiwi Cutting',
    price: 60,
    images: [kiwiCutting, kiwiFruits, kiwiIol, kiwiFarmHero],
    description: 'Freshly cut kiwi pieces, ready to eat or use in salads.',
    benefits: [
      'Convenient and ready to eat',
      'Perfect for salads',
      'Rich in nutrients',
      'No added sugar',
    ],
    colors: ['#DCEDC8', '#FFD700', '#FF5722', '#F44336'],
  },
]; 