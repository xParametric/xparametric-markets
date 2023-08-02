import { Container, Grid, Box } from "@mui/material";
import React from "react";

import TotalEarnings from "./TotalEarnings";
import OpenPositions from "./OpenPostions";
import LiquidityEarnings from "./LiquidityEarnings";
import LiquidityProvided from "./LiquidityProvided";

const PortfolioContainer = () => {
  return (
    <Box>
      <Grid container justifyContent={"space-around"}>
        <Grid item>
          {" "}
          <TotalEarnings />
        </Grid>
        <Grid item>
          {" "}
          <OpenPositions />
        </Grid>
        <Grid item>
          {" "}
          <LiquidityProvided />
        </Grid>
        <Grid item>
          {" "}
          <LiquidityEarnings />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioContainer;
