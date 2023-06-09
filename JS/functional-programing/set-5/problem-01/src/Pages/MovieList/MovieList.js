// 1. Create an array of objects representing movies in your watchlist. Each object has the following
// properties: id, title and director. Write a React component that takes the array of movies as input and
// returns an unordered list of movies, where each list item displays the movie's title and director.
/* eslint-disable no-debugger, no-console */

import "./style.css";

import { movies } from "../../data";

const MovieList = () => {
  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MovieList };
