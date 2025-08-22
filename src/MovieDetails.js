
import { useParams } from "react-router-dom";
import { movies } from "./Data/MoviesData";


const MovieDetail = () => {
  const { slug } = useParams();
  const movie = movies.find((m) => m.slug === slug);


  if (!movie)
    return <p className="text-white text-center mt-10">Movie not found.</p>;

  return (
    <div className="p-5 flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      

      <img
        src={movie.img}
        alt={movie.title}
        className="w-full max-w-md rounded-lg mb-4"
      />
      <p className="mb-2">
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p className="mb-2">
        <strong>Length:</strong> {movie.movieLength}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p className="mb-4 max-w-xl text-center">{movie.description}</p>
      <button className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700 transition">
        Subscribe / Watch
      </button>
    </div>
  );
};

export default MovieDetail;
