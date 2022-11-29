import React from "react";
import CourCard from "../CourCard/CourCard";
import "./Courses.scss";
function Courses() {
  const infos = [
    { id: 1, count: 7, name: "Faol Guruhlar" },
    { id: 2, count: 2, name: "Tugatgan guruh" },
    { id: 3, count: 9, name: "Umumiy guruh" },
  ];
  const data = [
    {
      id: 1,
      name: "Frontent 010",
      date: "December 20, 2022",
      count: "O’quvchilar soni : 6",
      degre: "O’rtacha o’z",
      prasent: "70%",
      type: "orange",
      studentInfo: true,
    },
    {
      id: 2,
      name: "Frontent 001",
      date: "December 20, 2022",
      count: "O’quvchilar soni : 6",
      degre: "O’rtacha o’z",
      type: "blue",
      prasent: "70%",
    },
    {
      id: 3,
      name: "Frontent 012",
      date: "December 20, 2022",
      count: "O’quvchilar soni : 6",
      degre: "O’rtacha o’z",
      type: "orange",
      prasent: "70%",
    },
    {
      id: 4,
      name: "Frontent 013",
      date: "December 20, 2022",
      count: "O’quvchilar soni : 6",
      degre: "O’rtacha o’z",
      type: "orange",
      prasent: "70%",
    },
    {
      id: 5,
      name: "Frontent 018",
      date: "December 20, 2022",
      count: "O’quvchilar soni : 6",
      degre: "O’rtacha o’z",
      type: "blue",
      prasent: "70%",
    },
    {
      id: 6,
      name: "Frontent 022",
      date: "December 20, 2022",
      count: "O’quvchilar soni : 6",
      degre: "O’rtacha o’z",
      type: "orange",
      prasent: "70%",
    },
  ];
  return (
    <div className="courses">
      <div className="courses__row">
        <div className="courses__title">Guruhlar</div>
        <div className="courses__date">Oktabr, 27</div>
      </div>
      <div className="courses__infos">
        {infos.length > 0 &&
          infos.map((item) => {
            return (
              <div className="courses__info">
                <div className="courses__count">{item.count}</div>
                <div className="courses__descr">{item.name}</div>
              </div>
            );
          })}
      </div>
      <div className="courses__list">
        {data.length > 0 &&
          data.map((item) => (
            <CourCard
              data={item}
              type={item.type}
              studentInfo={item.studentInfo}
            />
          ))}
      </div>
    </div>
  );
}

export default Courses;
