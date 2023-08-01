"use client";

import CarousalDynamicLoading from "@/components/CarousalDynamicLoading";
import MarketCardList from "@/components/MarketCardList";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <main className="background">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", my: 2 }}
        component={"h1"}
      >
        Featured Markets
      </Typography>
      <CarousalDynamicLoading />
      <MarketCardList />
    </main>
  );
};

export default Home;
