import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Base from "./pages/Base";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import StartPage from "./pages/StartPage.jsx";
import ListVehicles from "./pages/ListVehicles.jsx";

const router = createBrowserRouter([
  {
    path: "app/",
    element: <Base />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/marcas/:id",
        element: <ListVehicles />,
      },
    ],
  },
  {
    path: "/",
    element: <StartPage />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
