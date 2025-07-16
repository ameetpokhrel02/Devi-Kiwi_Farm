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
    images: [
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 1.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 2.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 3.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 4.jpg',
    ],
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
    images: [
      '/kiwi-farm-bloom-landing-main/src/assets/kwiwi jam.webp',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 5.webp',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 6.jpeg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 7.jpg',
    ],
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
    images: [
      '/kiwi-farm-bloom-landing-main/src/assets/dried kiwi.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 8.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 9.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 10.jpg',
    ],
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
    images: [
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi juice.png',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 11.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 12.jpg',
      '/kiwi-farm-bloom-landing-main/src/assets/kiwi 13.jpg',
    ],
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