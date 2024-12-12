import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/index.css";
import Home from "./pages/Home.jsx";
import Base from "./pages/Base.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </RouterProvider>
  );
}

export default App;
