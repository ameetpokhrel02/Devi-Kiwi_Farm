import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ShoppingCart, Leaf, Award, Zap } from "lucide-react";
import kiwiImage from "@/assets/kiwi-fruits.jpg";
import kiwiOilImage from "@/assets/kiwi-iol.png";
import kiwiCreamImage from "@/assets/kiwi-cream.png";
import KiwiImages1 from "@/assets/kiwi 22.jpeg";
import KiwiImages2 from "@/assets/kiwi 12.jpg";
import KiwiImagesPickle from "@/assets/kiwiw pickle.jpg"
import KiwiImagesJuice from "@/assets/kiwi juice.png"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Description } from "@radix-ui/react-toast";
import { useCart } from "./CartContext";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "Premium Gold Kiwis",
      price: 8.99,
      unit: "per lb",
      images: [KiwiImagesJuice],
      rating: 4.9,
      features: ["Extra Sweet", "Large Size", "High Vitamin C"],
      description: "Our signature golden kiwis with exceptional sweetness and smooth skin."
    },
    {
      id: "2",
      name: "Green Kiwi",
      price: 4.45,
      unit: "per kg",
      images: [KiwiImages2],
      rating: 4.5,
      features: ["High Vitamin C", "Medium Size", "Extra Sweet"],
      description: "Our signature Green Kiwi with expecetional sweetnewss and smooth skin."
    },
    {
      id: "3",
      name: "Organic Green Kiwis",
      price: 6.99,
      unit: "per lb",
      images: [kiwiOilImage],
      rating: 4.8,
      features: ["Classic Taste", "Rich Fiber", "Antioxidant Rich"],
      description: "Traditional green kiwis with the perfect balance of sweet and tart."
    },
    {
      id: "4",
      name: "Mini Kiwi Mix",
      price: 12.99,
      unit: "per 2lbs",
      images: [KiwiImagesPickle],
      rating: 4.9,
      features: ["Bite-Sized", "No Peeling", "Super Sweet"],
      description: "Adorable mini kiwis that you can eat whole - skin and all!"
    },
    {
      id: "5",
      name: "Kiwi Oil",
      price: 15.99,
      unit: "per 15ml bottle",
      images: [kiwiOilImage],
      rating: 5.0,
      features: ["100% Natural Oil", "Cold Pressed", "Rich in Antioxidants"],
      description: "Premium kiwi oil, perfect for skincare and wellness. Extracted from fresh kiwi seeds for maximum purity."
    },
    {
      id: "6",
      name: "Kiwi Cream",
      price: 15.75,
      unit: "per 20ml bottle",
      images: [kiwiCreamImage],
      rating: 5.0,
      features: ["100% natural Cream", "Rich in Vitamin D"],
      description: "Premium kiwi cream, perfect for skincare and wellness."
    }
  ];

  const [page, setPage] = useState(1);
  const productsPerPage = page === 1 ? 4 : 1;
  const pageCount = products.length > 4 ? 1 + (products.length - 4) : 1;
  let paginatedProducts;
  if (page === 1) {
    paginatedProducts = products.slice(0, 4);
  } else {
    paginatedProducts = [products[page + 2]];
    // page 2 shows products[4], page 3 shows products[5], etc.
    // products[page + 2] because page 2 => index 4
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount) setPage(newPage);
  };

  const benefits = [
    {
      icon: Zap,
      title: "High in Vitamin C",
      description: "More vitamin C than oranges"
    },
    {
      icon: Leaf,
      title: "Rich in Fiber",
      description: "Supports digestive health"
    },
    {
      icon: Award,
      title: "Antioxidant Power",
      description: "Natural disease protection"
    }
  ];

  const { addToCart } = useCart();

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Premium Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our selection of fresh, organic kiwis, each variety carefully cultivated to deliver exceptional taste and nutrition.
          </p>
        </div>

        {/* Products Pagination */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 justify-center md:justify-start">
              {paginatedProducts.map((product, index) => (
                <Card key={index} className="w-full sm:max-w-xs sm:min-w-[320px] border-0 bg-gradient-card hover-lift overflow-hidden mb-8 flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-48 object-contain hover-scale bg-white"
                      style={{ maxHeight: '200px', objectFit: 'contain' }}
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Best Seller
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium text-accent">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <span className="text-muted-foreground ml-1">{product.unit}</span>
                      </div>
                    </div>
                    <Button variant="hero" className="w-full group hover-lift" onClick={() => addToCart(product)}>
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Pagination className="mt-2">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={e => { e.preventDefault(); handlePageChange(page - 1); }}
                  aria-disabled={page === 1}
                />
              </PaginationItem>
              {Array.from({ length: pageCount }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={page === i + 1}
                    onClick={e => { e.preventDefault(); handlePageChange(i + 1); }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={e => { e.preventDefault(); handlePageChange(page + 1); }}
                  aria-disabled={page === pageCount}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Health Benefits Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">
              Why Choose Our Kiwis?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our organic kiwis aren't just delicious – they're packed with nutrients that support your health and wellbeing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="organic" size="lg" className="hover-lift">
              Learn More About Nutrition
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;