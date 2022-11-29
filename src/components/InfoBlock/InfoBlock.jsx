import React from "react";
import "./InfoBlock.scss";
function InfoBlock({ data, type }) {
  return (
    <div className={`info ${type}`}>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id} className="info__card card">
              <div className={`card__img ${item.color}`}>
                <img src={item.icon} alt="icon" />
              </div>
              <div className="card__body">
                <div className="card__title">{item.name}</div>
                <div className="card__count">{item.count}</div>
                {item.imgDescrip && (
                  <div className={`card__info ${item.colorDescrip}`}>
                    <img src={item.imgDescrip} alt="icon" />
                    {item.descrip}
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default InfoBlock;
