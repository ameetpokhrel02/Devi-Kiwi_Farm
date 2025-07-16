import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto py-8 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage; 