import React, { useState, useEffect } from 'react';
import { Leaf, Home, User, ShoppingBag, Image as ImageIcon, Mail, Menu, X, UserPlus, Github, Facebook, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Login from "@/components/Login";
import Signup from "@/components/Signup";

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Our Kiwis', href: '#kiwis', icon: Leaf },
  { label: 'Products', href: '#products', icon: ShoppingBag },
  { label: 'Gallery', href: '#gallery', icon: ImageIcon },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [showAuth, setShowAuth] = useState<'login' | 'signup' | null>(null);

  // Smooth scroll and active state on click
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(href);
      setIsMenuOpen(false);
    }
  };

  // Update active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = (section as HTMLElement).getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActive(link.href);
            found = true;
            break;
          }
        }
      }
      if (!found) setActive("#home");
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split modal logic
  const handleSwitch = (view: 'login' | 'signup') => setShowAuth(view);

  const AuthModal = () => (
    showAuth === 'login' ? (
      <Login asModal onClose={() => setShowAuth(null)} onSwitchToSignup={() => handleSwitch('signup')} />
    ) : showAuth === 'signup' ? (
      <Login asModal onClose={() => setShowAuth(null)} onSwitchToSignup={() => handleSwitch('login')} />
    ) : null
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover-scale">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">Devi Kiwi Farm</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 font-medium relative group ${active === link.href ? 'bg-primary/10 text-primary shadow hover:bg-primary/20' : 'text-foreground hover:text-primary hover:bg-primary/5'} animate-fade-in`}
                  style={{ minWidth: 80 }}
                >
                  <Icon className={`w-5 h-5 ${active === link.href ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-300`} />
                  <span className={`transition-colors duration-300 ${active === link.href ? 'text-primary' : ''}`}>{link.label}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${active === link.href ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="hero" className="hover-lift ml-2">
              Order Fresh Kiwis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 animate-slide-up' : 'max-h-0 opacity-0'}`}
          style={{ zIndex: 49 }}
        >
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium relative group ${active === link.href ? 'bg-primary/10 text-primary shadow hover:bg-primary/20' : 'text-foreground hover:text-primary hover:bg-primary/5'} animate-fade-in`}
                >
                  <Icon className={`w-5 h-5 ${active === link.href ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-300`} />
                  <span className={`transition-colors duration-300 ${active === link.href ? 'text-primary' : ''}`}>{link.label}</span>
                </a>
              );
            })}
            <Button variant="hero" className="mt-4 w-full hover-lift">
              Order Fresh Kiwis
            </Button>
          </nav>
        </div>
      </div>
      {/* Floating Sign Up Button */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-primary text-primary-foreground rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
        onClick={() => setShowAuth('signup')}
        aria-label="Sign Up"
      >
        <UserPlus className="w-7 h-7" />
      </button>
      {/* Auth Modal (split login/signup) */}
      {showAuth && <AuthModal />}
    </header>
  );
};

export default Navbar; 