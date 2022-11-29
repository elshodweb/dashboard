import React from "react";
import BasicTable from "../Table/Table";
import search from "./../../assets/icons/header/search.svg";
import "./Cards.scss";
function Cards() {
  return (
    <div className="table">
      <div className="table__header">
        <div className="table__left">
          <div className="table__title">Hamma O’quvchilar</div>
          <div className="table__subtitle">Faol o’quvchilar</div>
        </div>
        <div className="table__right">
          <label className="table__label">
            <img src={search} alt="search" />
            <input className="table__input" type="text" placeholder="Qidiruv" />
          </label>
          <label className="table__label">
            <select className="table__select">
              <option value="1">
                Short Status : <strong>Faol</strong>
              </option>
              <option value="2">
                Short Status : <strong>Faolmas</strong>
              </option>
            </select>
          </label>
        </div>
      </div>
      <div className="table__main">
        <BasicTable />
      </div>
    </div>
  );
}

export default Cards;
