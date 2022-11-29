import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPath } from "../../store/pathSlice";
import Cards from "../Cards/Cards";
import InfoBlock from "../InfoBlock/InfoBlock";

import arrowDown from "./../../assets/icons/info/arrow-down.svg";
import arrowUp from "./../../assets/icons/info/arrow-up.svg";
import monitor from "./../../assets/icons/info/monitor.svg";
import profilExit from "./../../assets/icons/info/profil-exit.svg";
import profilGroup from "./../../assets/icons/info/profil-group.svg";
import profileTick from "./../../assets/icons/info/profile-tick.svg";
import people from "./../../assets/img/infoBlock/people.png";
function Groups() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPath("guruhlar"));
  }, [dispatch]);
  const data = [
    {
      id: 1,
      icon: profilGroup,
      color: "green",
      name: "Hamma o’quvchilar",
      count: "125 ta",
      colorDescrip: "green",
      descrip: "16% Oylik",
      imgDescrip: arrowUp,
    },
    {
      id: 2,
      icon: profileTick,
      color: "green",
      name: "Bitirgan o’quvchilar",
      count: "61 ta",
    },
    {
      id: 3,
      icon: profilExit,
      color: "red",
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
      imgDescrip: people,
    },
  ];
  return (
    <div className="groups">
      <InfoBlock type={"groups"} data={data} />
      <Cards />
    </div>
  );
}

export default Groups;
