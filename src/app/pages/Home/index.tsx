
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { IMovie } from "../../inrefaces/movieInterface";
import "./style.css"
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();

  useEffect(() => {
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.Search);
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
    <Slider {...settings} className="mSlider">
      {popularMovies?.map((movie) => {
        return (
          <Link key={movie.imdbID} to={`/movie-details/${movie.imdbID}`}> 
          <div  className="mPoster">
            <img className="mImage" src={!!movie.Poster&& movie.Poster} alt={movie.Title} />
        <div>{movie.Title}</div>
        <div>Year: {movie.Year}</div>     
          </div>
          </Link>
        );
      })}
    </Slider>
  );
};

export default Home;
