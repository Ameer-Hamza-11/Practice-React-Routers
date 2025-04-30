import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🎬 Welcome to MovieSphere</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Dive into the world of cinema — explore latest movies, classics, and hidden gems.
        </p>
        <Link
          to="/movies"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Explore Movies
        </Link>
      </div>
    </div>
  );
};
