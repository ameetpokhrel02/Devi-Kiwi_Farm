import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p>Your cart is empty.</p>
        {/* TODO: List cart items and checkout button */}
      </div>
    </div>
  );
};

export default CartPage; 