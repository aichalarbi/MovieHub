import React from "react";
import MovieCard from "./moviecard";
import CardGroup from "react-bootstrap/CardGroup";

const MovieList = ({ movies }) => {
  return (
    <CardGroup>
      {/* <div style={{display:'flex', flexWrap:'wrap'}}> */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {/* </div> */}
    </CardGroup>
  );
};

export default MovieList;
