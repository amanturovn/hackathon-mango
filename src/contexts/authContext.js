import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "https://mysterious-journey-37714.herokuapp.com";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/registration/`, formData);
      console.log(res);
      navigate("/register-success");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  //!
  async function handleLogin(formData, email, navigate) {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/products-list");
      console.log(res);
    } catch (err) {
      console.log(err);
      setError([err.response.data.non_field_errors]);
    }
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios.post(
        `${API}/account/refresh/`,
        {
          refresh: tokens.refresh,
        },
        config
      );

      let updatedTokens = {
        access: res.data.access,
        refresh: tokens.refresh,
      };
      localStorage.setItem("tokens", JSON.stringify(updatedTokens));
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (err) {
      console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  function handleLogout(navigate) {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate("/login");
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        loading,
        error,
        currentUser,
        handleRegister,
        handleLogin,
        setError,
        checkAuth,
        handleLogout,
      }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
