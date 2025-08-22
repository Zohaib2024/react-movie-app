import React from "react";
import CarousalMovies from "./CarousalMovies";
import ShortCard from "./ShortCard";
import Shortheading from "./Shortheading";

import { movies } from "./Data/MoviesData"; // import dummy data
import { Link } from "react-router-dom";

const Homepage = () => {
  const trendingMovies = movies.filter(
    (movie) => movie.category === "Trending"
  );
  const latestMovies = movies.filter((movie) => movie.category === "Latest");

  return (
    <>
      <CarousalMovies />

      <div className="flex justify-center flex-col items-center px-4 sm:px-10 lg:px-32">
        {/* Trending Movies */}
        <Shortheading name="Trending Movies" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
          {trendingMovies.slice(0, 5).map((movie, index) => (
            <Link key={movie.slug} to={`/movies/${movie.slug}`}>
              <ShortCard
                key={index}
                Image={movie.img}
                title={movie.title}
                className="w-40 sm:w-48 md:w-52 lg:w-56"
              />
            </Link>
          ))}
        </div>

        {/* Latest Movies */}
        <Shortheading name="Latest Movies" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
          {latestMovies.slice(0, 5).map((movie, index) => (
            <Link key={movie.slug} to={`/movies/${movie.slug}`}>
              <ShortCard
                key={index}
                Image={movie.img}
                title={movie.title}
                className="w-40 sm:w-48 md:w-52 lg:w-56"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
