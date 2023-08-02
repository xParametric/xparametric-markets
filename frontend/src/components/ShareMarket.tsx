import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Box, IconButton } from "@mui/material";
const ShareMarket = () => {
  return (
    <div>
      {" "}
      <Box display={"flex"}>
        <Box>
          <IconButton
            disableRipple
            sx={{ p: 0, mx: 1, color: "primary.light" }}
          >
            <ShareIcon />
          </IconButton>
        </Box>
        {/* <Box>
      <Typography variant="subtitle1" fontWeight={600}>3</Typography>
    </Box> */}
      </Box>
    </div>
  );
};

export default ShareMarket;
