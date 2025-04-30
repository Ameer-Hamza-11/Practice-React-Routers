import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card } from '../components/UI/Card';

export const Movies = () => {
  const movieData = useLoaderData();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 justify-center">
      {
        movieData?.Search?.map((currMovies) => (
          <Card key={currMovies.imdbID} movie={currMovies} />
        ))
      }
    </ul>
  );
};
