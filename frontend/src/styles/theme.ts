"use client";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27374D",
      contrastText: "#303596",
      // light: "#303596",
      // dark: "#303596",
    },
    secondary: {
      main: "rgb(120,193,243,0.5)",
      contrastText: "#F8FDCF",
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "linear-gradient(90deg, #27374D 0%, #78C1F3 100%)",
      paper: "rgb(255,255,255,0.5)",
    },
  },
  // typography: {
  //   fontFamily: "Raleway, sans-serif",
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: "relative",
          background:
            "radial-gradient(circle, #cddef1, #d3dcf2, #dbdaf1, #e3d7ee, #ead5e9, #ecd8e9, #eedaea, #f0ddea, #f0e4ef, #f1ebf3, #f3f1f6, #f7f7f7)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        },
      },
    },
  },
});

export default theme;
