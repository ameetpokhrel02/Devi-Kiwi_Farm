import React from 'react';
import { products, Product } from '../data/products';
import { useNavigate } from 'react-router-dom';

interface ProductListProps {
  onProductClick?: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-green-600 font-bold text-xl">Rs. {product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList; 