import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  
  const navigate = useNavigate()
  
  const handleBackBtn = () => {
    navigate(-1)
  }

  if (error && error.status === 404)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="404 Not Found"
        className="w-80 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <NavLink
      onClick={handleBackBtn}
        to="/"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back To Previous Page
      </NavLink>
      <NavLink 
        to="/"
        className="bg-blue-500 my-1.5 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </NavLink>
    </div>
  )


  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold mb-2">Unexpected Error</h1>
      <p className="text-gray-600 mb-4">{error.statusText || error.message}</p>
      <NavLink 
        to="/"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};
