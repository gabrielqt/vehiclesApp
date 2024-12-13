import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C10B0B",
      light: "#F03838",
      dark: "#00000",
      contrastText: "#F5D9D9",
    },
    secondary: {
      main: "#BF894E",
      light: "#E3A15A",
      dark: "#000000",
      contrastText: "#F5D9D9",
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#37505C", // Cor de fundo do body
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default theme;
