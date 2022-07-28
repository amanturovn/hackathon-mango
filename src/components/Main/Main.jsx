import React from "react";
import "../Main/main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main__content">
      <div className="main-content-block">
        <div className="main__content_first">
          <div className="main__content_1">
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_2">
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_3">
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
        </div>
        {/* nvkfn */}
        <div className="main__content_second">
          <div className="main__content_4">
            {/* <h1>посмотреть продукты</h1> */}
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_5">
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_6">
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
