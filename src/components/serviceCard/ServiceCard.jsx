import React from "react";
import * as s from "./StyleServiceCard.module.scss";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={s.service__card}>
      <div className={s.service__card__icon}>
        <img src={icon} alt="" className={s.icon} />
      </div>
      <h3 className={s.service__card__title}>{title}</h3>
      <p className={s.service__card__description}>{description}</p>
      <span className={s.hover__effect}></span>
    </div>
  );
};

export default ServiceCard;
