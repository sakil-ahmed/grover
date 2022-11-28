import React from "react";
import * as s from "./StyleCta.module.scss";
import mobile from "./../../images/mobile-mockup.png";
import appIcon from "../../images/appicon.png";
import playIcon from "../../images/playstoreicon.png";

const CtaSection = () => {
  return (
    <section className={s.cta__section}>
      <div className="container">
        <div className={s.row}>
          <div className={s.left}>
            <div className="">
              <img src={mobile} alt="" />
            </div>
          </div>
          <div className={s.right}>
            <h6 className={s.right__small__title}>Download our app</h6>
            <h2 className={s.right__title}>
              Get the Groceries app order more easily.
            </h2>
            <p className={s.right__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className={s.right__buttons}>
              <button className={s.cta__btn}>
                <img src={appIcon} alt="" />
                <span>App Store</span>
              </button>
              <button className={s.cta__btn}>
                <img src={playIcon} alt="" />
                <span>Play Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
