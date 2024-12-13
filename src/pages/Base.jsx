import { Outlet } from "react-router-dom";
import CustomAppBar from "../components/CustomAppBar";

function Base() {
  return (
    <div>
      <CustomAppBar />
      <Outlet />
    </div>
  );
}

export default Base;
