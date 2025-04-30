import { NavLink } from "react-router-dom";

export const Card = ({ movie }) => {
  const { Poster, Title, imdbID } = movie;

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 max-w-xs border dark:border-gray-600">
      <img
        src={Poster}
        alt={Title}
        className="w-full h-72 object-cover rounded-t-2xl"
      />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
          {Title}
        </h2>
        <NavLink
          to={`/movies/${imdbID}`}
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
        >
          🎬 Explore More
        </NavLink>
      </div>
    </div>
  );
};
