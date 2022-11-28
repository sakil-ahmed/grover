import React from "react";
import * as s from "./StyleFeature1.module.scss";
import img from "./../../images/featureImage.png";
import Button from "../button/Button";
import featureCardImg from "./../../images/feature1.png";
import PlusIcon from "./../icons/plusIcon";
import StarIcon from "./../icons/starIcon";

const Feature1 = () => {
  return (
    <section className={s.feature1__section}>
      <div className="container">
        <div className={s.row}>
          <div className={s.left}>
            <img src={img} className={s.left__image} alt="" />
            <div className={s.card}>
              <h5 className={s.card__title}>Melting Cheese</h5>
              <p className={s.card__description}>Red Stovery</p>
              <img src={featureCardImg} className={s.card__img} alt="" />
              <span className={s.rating}>
                <StarIcon />
                3.8
              </span>
              <div className={s.card__price}>
                <span className={s.price}>$49.66</span>
                <button className={s.btn}>
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
          <div className={s.right}>
            <h6 className={s.small__title}>WHY CHOOSE US</h6>
            <h2 className={s.title}>Find Favorites and Discover New Ones</h2>
            <p className={s.description}>
              At vero eos et accusamus et iusto odio dignissimos ducimus
              blanditiis praesen voluptatum deleniti.
            </p>
            <Button text="Explore Now" varient="normal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
