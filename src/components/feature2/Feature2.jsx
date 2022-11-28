import React from "react";
import * as s from "./StyleFeature.module.scss";
import Button from "./../button/Button";
import img from "./../../images/feature2.png";
const Feature2 = () => {
  return (
    <section className={s.feature2__section}>
      <div className="container">
        <div className={s.row}>
          <div className={s.left}>
            <h6 className={s.left__small__title}>HOME DELIVERY</h6>
            <h2 className={s.left__title}>
              Sit at Home We Will Take Care Your Order
            </h2>
            <p className={s.left__descptrion}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
            </p>
            <Button text="Explore Now" varient="outline" />
          </div>
          <div className={s.right}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
