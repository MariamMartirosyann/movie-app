
import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";

const mainLayout = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default mainLayout;
