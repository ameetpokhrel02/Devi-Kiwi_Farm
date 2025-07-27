import React from 'react';
import { User, Mail, Calendar, LogOut, Edit } from 'lucide-react';
import { useUser } from './UserContext';

const UserProfile: React.FC = () => {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-white/80">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Member Since</p>
            <p className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Last Login</p>
            <p className="font-medium">{new Date(user.lastLogin).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Account Stats */}
        <div className="border-t pt-4 mt-6">
          <h3 className="font-semibold mb-3">Account Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Orders</p>
            </div>
            <div className="text-center p-3 bg-accent/5 rounded-lg">
              <p className="text-2xl font-bold text-accent">0</p>
              <p className="text-sm text-muted-foreground">Favorites</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border-t pt-4 mt-6 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button 
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 