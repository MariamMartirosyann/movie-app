import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";

const mainLayout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default mainLayout;
