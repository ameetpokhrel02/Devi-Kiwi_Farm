import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, ArrowDown, ArrowUp, Package, DollarSign, Star, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products as allProducts, Product } from '../data/products';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose, onToggle }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when search opens.
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
      setSearchTerm('');
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  // Enhanced search with debouncing
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const results = performSearch(searchTerm);
      setSearchResults(results);
      setSelectedIndex(-1);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Perform search with multiple criteria
  const performSearch = (term: string): Product[] => {
    const lowerTerm = term.toLowerCase();
    
    return allProducts.filter(product => {
      // Search in name
      if (product.name.toLowerCase().includes(lowerTerm)) return true;
      
      // Search in description
      if (product.description.toLowerCase().includes(lowerTerm)) return true;
      
      // Search in benefits
      if (product.benefits.some(benefit => 
        benefit.toLowerCase().includes(lowerTerm)
      )) return true;
      
      // Search by price range (e.g., "under 200", "cheap", "expensive")
      if (lowerTerm.includes('cheap') && product.price < 150) return true;
      if (lowerTerm.includes('expensive') && product.price > 200) return true;
      if (lowerTerm.includes('under') || lowerTerm.includes('below')) {
        const priceMatch = term.match(/(\d+)/);
        if (priceMatch && product.price < parseInt(priceMatch[1])) return true;
      }
      
      // Search by category keywords
      if (lowerTerm.includes('juice') && product.name.toLowerCase().includes('juice')) return true;
      if (lowerTerm.includes('jam') && product.name.toLowerCase().includes('jam')) return true;
      if (lowerTerm.includes('fresh') && product.name.toLowerCase().includes('fresh')) return true;
      if (lowerTerm.includes('dried') && product.name.toLowerCase().includes('dried')) return true;
      if (lowerTerm.includes('pickle') && product.name.toLowerCase().includes('pickle')) return true;
      if (lowerTerm.includes('cream') && product.name.toLowerCase().includes('cream')) return true;
      
      return false;
    }).sort((a, b) => {
      // Prioritize exact name matches
      const aNameMatch = a.name.toLowerCase().startsWith(lowerTerm);
      const bNameMatch = b.name.toLowerCase().startsWith(lowerTerm);
      
      if (aNameMatch && !bNameMatch) return -1;
      if (!aNameMatch && bNameMatch) return 1;
      
      // Then sort by price (cheaper first)
      return a.price - b.price;
    });
  };

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!searchResults.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          handleProductSelect(searchResults[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [searchResults, selectedIndex]);

  // Handle product selection
  const handleProductSelect = (product: Product) => {
    navigate(`/products/${product.id}`);
    onClose();
    setSearchTerm('');
    setSelectedIndex(-1);
  };

  // Handle view all results
  const handleViewAllResults = () => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    onClose();
    setSearchTerm('');
    setSelectedIndex(-1);
  };

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ 
          block: 'nearest', 
          behavior: 'smooth' 
        });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 animate-fade-in">
        {/* Search Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={searchRef}
            type="text"
            className="flex-1 text-lg outline-none placeholder-gray-400"
            placeholder="Search products, descriptions, or prices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-gray-500 mt-2">Searching...</p>
            </div>
          ) : searchTerm.trim() === '' ? (
            <div className="p-8 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Search Products</h3>
              <p className="text-gray-500 mb-4">Try searching for:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Fresh Kiwi', 'Kiwi Jam', 'Juice', 'Cheap', 'Under 200', 'Dried'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchTerm(suggestion)}
                    className="px-3 py-1 bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary rounded-full text-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try different keywords or browse our products</p>
            </div>
          ) : (
            <div ref={resultsRef} className="divide-y divide-gray-100">
              {/* Show first 5 results in quick search */}
              {searchResults.slice(0, 5).map((product, index) => (
                <div
                  key={product.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    index === selectedIndex 
                      ? 'bg-primary/10 border-l-4 border-primary' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{product.name}</h4>
                        {product.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Name match
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-primary font-semibold">
                          <DollarSign className="w-4 h-4" />
                          {product.price}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-gray-600">4.5</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Package className="w-4 h-4" />
                          <span>In stock</span>
                        </div>
                      </div>
                    </div>
                    {index === selectedIndex && (
                      <div className="text-primary">
                        <ArrowDown className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* View All Results Button */}
              {searchResults.length > 5 && (
                <div className="p-4 border-t border-gray-200">
                  <button
                    onClick={handleViewAllResults}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View All {searchResults.length} Results
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search Footer */}
        {searchResults.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found</span>
              <div className="flex items-center gap-4">
                <span>Use ↑↓ to navigate, Enter to select, Esc to close</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar; 