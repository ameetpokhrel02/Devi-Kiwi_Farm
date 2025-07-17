import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-700 mb-4">Payment Failed</h1>
        <p className="text-lg mb-6">Your payment was not successful or was cancelled. Please try again.</p>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition font-semibold"
          onClick={() => navigate('/cart')}
        >
          Return to Cart
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure; 