import MainLayout from "../layout/mainLayout";
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
      { path: ERoutes.MOVIE_DETAILS, element: <Movie /> },
    ],
  },
];

export default mainRoutes;
