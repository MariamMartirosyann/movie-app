import { Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../inrefaces/movieInterface";
import "./style.css";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();
  const movies = localStorage.getItem("m");

  const myMovies = useMemo(() => {
    if (movies) {
      const movieList = JSON.parse(movies);

      setPopularMovies(movieList);
    }
  }, [movies]);

  return (
    <>
      {" "}
      <Grid container mx={10}>
        <Typography variant="h6">MovieList</Typography>
      </Grid>
      <Grid container mx={10}>
        {popularMovies?.map((movie) => {
          return (
            <Grid item lg={4} key={movie.imdbID} my={5}>
              <Link
                to={`/movie-details/${movie.imdbID}`}
                className="decorationNon"
              >
                <img
                  src={movie.Poster}
                  className="movieImage"
                  alt={"movie poster"}
                />
                <div> {movie.Title}</div>
                <div> Year : {movie.Year}</div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MovieList;
