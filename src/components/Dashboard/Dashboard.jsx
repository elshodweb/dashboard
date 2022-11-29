import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPath } from "../../store/pathSlice";
import CircleChart from "../CircleChart/CircleChart";
import TableCharts from "../TableCharts/TableCharts";
import "./Dashboard.scss";
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPath("dashboard"));
  }, [dispatch]);
  return (
    <div className="dashboard">
      <div className="containeri">
        <div className="charts">
          <div className="years">
            <div className="years__row">
              <div className="years__title">Yillik Statistika</div>
              <label className="years__label">
                <select className="years__select">
                  <option value="1">
                    <strong>Yillar</strong>
                  </option>
                  <option value="2">
                    <strong>Oylar</strong>
                  </option>
                </select>
              </label>
            </div>
            <div className="years__table-charts">
              <TableCharts />
            </div>
          </div>
          <div className="circle">
            <div className="circle__title">O’quvchilar</div>
            <div className="circle__subtitle">Guruhdagi o’quchilar guruhi </div>
            <div className="circle__chart">
              <CircleChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
