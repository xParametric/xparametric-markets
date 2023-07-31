import FilterMarkets from "@/components/FilterMarkets";
import MarketCardList from "@/components/MarketCardList";
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
      <MarketCardList />
    </div>
    // </Container>
  );
};

export default markets;
