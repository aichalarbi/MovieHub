import React, { useState } from "react";
import MovieList from "./movielist";
import Filter from "./filter";

const List = ({ movies }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.name
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const ratingMatch = filterRating ? movie.rating >= filterRating : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default List;
