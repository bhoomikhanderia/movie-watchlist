import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Movies Watchlist</h1>

          <span className="count-pill">
            {watchlist.length}
            {watchlist.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="no-movies">
              There are no movies in your watchlist!
            </h2>
            <p>
              Click <a href="/add">here</a> to search and add movies to the
              watchlist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
