import React from 'react';
import { useCart } from './CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ minWidth: 350 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold text-orange-600">Shopping Cart</h2>
        <button onClick={onClose} className="text-2xl text-gray-500 hover:text-red-500">&times;</button>
      </div>
      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center bg-white rounded-lg shadow mb-4 p-3 border">
              <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded mr-4 border" />
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{item.name}</div>
                <div className="text-gray-500 text-sm mb-1">${item.price.toFixed(2)}</div>
                <div className="flex items-center">
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
                className="ml-4 text-red-500 hover:bg-red-100 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                onClick={() => removeFromCart(item.id)}
                title="Remove"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
      {/* Footer */}
      <div className="p-6 border-t bg-white">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-xl text-gray-800">${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full border border-orange-600 text-orange-600 py-2 rounded-full font-semibold mb-3 hover:bg-orange-50 transition disabled:opacity-50"
          onClick={clearCart}
          disabled={cart.length === 0}
        >
          Clear Cart
        </button>
        <button
          className="w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700 transition disabled:opacity-50"
          disabled={cart.length === 0}
          onClick={() => alert('Checkout functionality coming soon!')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer; 