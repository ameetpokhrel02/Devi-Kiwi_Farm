
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import OtpVerification from "./auth/OtpVerification";
import ChangePassword from "./auth/ChangePassword";
import UpdatePassword from "./auth/UpdatePassword";
import PasswordSuccess from "./auth/PasswordSuccess";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import BlogPage from "./pages/Blog";
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import OurKiwis from './pages/OurKiwis';
import Profile from './pages/Profile';
import Search from './pages/Search';
import { CartProvider } from "./components/CartContext";
import { UserProvider } from "./components/UserContext";
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
        <UserProvider>
          <CartProvider>
            <BrowserRouter>
              <Navbar onCartClick={() => setCartOpen(true)} />
              <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<ProductsPage onAddToCart={() => setCartOpen(true)} />} />
                <Route path="/products/:id" element={<ProductDetails onAddToCart={() => setCartOpen(true)} />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/our-kiwis" element={<OurKiwis />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-failure" element={<PaymentFailure />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/otp-verification" element={<OtpVerification />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/update-password" element={<UpdatePassword />} />
                <Route path="/password-success" element={<PasswordSuccess />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </UserProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
