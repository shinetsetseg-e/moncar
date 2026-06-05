"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextValue {
  isAuthenticated: boolean;
  isReady: boolean;
  login: () => void;
  logout: () => void;
}

const AUTH_STORAGE_KEY = "moncar-authenticated";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(storedValue === "true");
    setIsReady(true);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      isReady,
      login: () => {
        setIsAuthenticated(true);
        window.localStorage.setItem(AUTH_STORAGE_KEY, "true");
      },
      logout: () => {
        setIsAuthenticated(false);
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
      },
    }),
    [isAuthenticated, isReady],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
