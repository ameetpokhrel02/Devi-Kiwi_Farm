import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import demoVideo from '../assets/videos/Devi Pokharel kiwi farmer Tehrathum.mp4';
import kiwi1 from '../assets/kiwi 1.jpg';
import kiwi2 from '../assets/kiwi 2.jpg';
import kiwi3 from '../assets/kiwi 3.jpg';

const kiwiTypes = [
  {
    name: 'Red Kiwi',
    description: 'A rare variety with red flesh, sweet and tangy flavor.',
    image: kiwi1,
  },
  {
    name: 'Green Kiwi',
    description: 'The classic kiwi with green flesh and a refreshing taste.',
    image: kiwi2,
  },
  {
    name: 'Golden Kiwi',
    description: 'Yellow-fleshed kiwi, less tart and more tropical.',
    image: kiwi3,
  },
];

const OurKiwis: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Navbar />
      <section className="flex-1 pb-16">
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
          {/* Green Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-600/60 to-green-300/40 z-10" />
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-20 h-20 bg-green-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-lime-300/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">Our Kiwi Varieties</h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">Discover the unique flavors and colors of our farm-grown kiwis.</p>
          </div>
        </div>
        {/* Kiwi Types Section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kiwiTypes.map((kiwi) => (
              <div
                key={kiwi.name}
                className={`rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 cursor-pointer group bg-white hover:scale-105 hover:shadow-2xl hover:bg-green-50/80`}
                style={{ opacity: 0.97 }}
              >
                <img
                  src={kiwi.image}
                  alt={kiwi.name}
                  className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-green-200 group-hover:scale-110 transition-transform duration-300 shadow"
                />
                <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-green-800 transition-colors duration-300">{kiwi.name}</h2>
                <p className="text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">{kiwi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurKiwis; 