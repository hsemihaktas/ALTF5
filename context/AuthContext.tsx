"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);

  return (
    <AuthContext.Provider value={{ isAuthOpen, openAuth, closeAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
