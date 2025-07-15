import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Location & Contact */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <MapPin className="w-5 h-5" /> Nepal, Tehrathum, Solma
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-5 h-5" /> <a href="mailto:deviki@gmail.com" className="hover:underline">deviki@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-5 h-5" /> <a href="tel:9847226996" className="hover:underline">9847226996</a>
          </div>
        </div>
        {/* Copyright & Social */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Devi Kiwi Farm. All rights reserved.</div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;