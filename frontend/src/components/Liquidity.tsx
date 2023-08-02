import { Box, Typography } from "@mui/material";
import React from "react";
import WaterDropIcon from "@mui/icons-material/WaterDropOutlined";
const Liquidity = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <WaterDropIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            $51.3 k
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Liquidity;
