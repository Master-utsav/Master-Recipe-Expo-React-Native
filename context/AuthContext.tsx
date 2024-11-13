import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the AuthContext
interface AuthContextType {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

// Create the context with a default value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Define the provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('/');

  return (
    <AuthContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </AuthContext.Provider>
  );
};
