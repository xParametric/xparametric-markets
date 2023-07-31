"use client";
import { useEffect } from "react";
import dbConnect from "@/config/dbConfig";
import MarketCard from "@/components/MarketCard";
import CarousalCards from "@/components/LandingPageCarousal";
import LandingPageCarousal from "@/components/LandingPageCarousal";

const Home = () => {
  return (
    <main className="background">
      <LandingPageCarousal />
    </main>
  );
};

export default Home;
