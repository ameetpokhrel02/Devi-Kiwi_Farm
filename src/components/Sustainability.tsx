import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Sun, Recycle, TreePine, Users } from "lucide-react";
import farmingImage from "@/assets/farming-equipment.jpg";

const Sustainability = () => {
  const initiatives = [
    {
      icon: Sun,
      title: "Solar Powered",
      description: "100% renewable energy powers our entire operation",
      stat: "500kW",
      detail: "Solar capacity"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced irrigation systems reduce water usage by 40%",
      stat: "40%",
      detail: "Water saved"
    },
    {
      icon: Recycle,
      title: "Zero Waste",
      description: "All organic waste is composted and returned to soil",
      stat: "100%",
      detail: "Waste recycled"
    },
    {
      icon: TreePine,
      title: "Carbon Neutral",
      description: "Our farm is completely carbon neutral since 2018",
      stat: "2018",
      detail: "Carbon neutral since"
    },
    {
      icon: Leaf,
      title: "Biodiversity",
      description: "Native plant corridors support local wildlife",
      stat: "25+",
      detail: "Native species"
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting local community with fair wages and education",
      stat: "50+",
      detail: "Local jobs"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Sustainable</span> Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in farming practices that nurture the earth while producing the finest kiwis. Our commitment to sustainability isn't just good for the planet – it's essential for the future.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20 animate-scale-in">
          <img 
            src={farmingImage} 
            alt="Sustainable farming equipment" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">
                Leading the Future of Agriculture
              </h3>
              <p className="text-xl mb-6 max-w-2xl">
                Through innovative technology and time-tested organic practices
              </p>
              <Button variant="organic" size="lg" className="bg-white text-primary hover:bg-white/90">
                Take a Virtual Farm Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="border-0 bg-gradient-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-primary">{initiative.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-accent">{initiative.stat}</span>
                      <span className="text-sm text-muted-foreground">{initiative.detail}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="mt-20 text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Commitment to Tomorrow
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every decision we make considers the impact on our environment, our community, and future generations. 
            Because sustainable farming isn't just about today – it's about creating a better tomorrow.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">38</div>
              <div className="text-sm opacity-80">Years of Organic Farming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200</div>
              <div className="text-sm opacity-80">Acres of Certified Organic Land</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-sm opacity-80">Chemical Pesticides Used</div>
            </div>
          </div>

          <Button variant="organic" size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
            Download Our Sustainability Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;