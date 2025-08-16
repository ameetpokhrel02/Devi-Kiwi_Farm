import React, { useState } from 'react';

interface SignupProps {
  onClose?: () => void;
  asModal?: boolean;
}

const Signup: React.FC<SignupProps> = ({ onClose, asModal }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Simulate signup (replace with backend call later)
    setTimeout(() => {
      setLoading(false);
      if (!form.name || !form.email || !form.password) {
        setError('Please fill in all fields.');
      } else {
        // Success: handle signup state here
        if (onClose) onClose();
      }
    }, 1000);
  };

  return (
    <div className={asModal ? 'fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-lg' : ''}>
      <div className={`bg-gradient-to-br from-white/70 to-primary/10 rounded-2xl shadow-2xl ring-2 ring-primary/30 p-8 w-full max-w-md mx-auto ${asModal ? 'animate-scale-in' : 'my-12'}`}>
        {asModal && (
          <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-primary">&times;</button>
        )}
  <h2 className="text-3xl font-bold mb-4 text-center text-primary drop-shadow-lg">Create Account</h2>
  <p className="text-muted-foreground mb-6 text-center">Please enter your details to sign up.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full pl-4 pr-4 py-3 bg-white/80 border border-primary/30 rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full pl-4 pr-4 py-3 bg-white/80 border border-primary/30 rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full pl-4 pr-4 py-3 bg-white/80 border border-primary/30 rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 drop-shadow-lg"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup; 