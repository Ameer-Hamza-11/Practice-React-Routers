import { NavLink } from "react-router-dom";

export const Header = () => {


  return (
    <header className="w-full shadow-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-indigo-400 drop-shadow-md">
          🎬 MovieSphere
        </h1>

        <nav className="space-x-6 font-medium text-gray-700 dark:text-gray-200">
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

        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-3 py-1.5 rounded-full transition text-sm"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button> */}
      </div>
    </header>
  );
};
