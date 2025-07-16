import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OurServices from "@/components/OurServices";
import Blog from "@/components/Blog";
import { useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Sustainability />
        <OurServices />
        <Contact />
        {/* Blog Preview Section */}
        <section id="blog-preview" className="py-16 bg-gradient-to-br from-green-50 to-green-100">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">🌿 The Inspiring Story of Devi Kiwi Farm</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Discover how Devi and Tila Pokhrel built a legacy of organic farming, family teamwork, and rural entrepreneurship in the hills of eastern Nepal.
            </p>
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition font-semibold text-lg hover:scale-105"
              onClick={() => useNavigate()('/blog')}
            >
              Read Full Story
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
