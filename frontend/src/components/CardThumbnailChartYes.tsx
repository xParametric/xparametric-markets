"use client ";
import React from "react";
import { AreaChart, Area } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 680,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 1390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CardThumbnailChartYes: React.FC = () => {
  return (
    <div>
      <AreaChart
        width={80}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#284E45" fill="#2D6553" />
      </AreaChart>
    </div>
  );
};

export default CardThumbnailChartYes;
