import { Button } from "@/components/ui/button";
import { Leaf, Heart, Shield, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import farmerImage from "@/assets/farmer-portrait.jpg";
import kiwiImage from "@/assets/kiwi-fruits.jpg";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Grown without harmful pesticides or chemicals, ensuring the purest taste and maximum nutrition."
    },
    {
      icon: Heart,
      title: "Family Grown",
      description: "Three generations of passionate farming, bringing you kiwis with love and dedication."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every kiwi is hand-picked and quality tested to meet our premium standards."
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Farm-to-door delivery within 24 hours to ensure maximum freshness and flavor."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">KiwiVale Farm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For nearly four decades, we've been cultivating the finest organic kiwis using sustainable farming practices that respect both nature and tradition.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Our Story of Sustainable Excellence
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 1985 by the Thompson family, KiwiVale Farm began as a small organic orchard with a simple mission: to grow the world's best kiwis while caring for the land that sustains us.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Today, our 200-acre certified organic farm produces over 500 tons of premium kiwis annually, all while maintaining the highest standards of environmental stewardship and sustainable agriculture.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Certified Organic since 1990</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Award-winning sustainable practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Supporting local community for 38+ years</span>
              </div>
            </div>

            <Button variant="farm" size="lg" className="hover-lift">
              Meet Our Team
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <div className="space-y-4">
              <img 
                src={farmerImage} 
                alt="Farmer in kiwi orchard" 
                className="w-full h-64 object-cover rounded-lg hover-lift"
              />
              <div className="bg-gradient-card p-6 rounded-lg hover-glow">
                <h4 className="font-bold text-primary mb-2">Premium Quality</h4>
                <p className="text-sm text-muted-foreground">Hand-picked at perfect ripeness</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gradient-card p-6 rounded-lg hover-glow">
                <h4 className="font-bold text-primary mb-2">Eco-Friendly</h4>
                <p className="text-sm text-muted-foreground">Solar-powered operations</p>
              </div>
              <img 
                src={kiwiImage} 
                alt="Fresh kiwi fruits" 
                className="w-full h-64 object-cover rounded-lg hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-gradient-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;