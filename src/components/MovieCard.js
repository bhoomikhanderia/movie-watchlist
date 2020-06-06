import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.Poster === "N/A" ? (
        <div className="filler-poster"></div>
      ) : (
        <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
