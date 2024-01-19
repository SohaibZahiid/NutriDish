import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const API = import.meta.env.VITE_API;

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${API}/login`, inputs);
    setCurrentUser(res.data.data);
    return res
  };

  const logout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
