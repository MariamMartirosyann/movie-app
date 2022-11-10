import MainLayout from "../layout/mainLayout";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";
import Movie from "../shared/components/MovieItem";
import { ERoutes } from "./constants";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: ERoutes.HOME, element: <Home /> },
      { path: ERoutes.MOVIE_LIST, element: <MovieList /> },
      { path: ERoutes.MOVIE_DETAILS, Element: <Movie /> },
      { path: ERoutes.COMING_SOON, element: <ComingSoon /> },
    ],
  },
];

export default mainRoutes;
