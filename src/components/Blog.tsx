import React from 'react';
import parentsImg from '../assets/dadmom.jpg';
import buffaloFarmer from '../assets/buffalo-farmer-cultivating-agriculture.jpg';
import farmerPortrait from '../assets/farmer-portrait.jpg';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="bg-gradient-to-br from-green-50 to-green-100">
      {/* Enhanced Blog Hero Section */}
      <div className="relative w-full h-[340px] md:h-[440px] flex items-center justify-center mb-12 overflow-hidden rounded-b-3xl shadow-xl">
        {/* Background Image */}
        <img
          src={buffaloFarmer}
          alt="Buffalo Farmer Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Colorful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-700/70 via-green-500/50 to-lime-300/40 z-10" />
        {/* Floating Circle */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-green-300/40 rounded-full z-20 animate-float" style={{animationDelay: '1s'}} />
        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2 mb-4 shadow backdrop-blur-sm animate-fade-in">
            <span className="text-lg">🌱</span>
            <span className="text-sm font-semibold text-green-800">Blog Stories</span>
          </div>
          {/* Subheading */}
          <div className="text-base md:text-lg text-green-50 font-medium mb-2 animate-fade-in" style={{animationDelay: '0.1s'}}>Inspiring stories from Nepali farmers</div>
          {/* Main Nepali Heading */}
          <span className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight animate-slide-up" style={{letterSpacing: '0.02em', animationDelay: '0.2s'}}>
            हरेक <span className="text-green-200">किसानको</span> आफ्नै <span className="text-green-200">कथा</span> हुन्छ
          </span>
        </div>
      </div>

      {/* New Nepali CTA Section with Article */}
      <div className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center mb-12 overflow-hidden rounded-3xl shadow-xl animate-fade-in" style={{animationDelay: '0.3s'}}>
        {/* Background Image */}
        <img
          src={buffaloFarmer}
          alt="Farmers Working"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <div className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg animate-slide-up" style={{animationDelay: '0.4s', lineHeight: '1.3'}}>
            व्यावसायिक कृषिमा हातेमालो गरौं<br />
            उत्पादन शक्ति वृद्धि गरौं
          </div>
          {/* Article Card */}
          <div className="w-full max-w-3xl bg-white/95 rounded-2xl shadow-lg p-6 md:p-10 mb-6 flex flex-col md:flex-row gap-8 items-center md:items-stretch animate-fade-in" style={{animationDelay: '0.45s'}}>
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
              <img 
                src={parentsImg} 
                alt="Devi and Tila Pokhrel" 
                className="rounded-2xl shadow w-full max-w-xs h-60 object-cover border-4 border-green-200" 
              />
            </div>
            <article className="flex-1 text-base md:text-lg text-gray-800 space-y-4 flex flex-col justify-center text-left md:text-left">
              <p>Located in the beautiful hills of eastern Nepal, Devi Kiwi Farm is a shining example of what dedication, family support, and sustainable farming can achieve. Established in 2072 B.S., the farm is led by Mr. Devi Pokhrel, a passionate and experienced farmer, along with his supportive wife, Mrs. Tila Pokhrel. Their farm has become a model for organic fruit cultivation and rural entrepreneurship in the Tehrathum District.</p>
              <h3 className="text-xl font-bold text-green-700 mt-4 mb-2">🌱 Meet the Founders: Mr. Devi Pokhrel & Mrs. Tila Pokhrel</h3>
              <p>With over 10 years of experience in kiwi farming, Mr. Devi Pokhrel is not just a farmer but also a leader in the agricultural community. As the Chairman of the Tehrathum District Kiwi Organization, he has trained over 100 farmers each year, helping them begin their own kiwi farming journey.</p>
              <p>His wife, Tila Pokhrel, has been by his side since day one — working both in the kiwi and tea farms. Her contributions are not limited to agriculture; she also served as the First Deputy Mayor of Laligurans Municipality (2074–2079 B.S.) from the Nepali Congress Party, leading with dedication and vision.</p>
            </article>
          </div>
          {/* Read More Button */}
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded shadow-lg transition-all duration-200 animate-fade-in mb-2" style={{animationDelay: '0.5s'}}>
            Read More
          </button>
          {/* CTA Button */}
          <button className="mt-2 px-8 py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded shadow-lg transition-all duration-200 animate-fade-in" style={{animationDelay: '0.55s'}}>
            दर्ता गर्नुहोस् !
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog; 