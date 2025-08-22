import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShortCard from "./ShortCard";
import { movies } from "./Data/MoviesData";

const Moviespage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full my-10">
        <input
          type="text"
          placeholder="Enter Movie Name"
          className="p-3 w-full sm:w-1/2 rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="p-3 w-full sm:w-auto rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
          onClick={() => {}}
        >
          Search
        </button>
      </div>

      {/* Movie Grid */}
      <div className="flex justify-center flex-col items-center sm:px-10 lg:px-32">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
          {(searchTerm ? filteredMovies : movies).map((movie) => (
            <Link key={movie.slug} to={`/movies/${movie.slug}`}>
              <ShortCard Image={movie.img} title={movie.title} />
            </Link>
          ))}
        </div>

        {/* Show message if no results */}
        {searchTerm && filteredMovies.length === 0 && (
          <p className="text-white text-center mt-10">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Moviespage;
