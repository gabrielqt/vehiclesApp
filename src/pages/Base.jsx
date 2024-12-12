import { Outlet } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Base() {
  return (
    <div>
      <AcUnitIcon color="primary" />
      <Outlet />
    </div>
  );
}

export default Base;
