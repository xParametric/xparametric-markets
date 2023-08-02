"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const MarketVote = () => {
  const [voteCount, setVoteCount] = useState(0);

  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <IconButton
            disableRipple
            onClick={() => setVoteCount(voteCount + 1)}
            sx={{ p: 0, mx: 1, color: "primary.light" }}
          >
            {" "}
            <ThumbUpAltIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {voteCount}
          </Typography>
        </Box>
        <Box>
          <IconButton
            disableRipple
            onClick={() => setVoteCount(voteCount - 1)}
            sx={{ p: 0, mx: 1, color: "primary.light" }}
          >
            {" "}
            <ThumbDownAltIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default MarketVote;
