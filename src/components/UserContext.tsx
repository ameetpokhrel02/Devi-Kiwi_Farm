import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  lastLogin: string;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');
  return ctx;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = !!user;

  // Persist user changes to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Get all users from localStorage
  const getUsers = (): User[] => {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  };

  // Save users to localStorage
  const saveUsers = (users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Generate unique ID
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Login function
  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      const users = getUsers();
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (!user) {
        return { success: false, message: 'User not found. Please sign up first.' };
      }

      // In a real app, you would hash the password and compare
      // For demo purposes, we'll accept any password for existing users
      const updatedUser = {
        ...user,
        lastLogin: new Date().toISOString()
      };

      setUser(updatedUser);
      
      // Update user in users array
      const updatedUsers = users.map(u => 
        u.id === user.id ? updatedUser : u
      );
      saveUsers(updatedUsers);

      return { success: true, message: 'Login successful!' };
    } catch (error) {
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  // Signup function
  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      const users = getUsers();
      
      // Check if user already exists
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (existingUser) {
        return { success: false, message: 'User with this email already exists.' };
      }

      // Create new user
      const newUser: User = {
        id: generateId(),
        name,
        email,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      // Add to users array
      const updatedUsers = [...users, newUser];
      saveUsers(updatedUsers);

      // Set as current user
      setUser(newUser);

      return { success: true, message: 'Account created successfully!' };
    } catch (error) {
      return { success: false, message: 'Signup failed. Please try again.' };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Update user function
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      
      // Update in users array
      const users = getUsers();
      const updatedUsers = users.map(u => 
        u.id === user.id ? updatedUser : u
      );
      saveUsers(updatedUsers);
    }
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      signup, 
      logout, 
      updateUser 
    }}>
      {children}
    </UserContext.Provider>
  );
}; 