import React, { useState } from 'react';
import { Mail, Lock, Facebook, Github, LogIn, UserPlus, User } from 'lucide-react';

interface LoginProps {
  onClose?: () => void;
  asModal?: boolean;
  onSwitchToSignup?: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, asModal, onSwitchToSignup }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', terms: false });
  const [error, setError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  // Login handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!form.email || !form.password) {
        setError('Please fill in all fields.');
      } else {
        if (onClose) onClose();
      }
    }, 1000);
  };

  // Signup handlers
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignupForm({ ...signupForm, [name]: type === 'checkbox' ? checked : value });
  };
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!signupForm.name || !signupForm.email || !signupForm.password || !signupForm.terms) {
        setSignupError('Please fill in all fields and agree to terms.');
      } else {
        if (onClose) onClose();
      }
    }, 1000);
  };

  // Always render the close button and make sure it works in all states
  const renderCloseButton = () => (
    asModal && (
      <button
        onClick={() => {
          setShowSignupForm(false);
          if (onClose) onClose();
        }}
        className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-primary z-10"
        aria-label="Close"
      >
        &times;
      </button>
    )
  );

  return (
    <div className={asModal ? 'fixed inset-0 z-50 flex justify-center bg-background/80 mt-24 md:items-start items-start' : ''}>
      <div className={`flex w-full max-w-2xl mx-auto rounded-2xl shadow-2xl overflow-hidden relative ${asModal ? 'animate-scale-in' : 'my-12'}`} style={{background: 'hsl(var(--background))'}}>
        {renderCloseButton()}
        {/* Login Side */}
        <div className="flex-1 p-8 flex flex-col justify-center bg-gradient-to-br from-primary/10 to-accent/10">
          <h2 className="text-2xl font-bold mb-6 text-left text-primary">Member Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="w-full py-2 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'LOGIN'}
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <button className="text-primary hover:underline">Forgot Password?</button>
            <button className="text-primary hover:underline flex items-center gap-1" onClick={() => setShowSignupForm(true)}>
              <UserPlus className="w-4 h-4" /> Create account
            </button>
          </div>
        </div>
        {/* Sign Up Side */}
        <div className="flex-1 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-accent/10 to-primary/10 relative">
          {showSignupForm ? (
            <form onSubmit={handleSignupSubmit} className="w-full max-w-xs mx-auto space-y-5">
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">Create Account</h2>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                  required
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                  required
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                  required
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="signup-terms" name="terms" checked={signupForm.terms} onChange={handleSignupChange} className="accent-primary" />
                <label htmlFor="signup-terms" className="text-xs text-primary">I agree to the <a href="#" className="underline text-primary">terms and conditions</a></label>
              </div>
              {signupError && <div className="text-red-500 text-sm text-center">{signupError}</div>}
              <button
                type="submit"
                className="w-full py-2 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
              {/* Social login row below form */}
              <div className="flex gap-4 justify-center mt-6">
                <button className="rounded-full bg-white/10 border border-primary p-3 hover:bg-primary/10 transition-colors" type="button">
                  <Mail className="w-6 h-6 text-primary" />
                </button>
                <button className="rounded-full bg-white/10 border border-blue-500 p-3 hover:bg-blue-500/10 transition-colors" type="button">
                  <Facebook className="w-6 h-6 text-blue-500" />
                </button>
                <button className="rounded-full bg-white/10 border border-slate-400 p-3 hover:bg-slate-400/10 transition-colors" type="button">
                  <Github className="w-6 h-6 text-slate-700" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm text-primary">Already have an account? </span>
                <button className="text-primary font-semibold hover:underline ml-1 flex items-center gap-1" type="button" onClick={() => setShowSignupForm(false)}>
                  <LogIn className="inline w-4 h-4 mr-1" /> Login
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-right text-primary">Sign Up</h2>
              <p className="text-primary mb-6 text-center">Using your social media account</p>
              <div className="flex gap-4 mb-6">
                <button className="rounded-full bg-white/10 border border-primary p-3 hover:bg-primary/10 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </button>
                <button className="rounded-full bg-white/10 border border-blue-500 p-3 hover:bg-blue-500/10 transition-colors">
                  <Facebook className="w-6 h-6 text-blue-500" />
                </button>
                <button className="rounded-full bg-white/10 border border-slate-400 p-3 hover:bg-slate-400/10 transition-colors">
                  <Github className="w-6 h-6 text-slate-700" />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" id="terms" className="accent-primary" />
                <label htmlFor="terms" className="text-xs text-primary">By signing up I agree with <a href="#" className="underline text-primary">terms and conditions</a></label>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm text-primary">Already have an account? </span>
                <button className="text-primary font-semibold hover:underline ml-1 flex items-center gap-1" type="button" onClick={() => setShowSignupForm(false)}>
                  <LogIn className="inline w-4 h-4 mr-1" /> Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login; 