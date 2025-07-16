import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p>Your cart is empty.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center mb-4 border-b pb-4">
              <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Rs. {item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, Number(e.target.value))}
                    className="w-12 text-center border border-gray-300 mx-1 rounded"
                  />
                  <button
                    className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition ml-4"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold">Total: Rs. {total}</span>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            onClick={() => {
              alert('Checkout not implemented yet.');
              clearCart();
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 