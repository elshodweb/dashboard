import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const data02 = [
  {
    name: "Group A",
    value: 25,
  },
  {
    name: "Group B",
    value: 45,
  },
  {
    name: "Group C",
    value: 55,
  },
];
const colors = ["#FF007A", "#F2EFFF", "#4623E9"];
function CircleChart() {
  return (
    <PieChart width={230} height={250}>
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={50}
        fill="#82ca9d"
      >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default CircleChart;
