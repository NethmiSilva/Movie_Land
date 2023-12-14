import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import searchIcon from "/search.svg";
import MovieCard from "./MovieCard";

//
function App() {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c3637661";
  const [movies, setMovies] = useState([]);
  const [searchTernm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const respone = await fetch(`${API_URL}&s=${title}`);
    const data = await respone.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTernm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies(searchTernm);
          }}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Movies</h1>
        </div>
      )}
      ;
    </div>
  );
}

export default App;
