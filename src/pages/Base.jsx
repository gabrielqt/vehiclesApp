import { Outlet } from "react-router-dom";

function Base() {
  return (
    <div>
      <h1>oi teste</h1>
      <p>teste</p>
      <Outlet />
    </div>
  );
}

export default Base;
