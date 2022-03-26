import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }
    setLoading(false)
  }, []);

  const login = async (email, password) => {
    console.log("login auth", { email, password });

    const response = () => {
      Axios.post('/sessions', {email, password})
    };

    console.log(response.data)

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);

    // api.defaults.headers.Authorization = `Bearer ${token}`;
    
    if (password === "senhaboa") {
        setUser(loggedUser)
        navigate("/admin")
    }
    setUser({ id: "123", email });
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem('user')
    setUser(null)
    navigate("/")
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
