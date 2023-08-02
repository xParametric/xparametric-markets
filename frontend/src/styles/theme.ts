"use client";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#27374D",
      contrastText: "#DDE6ED",
    },
    secondary: {
      main: "#78C1F3",
      contrastText: "#F8FDCF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#EFECEC",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Raleway,sans-serif",
  },
});

export default theme;
