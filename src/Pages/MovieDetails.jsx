import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

export const MoviesDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);


  const totalminuts = movieData.Runtime.replace('min', '')
  const hours = Math.floor(totalminuts / 60)
  const minuts = totalminuts % 60;
  const formatedTime = `${hours}hr ${minuts}min`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/3">
          <img
            src={movieData.Poster}
            alt={movieData.Title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 p-6 space-y-4">
          <h1 className="text-3xl font-bold">{movieData.Title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">{movieData.Plot}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p><span className="font-semibold">🎬 Genre:</span> {movieData.Genre}</p>
            <p><span className="font-semibold">📅 Released:</span> {movieData.Released}</p>
            <p><span className="font-semibold">🕒 Runtime:</span> {formatedTime}</p>
            <p><span className="font-semibold">🎖️ Awards:</span> {movieData.Awards}</p>
            <p><span className="font-semibold">🌍 Country:</span> {movieData.Country}</p>
            <p><span className="font-semibold">🎯 IMDB Rating:</span> ⭐ {movieData.imdbRating}</p>
            <p><span className="font-semibold">🎞️ Year:</span> {movieData.Year}</p>
            <p><span className="font-semibold">🎬 Director:</span> {movieData.Director}</p>
          </div>

          <NavLink
            to="/movies"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
          >
            ← Back to Movies
          </NavLink>
        </div>
      </div>
    </div>
  );
};
