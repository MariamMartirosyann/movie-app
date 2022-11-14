
import { Link } from "react-router-dom";
import { useNavbarRoutes } from "./navbarRoutes";
import "./style.css"


const Navbar = () => {
  const navbarRoutes= useNavbarRoutes()
  return (
    <>
      <div className="mainNav">
        <div  className="navItem">
          Logo
        </div>
       {navbarRoutes.map((route)=>
         <div className="navItem" key={route.path}>
       <Link  className="link" to={route.path} >{route.text}</Link>
       </div>
       )}
      </div>
    </>
  );
};

export default Navbar;
