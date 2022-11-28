import React, { useState } from "react";
import * as s from "./StyleHeader.module.scss";
import Logo from "./../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { NAVLINK } from "./../../../router";
import Search from "../searchbar/Search";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import CartIcon from "../icons/cartIcon";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle((prev) => !prev);

  return (
    <header>
      <div className="container">
        <div className={s.row}>
          <div className={s.header__left}>
            <img className={s.logo} src={Logo} alt="Grover Logo" />
          </div>
          <div className={s.header__right}>
            <div className={s.mobile__menu}>
              <FaBars size="25px" color="#E73D3E" onClick={toggleMenu} />
              <CartIcon fill="#E73D3E" stroke="#E73D3E" />
            </div>
            <ul
              className={
                toggle
                  ? `${s.header__right__navigation} ${s.open}`
                  : `${s.header__right__navigation} ${s.close}`
              }
            >
              <div className={s.close__menu__btn}>
                <MdOutlineClose onClick={toggleMenu} />
              </div>
              {NAVLINK.map(({ name }, i) => {
                return (
                  <li key={i} className={s.header__right__navigation__item}>
                    <Link to="/">{name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className={s.header__right__search__bar__container}>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
