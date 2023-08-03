import React from "react";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";

const CarousalDynamicLoading = dynamic(
  () => import("@/components/LandingPageCarousal"),
  {
    ssr: false, // This will ensure that the component is not rendered on the server side
    loading: () => {
      return (
        <Box
          justifyContent={"center"}
          alignContent={"center"}
          width={"100%"}
          display={"flex"}
          height={"20vh"}
        >
          <Typography variant="h6">Loading...</Typography>
        </Box>
      );
    },
  }
);
export default CarousalDynamicLoading;
