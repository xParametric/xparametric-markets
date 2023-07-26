"use client";
import React from "react";
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import StateFilter from "./StateFilter";

const FilterMarkets = () => {
  return (
    <div>
      {/* <Button
        variant="outlined"
        sx={{ height: "100%", px: 2 }}
        startIcon={<FilterListIcon />}
      >
        filter
      </Button> */}
      <StateFilter />
    </div>
  );
};

export default FilterMarkets;
