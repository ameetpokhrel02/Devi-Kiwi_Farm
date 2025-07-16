import React from 'react';
import fieldBg from '../assets/farming-equipment.jpg';

const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 48 48"><path d="M12 36v-4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v4" stroke="#8BC34A" strokeWidth="2.5"/><path d="M24 36v-8" stroke="#8BC34A" strokeWidth="2.5"/><circle cx="24" cy="16" r="6" stroke="#8BC34A" strokeWidth="2.5"/></svg>
    ),
    title: 'Organic Kiwi Fertiliser',
    desc: 'We use only organic fertilisers to grow the healthiest, most flavorful kiwis for your table.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="16" rx="4" stroke="#8BC34A" strokeWidth="2.5"/><path d="M16 20v-4a8 8 0 0 1 16 0v4" stroke="#8BC34A" strokeWidth="2.5"/></svg>
    ),
    title: 'Kiwi Farm Mechanization',
    desc: 'Modern tools and techniques ensure our kiwi orchards are sustainable and efficient.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 48 48"><polygon points="24,8 40,40 8,40" stroke="#8BC34A" strokeWidth="2.5" fill="none"/><circle cx="24" cy="28" r="4" stroke="#8BC34A" strokeWidth="2.5"/></svg>
    ),
    title: 'Water Management for Kiwis',
    desc: 'Our advanced water management keeps our kiwis juicy, fresh, and eco-friendly.',
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="relative py-16 px-2 md:px-0 flex flex-col items-center justify-center min-h-[420px] w-full">
      {/* Background image with green overlay */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${fieldBg})` }}>
        <div className="absolute inset-0 bg-green-700/70" />
      </div>
      {/* Main callout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-16 px-4 md:px-12 text-center rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Leading the Future of Kiwi Farming</h2>
        <p className="text-lg md:text-xl text-white/90 mb-6 font-sans drop-shadow">Through innovative technology and sustainable, organic kiwi practices</p>
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 transition mb-8">Learn More About Our Farm</button>
        {/* Services row */}
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center mt-4">
          {services.map((service) => (
            <div key={service.title} className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-green-700 mb-1 font-serif">{service.title}</h3>
              <p className="text-base text-earth-brown/90 font-sans leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices; 