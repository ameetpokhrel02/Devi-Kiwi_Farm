import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import adGif from '../assets/videos/addd.gif';

interface ProductsPageProps {
  onAddToCart?: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    setShowAd(true); // Show ad on every mount (navigation or refresh)
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Ad Popup */}
      {showAd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative bg-white rounded-xl shadow-2xl p-2 max-w-xs md:max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
              onClick={() => setShowAd(false)}
              aria-label="Close ad"
            >
              &times;
            </button>
            <img src={adGif} alt="50% Off Ad" className="rounded-lg max-w-full max-h-[70vh]" />
          </div>
        </div>
      )}
      <main className="flex-1 max-w-7xl mx-auto py-8 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        <ProductList onAddToCart={onAddToCart} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage; 