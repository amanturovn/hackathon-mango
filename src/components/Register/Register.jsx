import { Typography, Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";
import "../Register/Register.css";

const Register = () => {
  const { handleRegister, loading, error, setError } = useContext(authContext);
  // console.log(loading);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);

    handleRegister(formData, navigate);
    console.log(formData);
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    // <div className="container">
      <div className="regiseter-block">
        <div className="register-teg">
          <h5 className="rgister-tag">Register</h5>
          {error ? (
            <div>
              {error.map((item, index) => (
                <Alert severity="error" key={item + index}>
                  {item}
                </Alert>
              ))}
            </div>
          ) : null}
          <div className="register-block">
            <input
              className="register-inp"
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outlined"
              placeholder="Email"
            />
            <input
              className="register-inp"
              value={name}
              onChange={e => setName(e.target.value)}
              variant="outlined"
              placeholder="Name"
            />
            <input
              className="register-inp"
              value={password}
              onChange={e => setPassword(e.target.value)}
              variant="outlined"
              placeholder="Password"
            />
            <input
              className="register-inp"
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
              variant="outlined"
              placeholder="Password confirmation"
            />
            <button
              className="register-btn"
              onClick={handleSave}
              variant="outlined">
              Register
            </button>
            <span>если уже есть аккаунт войдите</span>
            <button
              className="register-btn"
              onClick={() => navigate("/login")}
              variant="outlined">
              login
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Register;
