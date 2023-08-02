"use client";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: "10:00", y: 200, z: 100 },
  { x: "11:00", y: 100, z: 260 },
  { x: "12:00", y: 300, z: 430 },
  { x: "13:00", y: 250, z: 240 },
  { x: "14:00", y: -100, z: 510 },
  { x: "15:00", y: 280, z: 230 },
];

export default function TotalBalanceChart() {
  const getCircleColor = (value: any) => {
    if (value > 0) {
      return "green"; // Circle will be green for positive values
    } else if (value < 0) {
      return "red"; // Circle will be red for negative values
    } else {
      return "blue"; // Circle will be blue for zero values
    }
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 30,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="x" name="Time" unit="UTC" />
        <YAxis
          dataKey="y"
          name="(P&L)"
          unit="$"
          type="number"
          domain={["dataMin - 100", "dataMax + 100"]} // Adjust Y-axis domain to include some padding
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          //   formatter={(value, name) => [
          //     `${value} `,
          //     name === "value" ? "P&L" : "Z",
          //   ]}
        />
        <Scatter
          name="Profit/Loss"
          data={data}
          shape={(props) => (
            <circle
              cx={props.cx}
              cy={props.cy}
              r={6} // Customize the circle size
              fill={getCircleColor(props.payload.y)} // Dynamically set the fill color based on the value
            />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
