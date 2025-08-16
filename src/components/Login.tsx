import React, { useState } from 'react';
import { Mail, Lock, Facebook, Github, LogIn, UserPlus, User, CheckCircle, XCircle } from 'lucide-react';
import { useUser } from './UserContext';

interface LoginProps {
  onClose?: () => void;
  asModal?: boolean;
  onSwitchToSignup?: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, asModal, onSwitchToSignup }) => {
  const { login, signup, isAuthenticated, user } = useUser();
  const [form, setForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', terms: false });
  const [error, setError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [success, setSuccess] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  // Login handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const result = await login(form.email, form.password);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => {
          if (onClose) onClose();
        }, 1500);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Signup handlers
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignupForm({ ...signupForm, [name]: type === 'checkbox' ? checked : value });
    setSignupError(''); // Clear error when user types
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    setSignupSuccess('');
    setLoading(true);

    if (!signupForm.name || !signupForm.email || !signupForm.password || !signupForm.terms) {
      setSignupError('Please fill in all fields and agree to terms.');
      setLoading(false);
      return;
    }

    try {
      const result = await signup(signupForm.name, signupForm.email, signupForm.password);
      if (result.success) {
        setSignupSuccess(result.message);
        setTimeout(() => {
          if (onClose) onClose();
        }, 1500);
      } else {
        setSignupError(result.message);
      }
    } catch (err) {
      setSignupError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
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

  // If user is already authenticated, show user info
  if (isAuthenticated && user) {
    return (
      <div className={asModal ? 'fixed inset-0 z-50 flex justify-center bg-background/80 mt-24 md:items-start items-start' : ''}>
        <div className={`flex w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden relative ${asModal ? 'animate-scale-in' : 'my-12'}`} style={{background: 'hsl(var(--background))'}}>
          {renderCloseButton()}
          <div className="w-full p-8 flex flex-col justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-primary">Welcome back!</h2>
              <p className="text-muted-foreground mb-4">{user.name}</p>
              <p className="text-sm text-muted-foreground mb-6">{user.email}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
                <p>Last login: {new Date(user.lastLogin).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={asModal ? 'fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-lg' : ''}>
      <div className={`flex w-full max-w-md mx-auto rounded-2xl shadow-2xl ring-2 ring-primary/30 overflow-hidden relative ${asModal ? 'animate-scale-in' : 'my-12'} bg-gradient-to-br from-white/70 to-primary/10`}>
        {renderCloseButton()}
        {/* Login Side */}
  <div className="flex-1 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-primary/10 to-accent/10">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary drop-shadow-lg">Welcome back</h2>
          <p className="text-muted-foreground mb-6 text-center">Please enter your details to sign in.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative mb-4">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 bg-white/80 border border-primary/30 rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
              />
            </div>
            <div className="relative mb-4">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 bg-white/80 border border-primary/30 rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <XCircle className="w-4 h-4" />
                {error}
              </div>
            )}
            {success && (
              <div className="flex items-center gap-2 text-green-500 text-sm">
                <CheckCircle className="w-4 h-4" />
                {success}
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 drop-shadow-lg"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <button className="text-primary hover:underline">Forgot Password?</button>
            <button className="text-primary font-semibold hover:underline flex items-center gap-1" onClick={() => setShowSignupForm(true)}>
              <UserPlus className="w-4 h-4" /> Create Account
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
              {signupError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <XCircle className="w-4 h-4" />
                  {signupError}
                </div>
              )}
              {signupSuccess && (
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  {signupSuccess}
                </div>
              )}
              <button
                type="submit"
                className="w-full py-2 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
              {/* Social login row below form */}
              <div className="flex gap-4 justify-center mt-6">
                <button className="rounded-full bg-white/30 border border-primary p-3 hover:bg-primary/10 transition-colors shadow-md" type="button">
                  <Mail className="w-6 h-6 text-primary" />
                </button>
                <button className="rounded-full bg-white/30 border border-blue-500 p-3 hover:bg-blue-500/10 transition-colors shadow-md" type="button">
                  <Facebook className="w-6 h-6 text-blue-500" />
                </button>
                <button className="rounded-full bg-white/30 border border-slate-400 p-3 hover:bg-slate-400/10 transition-colors shadow-md" type="button">
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

//export default Login; 