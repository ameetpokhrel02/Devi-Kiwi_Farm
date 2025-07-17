import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import esewaLogo from '../assets/esewa.png';
import khaltiLogo from '../assets/khalti.png';
import imeLogo from '../assets/IME-Pay-Logo.png';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderId = `ORDER${Date.now()}`;

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
            onClick={() => setShowPayment(true)}
          >
            Checkout
          </button>
        </div>
      </div>
      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setShowPayment(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Choose Payment Method</h2>
            <div className="flex flex-col gap-4">
              {/* eSewa Payment Form */}
              <form
                action="https://esewa.com.np/login#/home"
                method="POST"
                className="flex flex-col gap-2 items-center"
              >
                <img src={esewaLogo} alt="eSewa" className="h-10 mb-2" />
                <input type="hidden" name="amount" value={total} />
                <input type="hidden" name="tax_amount" value="0" />
                <input type="hidden" name="total_amount" value={total} />
                <input type="hidden" name="transaction_uuid" value={orderId} />
                <input type="hidden" name="product_code" value="EPAYTEST" />
                <input type="hidden" name="success_url" value="http://localhost:8081/payment-success" />
                <input type="hidden" name="failure_url" value="http://localhost:8081/payment-failure" />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition font-semibold w-full flex items-center justify-center gap-2"
                >
                  Pay with eSewa
                </button>
              </form>
              {/* Khalti Button (not functional yet) */}
              <button
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition font-semibold w-full flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                disabled
              >
                <img src={khaltiLogo} alt="Khalti" className="h-8 mr-2" />
                Pay with Khalti (Coming Soon)
              </button>
              {/* IME Pay Button (not functional yet) */}
              <button
                className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition font-semibold w-full flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                disabled
              >
                <img src={imeLogo} alt="IME Pay" className="h-8 mr-2" />
                Pay with IME Pay (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 