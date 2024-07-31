'use client'
// src/context/authContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextProps {
  user: User | null;
  signin: (email: string, password: string, callback: () => void) => Promise<void>;
  signout: (callback: () => void) => void;
  signup: (email: string, password: string, callback: () => void) => Promise<void>;
}

interface User {
  email: string;
  name: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signin = async (email: string, password: string, callback: () => void) => {
    // Replace with actual API call for sign-in
    const fakeUser = { email, name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(fakeUser));
    setUser(fakeUser);
    callback();
  };

  const signout = (callback: () => void) => {
    localStorage.removeItem('user');
    setUser(null);
    callback();
  };

  const signup = async (email: string, password: string, callback: () => void) => {
    // Replace with actual API call for sign-up
    const fakeUser = { email, name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(fakeUser));
    setUser(fakeUser);
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
