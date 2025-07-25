import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../components/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ProductDetailsProps {
  onAddToCart?: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="p-8 text-center text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full mx-auto py-10 px-4">
          <button
            className="mb-6 text-green-600 hover:underline"
            onClick={() => navigate(-1)}
          >
            &larr; Back to Products
          </button>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-64 h-64 object-cover rounded mb-6"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <span className="text-green-600 font-bold text-xl mb-4">Rs. {product.price}</span>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600 transition"
              onClick={() => {
                addToCart(product);
                if (onAddToCart) onAddToCart();
                alert('Added to cart!');
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails; 