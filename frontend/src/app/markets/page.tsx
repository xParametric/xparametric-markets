import FilterMarkets from "@/components/FilterMarkets";
import MarketCard from "@/components/MarketCard";
import MarketSearch from "@/components/MarketSearch";
import { Container, Box } from "@mui/material";
import React from "react";

const markets = () => {
  return (
    // <Container maxWidth="xl">

    <div>
      {/* markets */}
      <Box display={"flex"}>
        {" "}
        <FilterMarkets />
        <MarketSearch />
      </Box>{" "}
      <MarketCard />
    </div>
    // </Container>
  );
};

export default markets;
