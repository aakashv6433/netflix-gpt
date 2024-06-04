import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.blur();
    }
  };

  return (
    <div className="p-3">
      <h1 className="text-white text-lg md:text-3xl mb-3">{title}</h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide"
        ref={scrollRef}
        tabIndex="0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
