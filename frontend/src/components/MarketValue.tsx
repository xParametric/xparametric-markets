import { Box, Typography } from "@mui/material";
import React from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const MarketValue = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <LeaderboardIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1">$854.k</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MarketValue;
