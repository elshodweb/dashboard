import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function TableCharts() {
  const data = [
    { name: "Jan", uv: 20, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 24, pv: 2400, amt: 2400 },
    { name: "Mar", uv: 30, pv: 2400, amt: 2400 },
    { name: "Apr", uv: 22, pv: 2400, amt: 2400 },
    { name: "May", uv: 15, pv: 2400, amt: 2400 },
    { name: "Jun", uv: 22, pv: 2400, amt: 2400 },
    { name: "Jul", uv: 24, pv: 2400, amt: 2400 },
    { name: "Aug", uv: 35, pv: 2400, amt: 2400 },
    { name: "Sep", uv: 32, pv: 2400, amt: 2400 },
    { name: "Oct", uv: 26, pv: 2400, amt: 2400 },
    { name: "Nov", uv: 20, pv: 2400, amt: 2400 },
    { name: "Dec", uv: 28, pv: 2400, amt: 2400 },
  ];
  return (
    <BarChart width={560} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
}

export default TableCharts;
