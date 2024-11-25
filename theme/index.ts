"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'Jost', sans-serif`,
    htmlFontSize: 10,
    fontSize: 10, // default font size is 10
  },
  palette: {
    primary: {
      main: "#003569",
    },
    secondary: {
      main: "#17414F",
      light: "#215D72",
    },
    grey: {
      200: "#D9D9D9",
      300: "#727272",
      400: "#a6b8ca",
    },
    background: {
      paper: "#E2F5FB",
    },
  },
});

export default theme;
