import React from "react";
import { Link } from "react-router-dom";
import * as s from "./StyleFooter.module.scss";
import logo from "./../../images/logo.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__top__content}>
          <div className={s.col}>
            <img src={logo} className={s.logo} alt="Grover Logo" />
            <p className={`${s.footer__desc} ${s.first__child}`}>
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </p>
          </div>
          <div className={s.col}>
            <h5 className={s.footer__heading}>Company</h5>
            <div className={s.footer__links}>
              <Link className={s.footer__links__item} to="/">
                About Us
              </Link>
              <Link className={s.footer__links__item} to="/">
                Blog
              </Link>
              <Link className={s.footer__links__item} to="/">
                All Products
              </Link>
              <Link className={s.footer__links__item} to="/">
                Locations Map
              </Link>
            </div>
          </div>
          <div className={s.col}>
            <h5 className={s.footer__heading}>Services</h5>
            <div className={s.footer__links}>
              <Link className={s.footer__links__item} to="/">
                Order tracking
              </Link>
              <Link className={s.footer__links__item} to="/">
                Wish List
              </Link>
              <Link className={s.footer__links__item} to="/">
                My account
              </Link>
              <Link className={s.footer__links__item} to="/">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className={s.col}>
            <h5 className={s.footer__heading}>Get in Touch</h5>
            <p className={`${s.footer__desc} ${s.last__child}`}>
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
          </div>
        </div>
        <div className={s.footer__bottom__content}>
          <p className={s.copy__right__text}>
            All Rights Reserved @ BESNIK 2021
          </p>
          <p className={s.terms__policy}>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy & Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
