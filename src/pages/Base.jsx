import { Outlet } from "react-router-dom";
import CustomAppBar from "../components/CustomAppBar";
import Footer from "../components/Footer";

function Base() {
  return (
    <div>
      <CustomAppBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Base;
