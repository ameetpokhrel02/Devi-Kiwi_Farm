import React, { useState } from 'react';
import parentsImg from '../assets/patrents .png';
import buffaloFarmer from '../assets/buffalo-farmer-cultivating-agriculture.jpg';
import farmerPortrait from '../assets/patrents .png';

const Blog: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // Article content split into paragraphs for easy show/hide
  const articleParagraphs = [
    'Located in the beautiful hills of eastern Nepal, Devi Kiwi Farm is a shining example of what dedication, family support, and sustainable farming can achieve. Established in 2072 B.S., the farm is led by Mr. Devi Pokhrel, a passionate and experienced farmer, along with his supportive wife, Mrs. Tila Pokhrel. Their farm has become a model for organic fruit cultivation and rural entrepreneurship in the Tehrathum District.',
    '🌱 Meet the Founders: Mr. Devi Pokhrel & Mrs. Tila Pokhrel',
    'With over 10 years of experience in kiwi farming, Mr. Devi Pokhrel is not just a farmer but also a leader in the agricultural community. As the Chairman of the Tehrathum District Kiwi Organization, he has trained over 100 farmers each year, helping them begin their own kiwi farming journey.',
    'His wife, Tila Pokhrel, has been by his side since day one — working both in the kiwi and tea farms. Her contributions are not limited to agriculture; she also served as the First Deputy Mayor of Laligurans Municipality (2074–2079 B.S.) from the Nepali Congress Party, leading with dedication and vision.',
    '🍇 Organic Kiwi Farming',
    'Devi Kiwi Farm spreads across 5,214 square meters (१० रोपनी ४ आना) of rich, fertile land located in Solma, Purundin – Ward No. 9, Laligurans Municipality, Tehrathum District.',
    'With nearly 250 kiwi plants, the farm produces an impressive 5,000 to 7,000 kilograms of organic kiwi fruit annually, earning a profit of nearly NPR 7–8 lakh per year. All their produce is grown using organic fertilizers and natural pesticides made from their own cows, goats, and hens — ensuring high quality and sustainability.',
    '🌱 Tea Farming & Expansion into Kiwi Products',
    'In addition to kiwis, the Pokhrel family also engages in organic tea farming, producing 500 to 700 kilograms of tea leaves annually. Both Devi and Tila are equally involved in the tea farming process, working together with dedication and harmony.',
    'Their farm has also started processing kiwi into juice and pickles, and they are now planning to introduce kiwi jam and wine production within a year — expanding their reach into value-added organic products.',
    '⚙️ A Multifaceted Life',
    'Despite his busy schedule on the farm, Mr. Devi Pokhrel also runs an electrical shop in Lasune Bazar, some distance from his home. He balances his business and farming life with impressive commitment and energy. His wife Tila continues to inspire local women with her involvement in both governance and agriculture.',
    'As Devi Kiwi Farm continues to grow, their plans for kiwi-based products, sustainable agriculture, and empowering others shine brightly as a model for rural Nepal.'
  ];

  const visibleParagraphs = expanded ? articleParagraphs : articleParagraphs.slice(0, 3);

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
      <div className="relative w-full min-h-[520px] flex items-center justify-center mb-12 overflow-hidden rounded-3xl shadow-xl animate-fade-in" style={{animationDelay: '0.3s'}}>
        {/* Background Image */}
        <img
          src={buffaloFarmer}
          alt="Farmers Working"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-2 md:px-4">
          <div className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg animate-slide-up" style={{animationDelay: '0.4s', lineHeight: '1.3'}}>
            व्यावसायिक कृषिमा हातेमालो गरौं<br />
            उत्पादन शक्ति वृद्धि गरौं
          </div>
          {/* Article Card */}
          <div className="w-full max-w-4xl bg-white/95 rounded-2xl shadow-lg p-4 md:p-8 mb-6 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch animate-fade-in transition-all duration-500">
            {/* Image side */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-start md:items-center">
              <div className="bg-green-100 rounded-xl p-2 md:p-4 flex items-center justify-center w-full h-full">
                <img 
                  src={parentsImg} 
                  alt="Devi and Tila Pokhrel" 
                  className="rounded-xl object-contain w-full h-48 md:h-60 bg-white"
                  style={{maxWidth: '260px'}}
                />
              </div>
            </div>
            {/* Text side */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div className={`text-left md:text-left space-y-3 md:space-y-4 text-base md:text-lg text-gray-800 font-normal ${expanded ? 'max-h-[340px] md:max-h-[420px] overflow-y-auto pr-2' : 'max-h-[120px] md:max-h-[140px] overflow-hidden'}`} style={{transition: 'max-height 0.5s'}}>
                {visibleParagraphs.map((para, idx) =>
                  para.startsWith('🌱') || para.startsWith('🍇') || para.startsWith('⚙️') ? (
                    <h3 key={idx} className="text-lg md:text-xl font-bold text-green-700 mt-2 mb-1">{para}</h3>
                  ) : (
                    <p key={idx}>{para}</p>
                  )
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-6 items-center md:items-end justify-center md:justify-start">
                {/* Read More Button */}
                <button
                  className="px-7 py-2 md:px-8 md:py-3 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-semibold rounded shadow-lg transition-all duration-200 animate-fade-in border-2 border-white"
                  style={{animationDelay: '0.5s'}}
                  onClick={() => setExpanded(e => !e)}
                >
                  {expanded ? 'Show Less' : 'Read More'}
                </button>
                {/* CTA Button */}
                <button className="px-7 py-2 md:px-8 md:py-3 bg-green-700 hover:bg-green-800 text-white text-base md:text-lg font-semibold rounded shadow-lg transition-all duration-200 animate-fade-in border-2 border-white" style={{animationDelay: '0.55s'}}>
                  दर्ता गर्नुहोस् !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 