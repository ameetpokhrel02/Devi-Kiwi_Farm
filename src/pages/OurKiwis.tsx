import React from 'react';
import demoVideo from '../assets/videos/Devi Pokharel kiwi farmer Tehrathum.mp4';

const kiwiTypes = [
  {
    name: 'Red Kiwi',
    description: 'A rare variety with red flesh, sweet and tangy flavor.',
    color: 'bg-red-200',
  },
  {
    name: 'Green Kiwi',
    description: 'The classic kiwi with green flesh and a refreshing taste.',
    color: 'bg-green-200',
  },
  {
    name: 'Golden Kiwi',
    description: 'Yellow-fleshed kiwi, less tart and more tropical.',
    color: 'bg-yellow-200',
  },
];

const OurKiwis: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pb-16">
      {/* Hero Section with Video */}
      <div className="relative w-full h-[320px] md:h-[480px] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-xl mb-12">
        <video
          src={demoVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">Our Kiwi Varieties</h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">Discover the unique flavors and colors of our farm-grown kiwis.</p>
        </div>
      </div>
      {/* Kiwi Types Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kiwiTypes.map((kiwi) => (
            <div key={kiwi.name} className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${kiwi.color}`}>
              <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-inner" style={{background: 'rgba(0,0,0,0.1)'}}>
                {kiwi.name.split(' ')[0]}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{kiwi.name}</h2>
              <p className="text-gray-700 text-center">{kiwi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurKiwis; 