import { Box, Typography } from "@mui/material";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";

const MarketTradingFee = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <PercentIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            3
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MarketTradingFee;
