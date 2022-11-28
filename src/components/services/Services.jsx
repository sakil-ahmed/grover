import React from "react";
import * as s from "./StyleService.module.scss";
import ServiceCard from "./../serviceCard/ServiceCard";
import carIcon from "./../../images/carIcon.png";
import foundIcon from "./../../images/foundIcon.png";
import securityIcon from "./../../images/securityIcon.png";

const Services = () => {
  return (
    <section className={s.services__section}>
      <div className="container">
        <div className={s.row}>
          <h6 className={s.small__title}>What we Serve</h6>
          <h2 className={s.title}>
            fruit and vegetable delivered to your home
          </h2>
          <div className={s.service__cards}>
            <ServiceCard
              icon={carIcon}
              title="Free shipping"
              description="Enjoy Order in a hand using the fresness of groceries"
            />
            <ServiceCard
              icon={foundIcon}
              title="15 days returns"
              description="Order in a handy way using the freshness of the groceries."
            />
            <ServiceCard
              icon={securityIcon}
              title="Secure checkout"
              description="If you get rotten items - return immediately to us."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
