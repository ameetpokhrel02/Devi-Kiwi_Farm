import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Home, User, ShoppingBag, Image as ImageIcon, Mail, Menu, X, UserPlus, Github, Facebook, LogIn, ShoppingCart, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import SearchBar from "@/components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from './CartContext';
import { useUser } from './UserContext';
import { products as allProducts } from '../data/products';

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Products', href: '/products', icon: ShoppingBag },
  { label: 'About', href: '#about', icon: User },
  { label: 'Our Kiwis', href: '/our-kiwis', icon: Leaf },
  { label: 'Contact', href: '#contact', icon: Mail },
  { label: 'Blog', href: '/blog', icon: LogIn },
];

const scrollOrNavigate = (href: string, navigate: any) => (e: React.MouseEvent) => {
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

interface NavbarProps {
  onCartClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [showAuth, setShowAuth] = useState<'login' | 'signup' | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  // Smooth scroll and active state on click
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(href);
        setIsMenuOpen(false);
      }
    }
    // For /products, let Link handle navigation
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

  // Logo click handler
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 hover-scale cursor-pointer">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">Devi Kiwi Farm</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => {
                const Icon = link.icon;
                if (link.href === '/products') {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={scrollOrNavigate(link.href, navigate)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 font-medium relative group ${active === link.href ? 'bg-primary/10 text-primary shadow hover:bg-primary/20' : 'text-foreground hover:text-primary hover:bg-primary/5'} animate-fade-in`}
                      style={{ minWidth: 80 }}
                    >
                      <Icon className={`w-5 h-5 ${active === link.href ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-300`} />
                      <span className={`transition-colors duration-300 ${active === link.href ? 'text-primary' : ''}`}>{link.label}</span>
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${active === link.href ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                    </a>
                  );
                }
                if (link.href === '/cart') return null;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={scrollOrNavigate(link.href, navigate)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 font-medium relative group ${active === link.href ? 'bg-primary/10 text-primary shadow hover:bg-primary/20' : 'text-foreground hover:text-primary hover:bg-primary/5'} animate-fade-in`}
                    style={{ minWidth: 80 }}
                  >
                    <Icon className={`w-5 h-5 ${active === link.href ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-300`} />
                    <span className={`transition-colors duration-300 ${active === link.href ? 'text-primary' : ''}`}>{link.label}</span>
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${active === link.href ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                  </a>
                );
              })}
              {/* Cart Icon Button */}
              <button
                className="relative ml-2 p-2 rounded-full hover:bg-primary/10"
                onClick={onCartClick}
                aria-label="Open cart"
              >
                <ShoppingCart className="w-6 h-6 text-primary" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              {/* Auth Icon beside Contact */}
              {isAuthenticated ? (
                <div className="flex items-center gap-2 ml-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </div>
                  <button
                    className="p-2 rounded-full hover:bg-primary/10 text-primary"
                    onClick={() => navigate('/profile')}
                    aria-label="Profile"
                  >
                    <User className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 rounded-full hover:bg-red-500/10 text-red-500"
                    onClick={handleLogout}
                    aria-label="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  className="ml-2 p-0 bg-transparent border-none hover:text-primary focus:outline-none"
                  onClick={() => setShowAuth('signup')}
                  aria-label="Sign Up / Login"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <UserPlus className="w-6 h-6 text-primary" />
                </button>
              )}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 relative">
              <button
                className={`hover:bg-primary/10 p-2 rounded-full transition-colors ${showSearch ? 'bg-primary/10' : ''}`}
                onClick={() => setShowSearch(true)}
                aria-label="Search"
              >
                <Search className="w-6 h-6 text-primary" />
              </button>
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
              {/* Mobile Search */}
              <div className="mb-4">
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                  onClick={() => {
                    setShowSearch(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <Search className="w-5 h-5" />
                  <span>Search Products</span>
                </button>
              </div>
              
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={scrollOrNavigate(link.href, navigate)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium relative group ${active === link.href ? 'bg-primary/10 text-primary shadow hover:bg-primary/20' : 'text-foreground hover:text-primary hover:bg-primary/5'} animate-fade-in`}
                  >
                    <Icon className={`w-5 h-5 ${active === link.href ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-300`} />
                    <span className={`transition-colors duration-300 ${active === link.href ? 'text-primary' : ''}`}>{link.label}</span>
                  </a>
                );
              })}
              {/* Mobile Auth Section */}
              {isAuthenticated ? (
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{user?.name}</span>
                  </div>
                  <button
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary hover:bg-primary/10 transition-all duration-300 w-full"
                    onClick={() => navigate('/profile')}
                  >
                    <User className="w-5 h-5" />
                    <span>My Profile</span>
                  </button>
                  <button
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-all duration-300 w-full"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Button variant="hero" className="mt-4 w-full hover-lift" onClick={() => setShowAuth('signup')}>
                  Sign Up / Login
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Search Bar */}
      <SearchBar 
        isOpen={showSearch} 
        onClose={() => setShowSearch(false)} 
        onToggle={() => setShowSearch(!showSearch)} 
      />

      {/* Auth Modal */}
      {showAuth && <AuthModal />}
    </>
  );
};

export default Navbar; 