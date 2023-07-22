import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import React from "react";

const FilterMarkets = () => {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{ height: "100%", px: 2 }}
        startIcon={<FilterListIcon />}
      >
        filter
      </Button>
    </div>
  );
};

export default FilterMarkets;
