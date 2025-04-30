import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-indigo-400 drop-shadow-md">
          🎬 MovieSphere
        </h1>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl text-blue-600 dark:text-indigo-400"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-medium text-gray-700 dark:text-gray-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <nav className="px-6 pb-4 flex flex-col space-y-4 lg:hidden font-medium text-gray-700 dark:text-gray-200">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/movies"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `transition hover:text-blue-600 dark:hover:text-indigo-400 ${
                isActive ? "text-blue-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};
