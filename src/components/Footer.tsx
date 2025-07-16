import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import AppDownloadCard from "./AppDownloadCard";
import esewaLogo from '../assets/esewa.png';
import khaltiLogo from '../assets/khalti.png';
import imepayLogo from '../assets/IME-Pay-Logo.png';
import sanimaLogo from '../assets/sanimabank.jpeg';
import globalimeLogo from '../assets/globalime.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "/products" },
  { name: "Sustainability", href: "#sustainability" },
  { name: "Farm Tours", href: "#tours" },
  { name: "Wholesale", href: "#wholesale" },
  { name: "Contact", href: "#contact" }
];

const customerService = [
  { name: "Shipping Info", href: "#shipping" },
  { name: "Returns", href: "#returns" },
  { name: "FAQ", href: "#faq" },
  { name: "Track Order", href: "#track" },
  { name: "Customer Support", href: "#support" },
  { name: "Privacy Policy", href: "#privacy" }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "https://youtu.be/fGW3_g8HIkk?si=reUk2_YeaiCLMZX1", label: "YouTube" }
];

const Footer = () => {
  const location = typeof window !== 'undefined' ? window.location : { pathname: '/' };
  const navigate = useNavigate();

  const scrollOrNavigate = (href: string) => (e: React.MouseEvent) => {
    if (href === '/products') {
      navigate('/products');
      return;
    }
    if (href === '/' || href === '#home') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector('#home');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const section = document.querySelector(href);
          if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        const section = document.querySelector(href);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-earth-brown text-warm-cream">
      {/* Newsletter Section */}
      <div className="border-b border-warm-cream/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">Stay Fresh with KiwiVale</h3>
            <p className="text-lg mb-8 opacity-80">
              Get the latest updates on our harvest, special offers, and sustainable farming tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-warm-cream text-earth-brown border-0 flex-1"
              />
              <Button variant="hero" className="hover-lift">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">KiwiVale Farm</span>
            </div>
            <p className="opacity-80 mb-6 leading-relaxed">
              Growing premium organic kiwis with passion and sustainability since 1985. 
              From our family farm to your table, we deliver nature's finest.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="opacity-80">Nepal, Tehrathum, Solma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="opacity-80">9847226996</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="opacity-80">deviki@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={scrollOrNavigate(link.href)}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-bold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Farm Hours & Social */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-xl font-bold mb-6">Visit Our Farm</h4>
            <div className="space-y-4 mb-8">
              <div>
                <h5 className="font-semibold text-accent mb-2">Farm Store Hours</h5>
                <div className="space-y-1 opacity-80 text-sm">
                  <div>Monday - Friday: 8am - 6pm</div>
                  <div>Saturday: 8am - 7pm</div>
                  <div>Sunday: 9am - 5pm</div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-accent mb-2">Farm Tours</h5>
                <div className="opacity-80 text-sm">
                  Saturdays at 10am & 2pm
                  <br />
                  (Reservation required)
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Follow Our Journey</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-warm-cream/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* App Download Card */}
          <div className="animate-slide-up flex items-center justify-center" style={{ animationDelay: '0.4s' }}>
            <AppDownloadCard />
          </div>
        </div>
        {/* Payment Methods */}
        <div className="w-full flex flex-col items-center mt-8 mb-4">
          <h4 className="text-lg font-semibold text-earth-brown mb-3">Payment Methods</h4>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <img src={esewaLogo} alt="eSewa" className="h-8 bg-white rounded shadow p-1" />
            <img src={khaltiLogo} alt="Khalti" className="h-8 bg-white rounded shadow p-1" />
            <img src={imepayLogo} alt="IME Pay" className="h-8 bg-white rounded shadow p-1" />
            <img src={sanimaLogo} alt="Sanima Bank" className="h-8 bg-white rounded shadow p-1" />
            <img src={globalimeLogo} alt="Global IME Bank" className="h-8 bg-white rounded shadow p-1" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-cream/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="opacity-60 text-sm">
              © {new Date().getFullYear()} KiwiVale Farm. All rights reserved. | Certified Organic by CCOF
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                Terms of Service
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                Privacy Policy
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;