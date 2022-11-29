import React from "react";
import "./Header.scss";
import bell from "./../../assets/icons/header/bell.svg";
import moon from "./../../assets/icons/header/moon.svg";
import pluss from "./../../assets/icons/header/pluss.svg";
import search from "./../../assets/icons/header/search.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__hi">Salom Sheroz 👋🏼,</div>
      <div className="header__function">
        <button className="header__button">
          <img src={moon} alt="moon" />
        </button>
        <button className="header__button">
          <img src={pluss} alt="pluss" />
        </button>
        <button className="header__button">
          <img src={bell} alt="bell" />
        </button>
        <label className="header__label">
          <img src={search} alt="search" />
          <input className="header__input" type="text" placeholder="Qidiruv" />
        </label>
      </div>
    </div>
  );
}

export default Header;
