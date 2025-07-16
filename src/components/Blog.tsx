import React from 'react';
import parentsImg from '../assets/dadmom.jpg';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">🌿 The Inspiring Story of Devi Kiwi Farm</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organic Growth Rooted in Hard Work<br/>
            <span className="text-lg text-primary font-semibold">By Amit Pokhrel</span>
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center hover:shadow-2xl transition-shadow duration-500 animate-slide-up group">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <img 
              src={parentsImg} 
              alt="Devi and Tila Pokhrel" 
              className="rounded-2xl shadow-lg w-72 h-72 object-cover group-hover:scale-105 transition-transform duration-500 border-4 border-green-200" 
            />
          </div>
          <article className="flex-1 text-lg text-gray-800 space-y-6">
            <p>Located in the beautiful hills of eastern Nepal, Devi Kiwi Farm is a shining example of what dedication, family support, and sustainable farming can achieve. Established in 2072 B.S., the farm is led by Mr. Devi Pokhrel, a passionate and experienced farmer, along with his supportive wife, Mrs. Tila Pokhrel. Their farm has become a model for organic fruit cultivation and rural entrepreneurship in the Tehrathum District.</p>
            <h3 className="text-2xl font-bold text-green-700 mt-6 mb-2">🌱 Meet the Founders: Mr. Devi Pokhrel & Mrs. Tila Pokhrel</h3>
            <p>With over 10 years of experience in kiwi farming, Mr. Devi Pokhrel is not just a farmer but also a leader in the agricultural community. As the Chairman of the Tehrathum District Kiwi Organization, he has trained over 100 farmers each year, helping them begin their own kiwi farming journey.</p>
            <p>His wife, Tila Pokhrel, has been by his side since day one — working both in the kiwi and tea farms. Her contributions are not limited to agriculture; she also served as the First Deputy Mayor of Laligurans Municipality (2074–2079 B.S.) from the Nepali Congress Party, leading with dedication and vision.</p>
            <h3 className="text-2xl font-bold text-green-700 mt-6 mb-2">🍇 Organic Kiwi Farming</h3>
            <p>Devi Kiwi Farm spreads across 5,214 square meters (१० रोपनी ४ आना) of rich, fertile land located in Solma, Purundin – Ward No. 9, Laligurans Municipality, Tehrathum District.</p>
            <p>With nearly 250 kiwi plants, the farm produces an impressive 5,000 to 7,000 kilograms of organic kiwi fruit annually, earning a profit of nearly NPR 7–8 lakh per year. All their produce is grown using organic fertilizers and natural pesticides made from their own cows, goats, and hens — ensuring high quality and sustainability.</p>
            <h3 className="text-2xl font-bold text-green-700 mt-6 mb-2">🌱 Tea Farming & Expansion into Kiwi Products</h3>
            <p>In addition to kiwis, the Pokhrel family also engages in organic tea farming, producing 500 to 700 kilograms of tea leaves annually. Both Devi and Tila are equally involved in the tea farming process, working together with dedication and harmony.</p>
            <p>Their farm has also started processing kiwi into juice and pickles, and they are now planning to introduce kiwi jam and wine production within a year — expanding their reach into value-added organic products.</p>
            <h3 className="text-2xl font-bold text-green-700 mt-6 mb-2">⚙️ A Multifaceted Life</h3>
            <p>Despite his busy schedule on the farm, Mr. Devi Pokhrel also runs an electrical shop in Lasune Bazar, some distance from his home. He balances his business and farming life with impressive commitment and energy. His wife Tila continues to inspire local women with her involvement in both governance and agriculture.</p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl shadow-inner my-6">
              <h4 className="font-bold text-green-800 mb-2">📌 Quick Facts – Devi Kiwi Farm</h4>
              <ul className="list-disc list-inside text-base text-green-900 space-y-1">
                <li><b>Location:</b> Solma, Purundin – Ward No. 9, Laligurans Municipality, Tehrathum, Eastern Nepal</li>
                <li><b>Established:</b> 2072 B.S.</li>
                <li><b>Founder:</b> Mr. Devi Pokhrel</li>
                <li><b>Co-Founder:</b> Mrs. Tila Pokhrel</li>
                <li><b>Farm Area:</b> ५२१४ वर्ग मिटर (१० रोपनी ४ आना)</li>
                <li><b>Kiwi Plants:</b> 250+</li>
                <li><b>Annual Kiwi Production:</b> 5,000–7,000 kg</li>
                <li><b>Tea Leaf Production:</b> 500–700 kg per year</li>
                <li><b>Annual Profit:</b> NPR 7–8 lakh</li>
                <li><b>Products:</b> Organic Kiwi, Juice, Pickle (Jam & Wine in development)</li>
                <li><b>Training:</b> 100+ farmers trained yearly in kiwi farming</li>
                <li><b>Tila’s Role:</b> Deputy Mayor (2074–2079 B.S.), Active in farming and leadership</li>
              </ul>
            </div>
            <h3 className="text-2xl font-bold text-green-700 mt-6 mb-2">🌟 Final Thoughts</h3>
            <p>Devi and Tila Pokhrel have built more than just a farm — they’ve built a legacy of love, labor, and leadership. Their story inspires others to embrace organic farming, family teamwork, and community development.</p>
            <p className="font-semibold text-green-800">As Devi Kiwi Farm continues to grow, their plans for kiwi-based products, sustainable agriculture, and empowering others shine brightly as a model for rural Nepal.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog; 