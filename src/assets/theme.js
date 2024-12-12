import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
      secondary: {
        main: "#9c27b0",
        light: "#d05ce3",
        dark: "#6a0080",
        contrastText: "#fff",
      },
      error: {
        main: "#f44336",
      },
      warning: {
        main: "#ff9800",
      },
      info: {
        main: "#2196f3",
      },
      success: {
        main: "#4caf50",
      },
    },
  },
});

export default theme;
