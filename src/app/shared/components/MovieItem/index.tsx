import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMovie } from "../../../inrefaces/movieInterface";

const Movie= () => {
  const[movieData, setMovieData] =useState<IMovie>()
  const { imdbID} = useParams()


  
  return (
    <div>
MovieDetail {imdbID}

    </div>
  )
}

export default Movie