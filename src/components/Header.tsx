import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

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
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" className="hover-lift">
              Order Fresh Kiwis
            </Button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 ml-4">
            <button
              className={`px-3 py-1 rounded font-semibold border ${i18n.language === 'en' ? 'bg-green-600 text-white' : 'bg-white text-green-700 border-green-600'}`}
              onClick={() => i18n.changeLanguage('en')}
            >
              {t('language.english', 'English')}
            </button>
            <button
              className={`px-3 py-1 rounded font-semibold border ${i18n.language === 'ne' ? 'bg-green-600 text-white' : 'bg-white text-green-700 border-green-600'}`}
              onClick={() => i18n.changeLanguage('ne')}
            >
              {t('language.nepali', 'नेपाली')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-slide-up">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" className="mt-4">
                Order Fresh Kiwis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;