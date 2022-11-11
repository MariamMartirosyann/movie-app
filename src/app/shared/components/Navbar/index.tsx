import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavbarRoutes } from "./navbarRoutes";


const Navbar = () => {
  const navbarRoutes= useNavbarRoutes()
  return (
    <>
      <Grid container m={2} style={{width:"100%"}}>
        <Grid item xs={1}>
          Logo
        </Grid>
       {navbarRoutes.map((route)=>
          <Grid item xs={1} key={route.path}>
       <Link  style={{textDecoration:'none'}} to={route.path} >{route.text}</Link>
       </Grid>
       )}
      </Grid>
    </>
  );
};

export default Navbar;
