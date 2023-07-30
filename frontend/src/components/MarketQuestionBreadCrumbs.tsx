import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MarketQuestionBreadCrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {/* <Link underline="hover" color="inherit" href="/">
          Weather
        </Link> */}
        <Link underline="hover" color="inherit" href="/">
          Insurance
        </Link>
        <Typography color="text.primary">Weather</Typography>
      </Breadcrumbs>
    </div>
  );
}
