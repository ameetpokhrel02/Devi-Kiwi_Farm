export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Kiwi',
    price: 120,
    image: '/kiwi-farm-bloom-landing-main/src/assets/kiwi 1.jpg',
    description: 'Delicious, organic kiwis grown on our sustainable farm.',
  },
  {
    id: '2',
    name: 'Kiwi Jam',
    price: 250,
    image: '/kiwi-farm-bloom-landing-main/src/assets/kwiwi jam.webp',
    description: 'Homemade kiwi jam with a sweet and tangy flavor.',
  },
  {
    id: '3',
    name: 'Dried Kiwi Slices',
    price: 180,
    image: '/kiwi-farm-bloom-landing-main/src/assets/dried kiwi.jpg',
    description: 'Healthy dried kiwi slices, perfect for snacking.',
  },
  {
    id: '4',
    name: 'Kiwi Juice',
    price: 90,
    image: '/kiwi-farm-bloom-landing-main/src/assets/kiwi juice.png',
    description: 'Refreshing kiwi juice, packed with vitamins.',
  },
]; 