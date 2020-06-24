import React, { useState } from "react";
import MovieList from "./MovieList";

const Search = (props) => {
  //const NEW_URL = "https://omdb-api.now.sh/?type=movie&s="
  const [movieInputValue, setMovieInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://omdb-api.now.sh/?type=movie&s=${movieInputValue}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div
        style={{ width: "85%", height: "100%", padding:"20px", margin: "1rem auto", background: "black",
      }}
      >
        <label>
          <input
            type="text"
            value={movieInputValue}
            onChange={(e) => setMovieInputValue(e.target.value)}
          />
          {console.log(movieInputValue)}
        </label>
        <input type="submit" value="Search" />
        <MovieList {...movies} />
      </div>
    </form>
  );
}

export default Search;
