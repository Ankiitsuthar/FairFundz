import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("token")));
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function login(token) {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  }

  function logout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  }

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

// A simple RequireAuth component to wrap protected routes
export function RequireAuth({ children }) {
  const auth = useAuth();
  const { isAuthenticated } = auth || {};
  const location = useLocation();

  if (isAuthenticated) return children;

  // Redirect to login and preserve where the user was going
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AuthContext;
