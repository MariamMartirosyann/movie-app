import { useEffect, useState } from "react";
import { IMovie } from "../../inrefaces/movieInterface";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>();

  useEffect(()=>{
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=[SearchTerm]")
    .then(res=>res.json())
    .then(data=>setPopularMovies(data.results))
  },[])


  return <div>Home</div>;
};

export default Home;
