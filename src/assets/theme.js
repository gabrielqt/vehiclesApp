import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#401F3E",
      light: "#3F2E56",
      dark: "#453F78",
      contrastText: "#fff",
    },
    secondary: {
      main: "#759AAB",
      light: "#FAF2A1",
      dark: "#000000",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#6ED4DD",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "'Urbanist', sans-serif",
  },
});

export default theme;
