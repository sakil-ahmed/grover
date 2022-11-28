import React from "react";
import * as s from "./styleHero.module.scss";
import iconImg from "./../../images/image.png";
import heroImg from "../../images/heroImage.png";
import Button from "./../button/Button";
import playIcon from "./../../images/playIcon.png";
import { BsCartPlusFill } from "react-icons/bs";
import orange from "./../../images/orange.png";
import AbstractIcon from "./../../images/abstract.svg";
import clockIcon from "../../images/alarm-clock-icon.svg";

const HeroSection = () => {
  return (
    <section className={s.hero__section}>
      <div className="container">
        <div className={s.row}>
          <div className={s.hero__left}>
            <div className={s.sm__title}>
              <span className={s.sm__title__text}>More than Faster</span>
              <img className={s.sm__title__icon} src={iconImg} alt="" />
            </div>
            <h1 className={s.title}>
              Groceries delivered in as little as <span>2 hours</span>
            </h1>
            <p className={s.description}>
              Grocen atssures fresh grocery every morning to your family without
              getting out in this pandemic.
            </p>
            <div className={s.hero__left__buttons}>
              <Button text="Order Now" varient="normal" />
              <button className={s.button}>
                <span className={s.button__icon}>
                  <img className={s.icon} src={playIcon} alt="" />
                </span>
                <span className={s.button__text}>Order Process</span>
              </button>
            </div>
          </div>
          <div className={s.hero__right}>
            <div className="">
              <img src={heroImg} className={s.hero__right__img} alt="" />
              <img src={AbstractIcon} className={s.AbstractIcon} alt="" />
              <div className={s.delivary__time}>
                <img
                  src={clockIcon}
                  alt=""
                  className={s.delivary__time__icon}
                />
                <p className={s.delivary__time__description}>
                  <span>Delivary</span>
                  <small>30 Min</small>
                </p>
              </div>
              <div className={s.hero__card}>
                <img src={orange} className={s.hero__card__img} alt="" />
                <h5 className={s.hero__card__title}>Fresh Orenge</h5>
                <h3 className={s.hero__card__price}>$44.60</h3>
                <p className={s.hero__card__description}>Free Shipping</p>
                <button className={s.hero__card__cart__btn}>
                  <BsCartPlusFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
