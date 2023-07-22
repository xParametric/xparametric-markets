"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";

const MarketSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log("Search value:", event.target.value);
    // Here you can add the logic for on-type search
  };

  return (
    <TextField
      fullWidth
      value={searchValue}
      onChange={handleSearchChange}
      label="Search"
      variant="outlined"
    />
  );
};

export default MarketSearch;
