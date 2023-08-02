import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography } from "@mui/material";
const MarketQuestionDate = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <CalendarMonthIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            1 June
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MarketQuestionDate;
