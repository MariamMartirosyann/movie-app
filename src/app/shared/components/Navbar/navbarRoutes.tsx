import { ERoutes } from "../../../routes/constants";

export const useNavbarRoutes = () => {
  return [
    { text: "Home", path: ERoutes.HOME },
    { text: "Movie List", path: ERoutes.MOVIE_LIST },
  ];
};
