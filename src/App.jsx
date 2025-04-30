import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './Pages/AppLayout'
import { ErrorPage } from './Pages/ErrorPage'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Movies } from './Pages/Movies'
import { Contact, contactData } from './Pages/Contact'
import { getMovieData } from './Api/GetMovieData'
import { MoviesDetails } from './Pages/MovieDetails'
import { getMovieDetails } from './Api/GetMovieDetails'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },

        {
          path: '/movies',
          element: <Movies />,
          loader: getMovieData,

        },
        {
          path: '/movies/:movieID',
          element: <MoviesDetails />,
          loader: getMovieDetails,

        },

        {
          path: '/contact',
          element: <Contact />,
          action: contactData,

        },

      ]
    }
  ])


  return <RouterProvider router={router}/>
}

export default App
