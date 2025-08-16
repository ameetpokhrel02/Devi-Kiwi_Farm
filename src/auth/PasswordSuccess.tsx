import React from 'react';

const PasswordSuccess: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-lg">
      <div className="bg-gradient-to-br from-white/70 to-primary/10 rounded-2xl shadow-2xl ring-2 ring-primary/30 p-8 w-full max-w-md mx-auto animate-scale-in text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary drop-shadow-lg">Password Changed!</h2>
        <p className="text-muted-foreground mb-6">Your password has been updated successfully.</p>
        <button className="w-full py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:scale-105 transition-transform duration-300 drop-shadow-lg">Continue</button>
      </div>
    </div>
  );
};

export default PasswordSuccess;
