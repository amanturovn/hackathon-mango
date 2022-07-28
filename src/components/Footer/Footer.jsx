import React from "react";
import { useNavigate } from "react-router-dom";
import "../Footer/Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="footer-intro-title-block"></div>
      <div className="footer-section-block">
        <div className="footer-section-content">
          <h4 onClick={() => navigate("/register")} className="footer-intro-h4">
            Pегистрация
          </h4>
          <h4 onClick={() => navigate("/contact")} className="footer-intro-h4">
            Контактная информация
          </h4>
          <h4
            onClick={() => navigate("/magazines")}
            className="footer-intro-h4"
          >
            Магазины
          </h4>
          <h4 onClick={() => navigate("/company")} className="footer-intro-h4">
            Компания
          </h4>
        </div>

        <div className="footer-section-icon">
          <FacebookIcon className="footer-icons" />
          <TwitterIcon className="footer-icons" />
          <InstagramIcon className="footer-icons" />
          <PinterestIcon className="footer-icons" />
          <YouTubeIcon className="footer-icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
