import React, { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = e => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${e.target.value}&type=movie`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (!data.errors) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results && results.length > 0 && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
