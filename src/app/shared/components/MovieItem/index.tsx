import { Box, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../../interfaces/movieInterface";
import "./style.css";

const Movie = () => {
  const [movieData, setMovieData] = useState<IMovie>();
  const { imdbID } = useParams();

  const movies = localStorage.getItem("m");

  useMemo(() => {
    if (movies) {
      const movieList = JSON.parse(movies);
      const currMovie = movieList.find((i: any) => i.imdbID === imdbID);
      setMovieData(currMovie);
    }
  }, [imdbID, movies]);

  return (
    <Box p={4}>
      <Grid container m={10}>
        <Typography variant="h4">Movie Details </Typography>
      </Grid>
      <Grid container m={10}>
        <Grid item xs={4}>
          <img
            src={movieData?.Poster}
            alt={"Movie Poster"}
            className="mPoster"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Movie Name: {movieData?.Title}</Typography>
          <Typography variant="h6"> Year : {movieData?.Year}</Typography>
          <Typography variant="h6"> Action & Adventure</Typography>
          <Typography variant="h6"> User Score :85</Typography>
          <Box my={5}>
            <Typography variant="h6">Overview</Typography>
            <Typography>
              Denji has a simple dream—to live a happy and peaceful life,
              spending time with a girl he likes. This is a far cry from
              reality, however, as Denji is forced by the yakuza into killing
              devils in order to pay off his crushing debts. Using his pet devil
              Pochita as a weapon, he is ready to do anything for a bit of cash.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Movie;
