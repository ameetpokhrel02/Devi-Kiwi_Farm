import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f6] py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-neutral-800">Shopping Cart</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">Your cart is empty.</div>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-6 border-b pb-4 last:border-b-0 last:pb-0">
                <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded mr-4 border" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-gray-500 text-sm mb-1">Rs. {item.price}</div>
                  <div className="flex items-center mt-2">
                    <button
                      className="text-orange-600 border border-orange-600 rounded-full w-7 h-7 flex items-center justify-center hover:bg-orange-50 disabled:opacity-50"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      –
                    </button>
                    <span className="mx-2 w-6 text-center">{item.quantity}</span>
                    <button
                      className="text-orange-600 border border-orange-600 rounded-full w-7 h-7 flex items-center justify-center hover:bg-orange-50"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <span className="font-bold text-lg">Total: Rs. {total}</span>
              <button
                className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition disabled:opacity-50"
                disabled={cart.length === 0}
                onClick={() => alert('Checkout functionality coming soon!')}
              >
                Checkout
              </button>
            </div>
            <button
              className="w-full border border-orange-600 text-orange-600 py-2 rounded-full font-semibold mt-3 hover:bg-orange-50 transition disabled:opacity-50"
              onClick={clearCart}
              disabled={cart.length === 0}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 