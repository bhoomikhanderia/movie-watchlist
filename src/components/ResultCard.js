import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    watchlist,
    watched,
    addMovieToWatched
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.imdbID === movie.imdbID);
  let storedMovieWatched = watched.find(o => o.imdbID === movie.imdbID);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster === "N/A" ? (
          <div className="filler-poster"></div>
        ) : (
          <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-year">{movie.Year ? movie.Year : "-"}</h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
