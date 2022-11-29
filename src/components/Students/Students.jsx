import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPath } from "../../store/pathSlice";
import Courses from "../Courses/Courses";
import InfoBlock from "../InfoBlock/InfoBlock";

import arrowDown from "./../../assets/icons/info/arrow-down.svg";
import arrowUp from "./../../assets/icons/info/arrow-up.svg";
import monitor from "./../../assets/icons/info/monitor.svg";
import profilGroup from "./../../assets/icons/info/profil-group.svg";
import profileTick from "./../../assets/icons/info/profile-tick.svg";
function Students() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPath("oquvchilar"));
  }, [dispatch]);
  const data = [
    {
      id: 1,
      icon: profilGroup,
      color: "green",
      name: "Hamma o’quvchilar",
      colorDescrip: "green",
      count: "125 ta",
      descrip: "16% Oylik",
      imgDescrip: arrowUp,
    },

    {
      id: 2,
      icon: profileTick,
      color: "green",
      name: "Ketgan O’quvchilar",
      count: "10 ta",
      colorDescrip: "red",
      descrip: "1% oylik",
      imgDescrip: arrowDown,
    },
    {
      id: 4,
      icon: monitor,
      color: "green",
      name: "Faol o’quvchilar",
      count: "54 ta",
    },
  ];
  return (
    <div className="studenst">
      <InfoBlock type={"students"} data={data} />
      <Courses />
    </div>
  );
}

export default Students;
