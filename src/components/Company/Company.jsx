import React from "react";
import "../Company/Company.css";
// import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:
      "Isak Andic / Chairman Isak Andic is the founder of the Mango clothing multinational, created in 1984. He is now the Chairman and chairs the company’s Board of Directors",
    imgPath:
      "https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_9.jpg?rand=2222&imwidth=605&imdensity=2",
  },
  {
    label:
      "BToni Ruiz / Chief Executive Officer Since March 2020, Toni Ruiz has occupied the position of Mango Chief Executive Officer and  Member of the Board of Directors since 2015",
    imgPath:
      "https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_10.jpg?rand=2222&imwidth=605&imdensity=2",
  },
  {
    label:
      "Jonathan Andic / Director of Mango Man and Construction Management Jonathan Andic and a member of the MANGO Board of Directors since 2012",
    imgPath:
      "https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_11.jpg?rand=2222&imwidth=605&imdensity=2",
  },
  {
    label:
      "Daniel López / Director of Expansion and Franchises Daniel López occupies the posts of Director of Expansion and Franchises and is a Member of the Board of Directors",
    imgPath:
      "https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_12.jpg?rand=2222&imwidth=605&imdensity=2",
  },
];

const Company = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <div className="container">
      <div className="company-cont">
        <div className="company-child">
          <div className="company-text">
            <h2 className="company-h2">
              We inspire the <br />
              world by sharing
              <br /> our passion for
              <br /> Mediterranean
              <br /> style and culture
            </h2>
            <p className="company-p">
              The water that bathes our coasts, the
              <br />
              warmth of its light and the joy of our people. At MANGO, we want
              to share <br /> the best of the Mediterranean essence we have
              cultivated for over 35 years.
              <br /> The taste for a slow life and an appreciation for detail,
              which we
              <br />
              translate from our collections into timeless designs that are
              <br />
              committed to the environment. A natural and contemporary style
              <br /> that also unites us through the enjoyment of culture in all
              its
              <br /> forms.
            </p>
          </div>
        </div>
        <div className="our-collections-main">
          <h6 className="our-collections">OUR COLLECTIONS</h6>
          <p className="our-collections-p">
            Our Woman, Man and Kids collections reflect, by paying attention to
            fabrics and details, the essence of Mediterranean style with a
            contemporary twist.
          </p>
        </div>

        <div className="img-collections">
          <img
            className="company"
            src="https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_4.jpg?rand=2222&imwidth=605&imdensity=2"
            alt=""
            width="30%"
          />
          <img
            className="company"
            src="https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_5.jpg?rand=2222&imwidth=605&imdensity=2"
            alt=""
            width="30%"
          />
        </div>
        <div className="second-text">
          <div className="second-text-1">
            <h6 className="text-1">Unique and Feminine</h6>
            <p className="p-text">
              Our collections dress a unique and feminine woman. The pieces
              <br />
              showcase a timeless style while keeping in mind fashion aesthetics
              <br />
              and trends.
            </p>
          </div>
          <div className="second-text-2">
            <h6 className="text-2">Trends and comfort</h6>
            <p className="p-text">
              From traditional tailoring to the most informal pieces. Our MANGO
              <br />
              Man collections feature the latest trends with the maximum
              <br />
              comfort.
            </p>
          </div>
        </div>
        <div className="img-collections-2">
          <img
            className="company-1"
            src="https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_6.jpg?rand=2222&imwidth=605&imdensity=2"
            alt=""
            width="30%"
          />
          <img
            className="company-2"
            src="https://staticpages.mngbcn.com/edits/FW20/SITEEMPRESA2020/assets/images/normal/a_empresa-mango-2020_7.jpg?rand=2222&imwidth=605&imdensity=2"
            alt=""
            width="30%"
          />
        </div>
        <div className="second-text-3">
          <h6 className="text-3">BOARD OF DIRECTORS</h6>
          <p className="p-text-3">
            Our creation in 1984 was the start of a path that continues today. 4
            members of the Board of Directors, and visible faces of the company,
          </p>
          <p className="p-textt">
            explain their business career path so that we can learn more about
            our history.
          </p>
        </div>
        <div className="carousel">
          <Box className="box-carousel" sx={{ maxWidth: 900, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 100,
                pl: 2,
                bgcolor: "background.default",
              }}>
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              className="carousel-footer"
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents>
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      className="carousel-footer"
                      component="img"
                      sx={{
                        height: 700,
                        display: "block",
                        maxWidth: 1000,
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              className="carousel-footer"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  className="next"
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft className="left" />
                  ) : (
                    <KeyboardArrowRight className="rigth" />
                  )}
                </Button>
              }
              backButton={
                <Button
                  className="back"
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight className="rigth" />
                  ) : (
                    <KeyboardArrowLeft className="left" />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Company;
