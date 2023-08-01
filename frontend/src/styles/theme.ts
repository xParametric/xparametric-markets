"use client";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    secondary: {
      main: "#78C1F3",
      // light: "#9DB2BF",

      contrastText: "#F8FDCF",

      // main: "#",
    },
    primary: {
      main: "#27374D",
      // dark: "#526D82",  dark: "#E2F6CA",

      // light: "#9BE8D8",

      contrastText: "#DDE6ED",
    },

    // error: {
    //   main: red.A400,
    // },
    background: {
      default: "#EFECEC",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Raleway,sans-serif",
  },
  //   components: {
  //     MuiDrawer: {
  //       styleOverrides: {
  //         paper: {
  //           backgroundColor: "#EFECEC",
  //           // color: "red",
  //         },
  //       },
  //     },
  //     MuiDialog: {
  //       styleOverrides: {
  //         paper: {
  //           backgroundColor: "#EFECEC",
  //         },
  //       },
  //     },
  //   },
});

export default theme;
