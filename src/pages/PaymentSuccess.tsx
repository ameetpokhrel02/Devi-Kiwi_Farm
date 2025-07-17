import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
        <p className="text-lg mb-6">Thank you for your payment. Your order is confirmed.</p>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition font-semibold"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess; 