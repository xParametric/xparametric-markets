"use client";
import { Box, Typography } from "@mui/material";
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

const OpenPositions: React.FC = () => {
  const data = [
    {
      name: "Page A",
      uv: 1200,
      pv: 800,
      amt: 1600,
    },
    {
      name: "Page B",
      uv: 450,
      pv: 300,
      amt: 600,
    },
    {
      name: "Page C",
      uv: 890,
      pv: 600,
      amt: 950,
    },
    {
      name: "Page D",
      uv: 300,
      pv: 200,
      amt: 350,
    },
    {
      name: "Page E",
      uv: 780,
      pv: 400,
      amt: 900,
    },
    {
      name: "Page F",
      uv: 600,
      pv: 450,
      amt: 800,
    },
    {
      name: "Page G",
      uv: 1050,
      pv: 700,
      amt: 1300,
    },
    {
      name: "Page H",
      uv: 1800,
      pv: 1200,
      amt: 2200,
    },
    {
      name: "Page I",
      uv: 950,
      pv: 600,
      amt: 1100,
    },
  ];

  return (
    <Box
      className="custom-open-positions"
      sx={{
        borderRadius: 4,
        m: 2,
        boxShadow: 1,
        backgroundColor: "#fff",
        padding: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "background.default", mb: 1 }}
      >
        Open Positions
      </Typography>

      <AreaChart
        width={320}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#FFFFFF"
          fill="#FFFFFF"
          fillOpacity={0.4}
        />
      </AreaChart>
    </Box>
  );
};

export default OpenPositions;
