import React from "react";
import "../Magazines/Magazines.css";

const Magazines = () => {
  return (
    <div className="container">
      <div className="child-cont">
        <div>
          <h2 className="our-magazines">Наши магазины</h2>
        </div>
        <div className="two-magazines">
          <div className="first-magazines">
            <h4 className="first-address">Бишкек, улица Киевская 150/1</h4>
            <p className="p-magazines">BISHKEK 720000</p>
            <h5>312311931</h5>
            <p className="p-magazines">Коллекции: Женская</p>
            <h5 className="h5-magazines">График работы: </h5>
            <p className="week">Понедельник 10:00-20:00</p>
            <p className="week">Вторник 10:00-20:00</p>
            <p className="week">Среда 10:00-20:00</p>
            <p className="week">Четверг 10:00-20:00</p>
            <p className="week">Пятница 10:00-20:00</p>
            <p className="week">Суббота 10:00-20:00</p>
            <p className="week">Воскресенье 10:00-20:00</p>
          </div>
          <div className="second-magazines">
            <h4 className="second-address">Бишкек, улица Чуй 127</h4>
            <p className="p-magazines">BISHKEK 720011</p>
            <h5>680177</h5>
            <p className="p-magazines">Коллекции: Женская</p>
            <h5 className="h5-magazines">График работы: </h5>
            <p className="week">Понедельник 10:00-20:00</p>
            <p className="week">Вторник 10:00-20:00</p>
            <p className="week">Среда 10:00-20:00</p>
            <p className="week">Четверг 10:00-20:00</p>
            <p className="week">Пятница 10:00-20:00</p>
            <p className="week">Суббота 10:00-20:00</p>
            <p className="week">Воскресенье 10:00-20:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
