import React, { useEffect, useState } from "react";
import MenuLink from "../MenuLink/MenuLink";
import setting from "./../../assets/icons/menu/setting.svg";
import key from "./../../assets/icons/menu/key.svg";
import square from "./../../assets/icons/menu/square.svg";
import user from "./../../assets/icons/menu/user.svg";
import money from "./../../assets/icons/menu/money.svg";
import prasent from "./../../assets/icons/menu/prasent.svg";
import question from "./../../assets/icons/menu/question.svg";
import foto from "./../../assets/icons/menu/foto.svg";
import down from "./../../assets/icons/menu/down.svg";
import "./Menu.scss";
import { useSelector } from "react-redux";
function Menu() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    let plusNull = (numb) => {
      return numb < 10 ? 0 + String(numb) : numb;
    };
    setInterval(() => {
      let date = new Date();
      let time = `${plusNull(date.getHours())} : ${plusNull(
        date.getMinutes()
      )} : ${plusNull(date.getSeconds())}`;
      setTime(time);
    }, 500);
  }, []);
  const path = useSelector((state) => state.path.path);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="menu__logo">
        <img src={setting} alt="logo" />
        <strong className={isOpen ? "open" : ""}>Dashboard</strong>
      </button>
      <div className="menu__list">
        <MenuLink
          to={"dashboard"}
          isOpen={isOpen}
          isActive={path === "dashboard"}
        >
          <div className="children">
            <img src={key} alt="key" />
            <span className={isOpen ? "open" : ""}>Dashboard</span>
          </div>
        </MenuLink>

        <MenuLink
          to={"guruhlar"}
          isActive={path === "guruhlar"}
          isOpen={isOpen}
        >
          <div className="children">
            <img src={square} alt="square" />
            <span className={isOpen ? "open" : ""}>Guruhlar</span>
          </div>
        </MenuLink>
        <MenuLink
          isActive={path === "oquvchilar"}
          to={"oquvchilar"}
          isOpen={isOpen}
        >
          <div className="children">
            <img src={user} alt="user" />
            <span className={isOpen ? "open" : ""}>O’quvchilar</span>
          </div>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
          <div className="children">
            <img src={money} alt="money" />
            <span className={isOpen ? "open" : ""}>Dars jadvali</span>
          </div>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
          <div className="children">
            <img src={prasent} alt="prasent" />
            <span className={isOpen ? "open" : ""}>Sozlamalar</span>
          </div>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
          <div className="children">
            <img src={question} alt="question" />
            <span className={isOpen ? "open" : ""}>Yordam</span>
          </div>
        </MenuLink>
      </div>
      <div className="menu__bottom">
        {path === "dashboard" && (
          <div className={`menu__timer ${isOpen ? "open" : ""}`}>
            <span className={isOpen ? "open" : ""}>{time}</span>
          </div>
        )}
        <div className="menu__user">
          <img src={foto} alt="foto" />
          <div className={`user__info ${isOpen ? "open" : ""}`}>
            <div className="user__name">Turdiyev Sheroz</div>
            <div className="user__prof">Frontend o’qituvchi</div>
          </div>
          <img
            className={`user__arrow ${isOpen ? "open" : ""}`}
            src={down}
            alt="down"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
