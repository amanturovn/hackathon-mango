import React, { useContext } from "react";

import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IconButton, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cardContext";

const Header = () => {
  const { handleLogout, currentUser } = useContext(authContext);
  const { getCart, count } = React.useContext(cartContext);

  const navigate = useNavigate();
  return (
    // <div className="container">
    <div className="navber-background">
      {/* <div className="navbar-block"> */}
      <div className="navbar-logo-block">
        <img
          onClick={() => navigate("/")}
          className="logo-mango-navbar"
          src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
          alt=""
        />
      </div>
      <div className="navbar-block-icons">
        <div className="navbar-icon-content-block">
          <IconButton>
            <Badge badgeContent={count} color="error">
              <ShoppingCartOutlinedIcon
                onClick={() => navigate("/card")}
                className="navbar-icon"
              />
            </Badge>
          </IconButton>
          <p className="navbar-icon-p">корзина</p>
        </div>
        <div className="navbar-icon-content-block">
          {currentUser ? (
            <div>
              <IconButton onClick={() => handleLogout(navigate)}>
                <PermIdentityIcon className="navbar-icon" />
              </IconButton>
              <p className="navbar-icon-p">logout</p>
            </div>
          ) : (
            <div>
              <IconButton onClick={() => navigate("/register")}>
                <PermIdentityIcon className="navbar-icon" />
              </IconButton>
              <p className="navbar-icon-p">login</p>
            </div>
          )}
        </div>
        {/* <div className="navbar-icon-content-block">
          <IconButton>
            <FavoriteBorderIcon className="navbar-icon" />
          </IconButton>
          <p className="navbar-icon-p">избранные</p>
        </div> */}
      </div>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Header;
