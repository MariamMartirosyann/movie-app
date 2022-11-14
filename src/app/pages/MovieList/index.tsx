import { Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces/movieInterface";
import "./style.css";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();
  const movies = localStorage.getItem("m");

  useMemo(() => {
    if (movies) {
      const movieList = JSON.parse(movies);

      setPopularMovies(movieList);
    }
  }, [movies]);

  return (
    <>
      <Grid container>
        <Typography variant="h6" style={{ margin: "100px" }}>
          MovieList
        </Typography>
      </Grid>
      <Grid container mx={10}>
        {popularMovies?.map((movie) => {
          return (
            <Grid item xs={3} key={movie.imdbID} my={5} className="mCard">
              <Link
                to={`/movie-details/${movie.imdbID}`}
                className="decorationNon"
              >
                <div className="layer">
                  <h6> {movie.Title}</h6>
                  <div>
                    Describe your image here. Use catchy text to tell people the
                    story behind the photo. Go to “Manage Media” to add your
                    content.
                  </div>
                  </div>
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
