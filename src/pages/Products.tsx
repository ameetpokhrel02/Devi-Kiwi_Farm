import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage; 