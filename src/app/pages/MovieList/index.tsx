import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IMovie } from "../../inrefaces/movieInterface";
import "./style.css"


const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();

  useEffect(() => {
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.Search);
      });
  }, []);
  return (
    <>  <Grid container mx={25}><Typography variant="h6">MovieList</Typography></Grid>
    <Grid container mx={25}>
   {popularMovies?.map((movie) => {
    return (
  <Grid  item lg={6} key={movie.imdbID} my={5} className="mCard">
    <img src={movie.Poster} className="movieImage" alt={"movie poster"}/>
    <div> {movie.Title}</div>
    <div> Year : {movie.Year}</div>

  </Grid>)
  })}
  </Grid>
    </>
  )
}

export default MovieList