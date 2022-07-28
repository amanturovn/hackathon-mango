import React from "react";
import "../Contact/Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="contact__text">
          <p> /ЗДРАВСТВУЙТЕ, МЫ ХОТИМ ПОМОЧЬ ВАМ./ </p>
          <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
          <span>Последняя редакция: 04/02/2022</span>
          <h2>СВЯЖИТЕСЬ С НАМИ, И МЫ ПОМОЖЕМ ВАМ.</h2>
          <h3>ЭЛЕКТРОННАЯ ПОЧТА</h3>
          <span>
            У Вас возникли какие-либо вопросы? Отправьте нам сообщение по
            электронной почте, <br /> и мы ответим Вам как можно скорее.
          </span>
          <h3>ТЕЛЕФОН</h3>
          <span>
            Вы можете связаться с нами по телефону (+34) 93 860 24 24
            (международный звонок). <br /> Мы работаем с понедельника по пятницу
            с 9:00 до 21:00 по местному испанскому времени.
          </span>
        </div>
        <div className="contact__information">
          <p>/ПРИМЕЧЕНИЕ/</p>
          <p>Возврат продлен до 60 дней.</p>
          <p>СВЯЖИТЕСЬ С НАМИ</p>
          <p>
            <CallIcon /> +34 93 860 24 24
          </p>
          <p>
            С понедельника по пятницу с 9:00 <br /> до 21:00 по местному
            испанскому <br />
            времени Международный звонок
          </p>
          <p>
            <EmailIcon /> ЗАПРОСИТЬ ПОМОЩЬ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
