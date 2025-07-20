import React, { useState } from 'react';
// import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OurServices from "@/components/OurServices";
import Blog from "@/components/Blog";
import { useNavigate } from "react-router-dom";
import buffaloFarmer from "@/assets/buffalo-farmer-cultivating-agriculture.jpg";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import adImage from '../assets/2ads pic.jpg';
import juiceAd from '../assets/Juice Ad - ناد.jpeg';
import kiwiAdsGif from '../assets/videos/kiwi ads 6.gif';

const Index = () => {
  const navigate = useNavigate();
  const [showAd1, setShowAd1] = useState(true);
  const [showAd2, setShowAd2] = useState(true);
  const anyAdOpen = showAd1 || showAd2;
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      {/* Ads Popup */}
      {anyAdOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="flex flex-col md:flex-row gap-6">
            {showAd1 && (
              <div className="relative bg-white rounded-xl shadow-2xl p-2 max-w-xs md:max-w-md">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
                  onClick={() => setShowAd1(false)}
                  aria-label="Close ad"
                >
                  &times;
                </button>
                <img src={adImage} alt="Ad" className="rounded-lg max-w-full max-h-[70vh]" />
              </div>
            )}
            {showAd2 && (
              <div className="relative bg-white rounded-xl shadow-2xl p-2 max-w-xs md:max-w-md">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
                  onClick={() => setShowAd2(false)}
                  aria-label="Close juice ad"
                >
                  &times;
                </button>
                <img src={kiwiAdsGif} alt="Juice Ad" className="rounded-lg max-w-full max-h-[70vh]" />
              </div>
            )}
          </div>
        </div>
      )}
      <main>
        <Hero />
        <About />
        <Products />
        <Sustainability />
        <OurServices />
        <Contact />
        {/* Blog Preview Section (Restored Simple Version) */}
        <section id="blog-preview" className="py-16 bg-gradient-to-br from-green-50 to-green-100">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">🌿 The Inspiring Story of Devi Kiwi Farm</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Discover how Devi and Tila Pokhrel built a legacy of organic farming, family teamwork, and rural entrepreneurship in the hills of eastern Nepal.
            </p>
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition font-semibold text-lg hover:scale-105"
              onClick={() => navigate('/blog')}
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
