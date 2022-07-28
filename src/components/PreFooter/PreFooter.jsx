import React from "react";
import "../PreFooter/PreFooter.css";
import { useNavigate } from "react-router-dom";

const PreFooter = () => {
  const navigate = useNavigate();
  return (
    // <div className="container">
      <div className="footer-main-block">
        <div className="prefooter-logo">
          <h2>#MANGOGIRLS</h2>
        </div>
        <div className="prefooter-img">
          <img
            onClick={() => navigate("/about-us")}
            className="img-girls"
            src="https://staticpages.mngbcn.com/mangogirls/images/330/mango_1_1.jpg?imwidth=378&imdensity=2"
            alt=""
            width="360px"

          />
          <img
            onClick={() => navigate("/about-us")}
            className="img-girls"
            src="https://staticpages.mngbcn.com/mangogirls/images/329/20220407_141911-01.jpeg?imwidth=378&imdensity=2"
            alt=""
            width="360px"

          />

          <img
            onClick={() => navigate("/about-us")}
            className="img-girls"
            src="https://staticpages.mngbcn.com/mangogirls/images/328/1_fave.jpg?imwidth=378&imdensity=2"
            alt=""
            width="360px"
          />
          <img
            onClick={() => navigate("/about-us")}
            className="img-girls"
            src="https://staticpages.mngbcn.com/mangogirls/images/327/photo_25-4-2022_1_30_26_pm.jpg?imwidth=378&imdensity=2"
            alt=""
            width="360px"
          />
        </div>
      </div>
  );
};

export default PreFooter;
