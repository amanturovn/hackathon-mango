import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    // <div className="container">
      <div>
        <Typography>
          Вы успешно зарегистрировались! Можете <Link to="/login">Войти</Link>
        </Typography>
      </div>
    // </div>
  );
};

export default RegisterSuccess;
