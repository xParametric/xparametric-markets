import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TotalBalanceChart from "./TotalBalanceChart";

const PorfolioTotalBalance: React.FC = () => {
  return (
    <Box
      sx={{
        border: 1,
        boxShadow: 1,
        borderRadius: 1,
        padding: 2,
        my: 2,
        mx: 4,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h3" component="div">
            $0
          </Typography>
          <Typography variant="caption">Total Balance</Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              backgroundColor: "#21937284",
              display: "inline-block",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <Box display="flex" alignItems="center">
              <ArrowDropUpIcon />
              <Typography>+0%</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <TotalBalanceChart />
    </Box>
  );
};

export default PorfolioTotalBalance;
