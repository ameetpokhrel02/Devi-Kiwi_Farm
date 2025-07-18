import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import BlogPage from "./pages/Blog";
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import OurKiwis from './pages/OurKiwis';
import { CartProvider } from "./components/CartContext";
import { useState } from "react";
import CartDrawer from "./components/CartDrawer";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CartProvider>
          <BrowserRouter>
            <Navbar onCartClick={() => setCartOpen(true)} />
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/blog" element={<BlogPage />} />
              {/* Remove CartPage route */}
              <Route path="/our-kiwis" element={<OurKiwis />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failure" element={<PaymentFailure />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
