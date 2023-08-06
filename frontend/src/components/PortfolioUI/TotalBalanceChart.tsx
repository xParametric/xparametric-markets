"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { pv: "January", uv: 0 },
  { pv: "February", uv: 1200 },
  { pv: "March", uv: 8000 },
  { pv: "April", uv: 59050 },
  { pv: "May", uv: 65200 },
  { pv: "June", uv: 48200 },
  { pv: "July", uv: 21900 },
  { pv: "August", uv: 12700 },
  { pv: "September", uv: 10200 },
  { pv: "October", uv: 58000 },
  { pv: "November", uv: 65700 },
  { pv: "December", uv: 59860 },

  // Add more data points as needed for different time periods
];

// export const calculateTotalBalance = (data: any) => {
//   let totalBalance = 0;

//   const balanceData = data.map((item: any) => {
//     totalBalance += item.uv;
//     return { pv: item.pv, uv: totalBalance };
//   });

//   return balanceData;
// };
export default function TotalBalanceChart() {
  // const getCircleColor = (value) => {
  //   if (value > 0) {
  //     return "green"; // Circle will be green for positive values
  //   } else if (value < 0) {
  //     return "red"; // Circle will be red for negative values
  //   } else {
  //     return "blue"; // Circle will be blue for zero values
  //   }
  // };

  // Find the minimum value of uv in the data
  const minUv = Math.min(...data.map((item) => item.uv));
  const yAxisMin = minUv - 100; // Adjust the padding as needed

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 30, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="pv"
          name="date"
          // unit="UTC"
          // tickFormatter={(dateString) =>
          //   new Date(dateString).toLocaleDateString()
          // }
        />
        <YAxis
          dataKey="uv"
          name="(P&L)"
          unit="$"
          type="number"
          domain={[yAxisMin, "dataMax + 100"]} // Adjust the Y-axis domain to exclude the minimum value
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          formatter={(value, name) => [`${value} $`, "P&L"]}
        />
        {/* <Area
          type="monotone"
          dataKey="uv"
          stroke="#26374D"
          fill="#26374D"
          fillOpacity={0.6}
          dot={{ r: 4, stroke: "#26374D", fill: getCircleColor }} // Use getCircleColor function to set custom dot color
        /> */}
        <Area
          type="basis"
          dataKey="uv"
          stroke="#26374D"
          fill="#26374D"
          fillOpacity={0.6}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
