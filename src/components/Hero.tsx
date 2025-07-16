import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/kiwi-farm-hero.jpg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const useCountUp = (end: number, duration = 800, suffix = '', isFloat = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = isFloat ? 0.1 : 1;
    const totalSteps = Math.ceil((end - start) / increment);
    const stepTime = duration / totalSteps;
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if ((isFloat && current >= end) || (!isFloat && current >= end)) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration, isFloat]);
  return `${count}${suffix}`;
};

const Hero = () => {
  const navigate = useNavigate();
  const rating = useCountUp(4.9, 800, '', true);
  const customers = useCountUp(10000, 800, 'K+');
  const years = useCountUp(38, 800);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm animate-scale-in">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Premium Organic Kiwis Since 20</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Fresh{" "}
            <span className="text-gradient">Organic</span>{" "}
            Kiwis{" "}
            <br />
            From Our{" "}
            <span className="text-gradient">Farm</span>{" "}
            to Your Table
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Experience the sweetest, most nutritious kiwis grown with sustainable farming practices in our pristine orchards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" className="group hover-lift" onClick={() => navigate('/products')}>
              Shop Fresh Kiwis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="organic" size="lg" className="hover-lift">
              Learn About Our Farm
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 stagger-animation">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{customers}</span>
              </div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{years}</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-fresh-lime/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
    </section>
  );
};

export default Hero;