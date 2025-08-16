import React, { useState } from 'react';

const UpdatePassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setTimeout(() => {
      setLoading(false);
      if (!newPassword) {
        setError('Please enter a new password.');
      } else {
        setSuccess('Password updated successfully!');
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-lg">
      <div className="bg-gradient-to-br from-white/70 to-primary/10 rounded-2xl shadow-2xl ring-2 ring-primary/30 p-8 w-full max-w-md mx-auto animate-scale-in">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary drop-shadow-lg">Update Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative mb-4">
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
              placeholder="New Password"
              className="w-full pl-4 pr-4 py-3 bg-white/80 border border-primary/30 rounded-full text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-500 text-sm text-center">{success}</div>}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 drop-shadow-lg"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
