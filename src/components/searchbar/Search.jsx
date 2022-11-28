import React from "react";
import * as s from "./StyleSearch.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import cart from "./../../images/cart.svg";

const Search = () => {
  return (
    <div className={s.search__bar}>
      <div className={s.search__bar__container}>
        <input
          className={s.search__bar__input}
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        />
        <AiOutlineSearch className={s.search__bar__icon} />
      </div>
      <div className={s.cart__icon}>
        <img src={cart} alt="Cart Icon" />
      </div>
      <span className={s.badge}>2</span>
    </div>
  );
};

export default Search;
