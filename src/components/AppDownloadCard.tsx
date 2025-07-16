import React from 'react';
import kiwiLogo from '../assets/LOGO KIWI.png';

const AppDownloadCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#a97c50] via-[#f7e7d1] to-[#f7e7d1] rounded-xl shadow-lg px-6 py-5 w-full max-w-sm flex flex-col items-center border border-[#c9b29b]">
      <div className="flex items-center mb-2">
        <img src={kiwiLogo} alt="Kiwi Logo" className="w-10 h-10 mr-2 rounded-full bg-white p-1 shadow" />
        <span className="font-bold text-lg text-earth-brown">Download the App</span>
      </div>
      <div className="bg-warm-cream/90 rounded-xl p-3 w-full mb-4">
        <div className="flex items-center mb-1">
          <span className="bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded mr-2">★ 4.8 Rated</span>
          <span className="font-semibold text-sm text-earth-brown">Download App</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <span className="bg-white rounded-full p-1 shadow">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" stroke="#4CAF50" strokeWidth="2"/><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="#4CAF50" strokeWidth="2"/></svg>
            </span>
            <span className="text-xs font-medium text-earth-brown">Free Delivery</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <span className="bg-white rounded-full p-1 shadow">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#E91E63" strokeWidth="2"/><circle cx="12" cy="12" r="10" stroke="#E91E63" strokeWidth="2"/></svg>
          </span>
          <span className="text-xs font-medium text-earth-brown">Limited Time</span>
        </div>
      </div>
      {/* QR code placeholder */}
      <div className="bg-white rounded-lg p-2 mb-3 shadow">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://devi-kiwi-farm.com" alt="QR Code" className="w-24 h-24" />
      </div>
      <div className="flex flex-col gap-2 w-full mb-2">
        <a href="#" className="flex items-center justify-center bg-black text-white rounded-lg py-2 font-semibold text-sm hover:bg-gray-800 transition">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.564 13.06c-.024-2.504 2.05-3.7 2.142-3.755-1.17-1.71-2.99-1.947-3.63-1.97-1.54-.156-3.01.91-3.79.91-.78 0-1.98-.89-3.26-.87-1.68.025-3.23.98-4.1 2.48-1.75 3.03-.45 7.5 1.25 9.96.83 1.18 1.81 2.5 3.1 2.45 1.25-.05 1.72-.8 3.23-.8 1.51 0 1.92.8 3.24.78 1.34-.02 2.18-1.19 2.99-2.37.63-.92.89-1.41 1.39-2.47-3.66-1.4-3.53-4.09-3.5-4.29zm-3.34-8.13c.7-.85 1.18-2.04 1.05-3.23-1.01.04-2.23.67-2.95 1.52-.65.76-1.22 1.98-1.01 3.14 1.13.09 2.21-.57 2.91-1.43z"/></svg>
          App Store
        </a>
        <a href="#" className="flex items-center justify-center bg-white border border-gray-300 text-earth-brown rounded-lg py-2 font-semibold text-sm hover:bg-gray-100 transition">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 20.4c.3.3.7.3 1 0l2.7-2.7c.3-.3.3-.7 0-1l-2.7-2.7c-.3-.3-.7-.3-1 0l-2.7 2.7c-.3.3-.3.7 0 1l2.7 2.7zm16.8-16.8c-.3-.3-.7-.3-1 0l-2.7 2.7c-.3.3-.3.7 0 1l2.7 2.7c.3.3.7.3 1 0l2.7-2.7c.3-.3.3-.7 0-1l-2.7-2.7zm-8.4 2.4c-4.4 0-8 3.6-8 8 0 1.7.5 3.3 1.4 4.6l11.2-11.2c-1.3-.9-2.9-1.4-4.6-1.4zm0 16c4.4 0 8-3.6 8-8 0-1.7-.5-3.3-1.4-4.6l-11.2 11.2c1.3.9 2.9 1.4 4.6 1.4z"/></svg>
          Google Play
        </a>
      </div>
      <span className="text-xs text-earth-brown mt-2">Download the App Now!</span>
    </div>
  );
};

export default AppDownloadCard; 