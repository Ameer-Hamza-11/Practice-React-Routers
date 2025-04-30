import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-extrabold mb-2 text-indigo-600 dark:text-indigo-400">
          🎥 About MovieSphere
        </h1>
        <hr className="border-t-2 border-indigo-400 w-24 mb-6" />

        <p className="text-lg mb-4">
          Welcome to <span className="font-bold text-indigo-600 dark:text-indigo-300">MovieSphere</span> — your ultimate destination for exploring movies from around the world! 🌍
        </p>

        <p className="mb-4">
          Whether you're a casual viewer or a die-hard film buff, MovieSphere brings you everything from Hollywood hits to international indie gems.
        </p>

        <p className="mb-4">
          Discover detailed movie info: posters, plots, directors, awards, ratings, and more. 🎬 All wrapped in a smooth, responsive UI designed for cinematic lovers like you.
        </p>

        <p className="mb-4">
          Built with <span className="font-semibold">React</span> and powered by the <span className="font-semibold">OMDb API</span>, MovieSphere is fast, scalable, and constantly evolving.
        </p>

        <div className="mt-6 text-sm italic text-gray-500 dark:text-gray-400">
          Made with ❤️ by <strong>Ameer Hamza</strong> — Keep watching. Keep dreaming.
        </div>
      </div>
    </div>
  );
};
