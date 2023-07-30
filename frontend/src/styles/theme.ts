"use client";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      dark: "#474E68",
      light: "#EFECEC",
      main: "#404258",
    },
    secondary: {
      main: "#171B23",
      dark: "#6B728E",
      light: "#EFECEC",
    },

    error: {
      main: red.A400,
    },
    background: {
      default: "#6B728E",
      paper: "#EFECEC",
    },
  },
  //   typography: {
  //     fontFamily: "Raleway,sans-serif",
  //   },
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
