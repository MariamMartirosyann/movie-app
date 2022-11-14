import Slider from "react-slick";
import { useCallback, useEffect, useState } from "react";
import { IMovie } from "../../interfaces/movieInterface";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();

  const memoizedCallback = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://moviesdatabase.p.rapidapi.com/titles",
        {
          headers: {
            "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
            "x-rapidapi-key":
              "a0e225aa42msh9e2aea2bb3db437p15dad6jsn70a72b86afcf",
          },
          params: { category: "all", count: "1" },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

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
      <Grid container style={{ position: "relative" }}>
        <Grid container>
          <video
            src="https://video.wixstatic.com/video/f2ac30_0a607a47865e44b9bddd4ce458330749/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted
            className="video"
          />
        </Grid>
        <div className="textGrid">
          {" "}
          <div style={{ background: "transparent" }}>
            <h2 style={{ background: "transparent" }}> Knights of Wales</h2>
            <p style={{ background: "transparent" }}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button className="btn">
              <h5 style={{ background: "transparent" }}>Watch now </h5>
            </button>
          </div>
        </div>
      </Grid>

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
