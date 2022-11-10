import MainLayout from "../layout/mainLayout";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";
import { ERoutes } from "./constants";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: ERoutes.HOME, element: <Home /> },
      { path: ERoutes.MOVIELIST, element: <MovieList/> },
      { path: ERoutes.COMINGSOON, element: <ComingSoon/> },
  ],
  },
];

export default mainRoutes;
