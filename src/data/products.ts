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
]; 