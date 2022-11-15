import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { IMovie } from "../../interfaces/movieInterface";
import { Grid } from "@mui/material";
import { selectLoadingState, setLoading } from "../../redux/common";
import SliderSkeleton from "../../shared/SlyerSkeleton";
import { AppDispatch } from "../../store";
import "./style.css";
import { cardInfo } from "./constants";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectLoadingState);

  useEffect(() => {
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLoading(true));
        setPopularMovies(data.Search);
        localStorage.setItem("m", JSON.stringify(data.Search));
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      });
  }, [dispatch]);

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
      )}
    </>
  );
};

export default Home;
