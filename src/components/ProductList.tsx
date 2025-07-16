import React, { useState } from 'react';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColors, setSelectedColors] = useState<{ [id: string]: number }>({});
  const [selectedImages, setSelectedImages] = useState<{ [id: string]: number }>({});

  return (
    <div className="w-full">
      {/* Desktop: 4-column grid, Mobile: horizontal scroll */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-8 p-4">
        {products.map((product) => {
          const mainImgIdx = selectedImages[product.id] ?? 0;
          return (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer relative"
            >
              {/* Image and thumbnails */}
              <div className="bg-gradient-to-br from-green-200 to-green-400 flex flex-col items-center justify-center p-6 relative">
                <img
                  src={product.images[mainImgIdx]}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded-lg shadow-md mb-4 group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/products/${product.id}`)}
                />
                {/* Thumbnails */}
                <div className="flex gap-2 mt-2">
                  {product.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className={`w-8 h-8 object-cover rounded border ${mainImgIdx === i ? 'border-green-500' : 'border-gray-200'} hover:border-green-500 transition cursor-pointer`}
                      onClick={() => setSelectedImages((prev) => ({ ...prev, [product.id]: i }))}
                    />
                  ))}
                </div>
                {/* Favorite/heart icon placeholder */}
                <div className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-xl">
                  ♥
                </div>
              </div>
              {/* Details */}
              <div className="flex flex-col justify-center p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-500 text-sm mb-1">COD: {1000 + Number(product.id)}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">Rs. {product.price}</div>
                {/* Color selection */}
                <div className="mb-4">
                  <span className="font-semibold mr-2">Select a color:</span>
                  {product.colors.map((color, idx) => (
                    <button
                      key={color}
                      className={`w-5 h-5 rounded-full border-2 mx-1 focus:outline-none ${selectedColors[product.id] === idx ? 'border-green-600' : 'border-gray-300'}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColors((prev) => ({ ...prev, [product.id]: idx }))}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
                {/* Benefits/description */}
                <ul className="mb-4 list-disc list-inside text-gray-700 text-xs">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <div className="flex gap-4 items-center mt-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition font-semibold text-base"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="text-green-600 underline hover:text-green-800 transition text-sm"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-6 overflow-x-auto p-4 snap-x">
        {products.map((product) => {
          const mainImgIdx = selectedImages[product.id] ?? 0;
          return (
            <div
              key={product.id}
              className="min-w-[90vw] max-w-xs flex-shrink-0 flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer relative snap-center"
            >
              <div className="bg-gradient-to-br from-green-200 to-green-400 flex flex-col items-center justify-center p-6 relative">
                <img
                  src={product.images[mainImgIdx]}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded-lg shadow-md mb-4 group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/products/${product.id}`)}
                />
                <div className="flex gap-2 mt-2">
                  {product.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className={`w-8 h-8 object-cover rounded border ${mainImgIdx === i ? 'border-green-500' : 'border-gray-200'} hover:border-green-500 transition cursor-pointer`}
                      onClick={() => setSelectedImages((prev) => ({ ...prev, [product.id]: i }))}
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-xl">
                  ♥
                </div>
              </div>
              <div className="flex flex-col justify-center p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-500 text-sm mb-1">COD: {1000 + Number(product.id)}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">Rs. {product.price}</div>
                <div className="mb-4">
                  <span className="font-semibold mr-2">Select a color:</span>
                  {product.colors.map((color, idx) => (
                    <button
                      key={color}
                      className={`w-5 h-5 rounded-full border-2 mx-1 focus:outline-none ${selectedColors[product.id] === idx ? 'border-green-600' : 'border-gray-300'}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColors((prev) => ({ ...prev, [product.id]: idx }))}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
                <ul className="mb-4 list-disc list-inside text-gray-700 text-xs">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <div className="flex gap-4 items-center mt-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition font-semibold text-base"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="text-green-600 underline hover:text-green-800 transition text-sm"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList; 