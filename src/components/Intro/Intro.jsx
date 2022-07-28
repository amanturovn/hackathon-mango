import React from "react";
import PreFooter from "../PreFooter/PreFooter";
import Video from "../Media/pexels-taryn-elliott-5363146.mp4";
import img1 from "../Media/medsummer-logo.svg";
import "../Intro/Intro.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import MainFooter from "../MainFooter/MainFooter";

const Intro = () => {
  return (
    // <div className="container">
      <div className="intro-video-back">
        <div className="intro__video">
          <video autoPlay muted loop src={Video}></video>
          <div className="intro__block">
            {/* <div className="container"> */}
              <div className="intro__img-block">
                <img className="intro__img-back" src={img1} alt="" />
              </div>
            {/* </div> */}
          </div>
          <Main />
          <PreFooter />
          <MainFooter />
        </div>
      </div>
    // </div>
  );
};

export default Intro;
