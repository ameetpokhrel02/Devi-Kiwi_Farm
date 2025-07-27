import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
import { useUser } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  // Redirect to home if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">My Profile</h1>
            <p className="text-lg text-muted-foreground">
              Manage your account and view your information
            </p>
          </div>
          <UserProfile />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile; 