import React from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Box, IconButton } from "@mui/material";
const BookmarkMarket = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <IconButton
            disableRipple
            sx={{ p: 0, mx: 1, color: "primary.light" }}
          >
            {" "}
            <BookmarkAddIcon />
          </IconButton>
        </Box>
        {/* <Box>
          <Typography variant="subtitle1">3</Typography>
        </Box> */}
      </Box>
    </div>
  );
};

export default BookmarkMarket;
