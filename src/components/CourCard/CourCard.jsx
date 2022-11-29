import React from "react";
import dots from "./../../assets/icons/dots.svg";
import group from "./../../assets/img/Group.png";
import "./CourCard.scss";
function CourCard({ studentInfo, type, data }) {
  return (
    <div className={`cours ${type}`}>
      <div className="cours__row">
        <div className="cours__date">{data.date}</div>
        <img src={dots} alt="dots" />
      </div>
      <div className="cours__title">{data.name}</div>
      <div className="cours__subtitle">{data.count}</div>
      <div className="cours__degre">{data.degre}</div>
      <div className="cours__decor">
        <span></span>
      </div>
      <div className="cours__present">{data.prasent}</div>
      {studentInfo && (
        <div className="cours__student">
          <div className="cours__student-descr">O’qituvchi</div>
          <img src={group} alt="Group" />
        </div>
      )}
    </div>
  );
}

export default CourCard;
