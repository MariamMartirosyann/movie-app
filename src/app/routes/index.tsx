import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";
import secondaryRoutes from "./secondaryRoutes";

const Routes = () => {
  const routes = [...mainRoutes, ...secondaryRoutes];

  return useRoutes(routes);
};

export default Routes;
