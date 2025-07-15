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
    <div className={asModal ? 'fixed inset-0 z-50 flex justify-center bg-black/40 mt-24 md:items-start items-start' : ''}>
      <div className={`bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto ${asModal ? 'animate-scale-in' : 'my-12'}`}>
        {asModal && (
          <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-primary">&times;</button>
        )}
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300"
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