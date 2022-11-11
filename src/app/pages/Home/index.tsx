import Slider from "react-slick";
import { useEffect, useState } from "react";
import { IMovie } from "../../interfaces/movieInterface";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();

  useEffect(() => {
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.Search);
        localStorage.setItem("m", JSON.stringify(data.Search));
      });
  }, []);

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

  return (
    <>
      <div className="mainPlayer">
        
        <div className="videoGrid">
          <video
            src="https://video.wixstatic.com/video/f2ac30_0a607a47865e44b9bddd4ce458330749/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted
            className="video"
          />
        </div>
        <div className="textGrid">
          <Grid item lg={6}>
            <Typography variant="h1">Knights of Wales</Typography>
          </Grid>
        </div>
      </div>

      <Grid container></Grid>
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
                <div>{movie.Title}</div>
                <div>Year: {movie.Year}</div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Home;
