import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "../Login/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }
  // console.log(error);
  useEffect(() => {
    setError(false);
  }, []);

  return (

    // <div className="container">
      <div className="login-block-style">
        <div display={"flex"} flexDirection={"column"} marginTop={"50px"}>
          <Typography variant="h3" className="type-login">
            login
          </Typography>
          {error ? <Alert severity="error">{error}</Alert> : null}
          <div className="login-block">
            <input
              className="form-card-inp-btn"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="form-card-inp-btn"
              value={password}
              onChange={e => setPassword(e.target.value)}
              variant="outlined"
              placeholder="Password"
            />
            <button class="custom-btn" onClick={handleSave}>
              Login
            </button>
          </div>
        </div>
      </div>
    // </div>

  );
};

export default Login;
