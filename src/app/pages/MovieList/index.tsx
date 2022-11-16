import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces/movieInterface";
import { selectLoadingState, setLoading } from "../../redux/common";
import SliderSkeleton from "../../shared/SlyerSkeleton";
import { Grid, Typography } from "@mui/material";
import { AppDispatch } from "../../store";
import "./style.css";
import Slider from "react-slick";
import { cardInfo } from "../Home/constants";
import TableViewIcon from '@mui/icons-material/TableView';

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();
  const [movieTable, setMovieTable] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectLoadingState);
  const movies = localStorage.getItem("m");

  useMemo(() => {
    if (movies) {
      dispatch(setLoading(true));
      const movieList = JSON.parse(movies);
      setPopularMovies(movieList);
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    }
  }, [dispatch, movies]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
    Instant: true,
  };


  const handleClick=()=>{
    setMovieTable(!movieTable)
  }
  return (
    <>
      <Grid container>
        <Grid item lg={8}>
        <Typography variant="h6" style={{ margin: "100px" }}>  
        Trending Movies
        </Typography>
        </Grid>
        <Grid item lg={2}><TableViewIcon  className="tableIcon" onClick={handleClick}/></Grid>
      </Grid>
      {movieTable?(<> {isLoading ? (
        <>
          <SliderSkeleton />
          <SliderSkeleton />
        </>
      ) : (
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
                      Describe your image here. Use catchy text to tell people
                      the story behind the photo. Go to “Manage Media” to add
                      your content.
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
      )}</>):(<>      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <Slider {...settings} className="mSlider">
          {popularMovies?.map((movie) => {
            return (
              <div className="mPoster" key={movie.imdbID}>
                <Link
                  to={`/movie-details/${movie.imdbID}`}
                  className="decorationNon"
                >
                  <img
                    className="mImage"
                    src={!!movie.Poster && movie.Poster}
                    alt={movie.Title}
                  />
                  <div className="mDetail">
                    <div className="cardIcons">
                      {cardInfo?.map((i) => {
                        return (
                          <div key={i.id} className="iconDiv">
                            {i.icon}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mTitle">{movie.Title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      )}
      
      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <Slider {...settings} className="mSlider">
          {popularMovies?.map((movie) => {
            return (
              <div className="mPoster" key={movie.imdbID}>
                <Link
                  to={`/movie-details/${movie.imdbID}`}
                  className="decorationNon"
                >
                  <img
                    className="mImage"
                    src={!!movie.Poster && movie.Poster}
                    alt={movie.Title}
                  />
                  <div className="mDetail">
                    <div className="cardIcons">
                      {cardInfo?.map((i) => {
                        return (
                          <div key={i.id} className="iconDiv">
                            {i.icon}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mTitle">{movie.Title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      )}</>)}

     
    </>
  );
};

export default MovieList;
