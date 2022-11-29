import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPath } from "../../store/pathSlice";
import "./Dashboard.scss";
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPath("dashboard"));
  }, [dispatch]);
  return (
    <div className="dashboard">
      <div className="containeri"></div>
    </div>
  );
}

export default Dashboard;
