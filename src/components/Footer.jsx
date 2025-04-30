import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-400">🎬 MovieSphere</h2>

        <p className="text-sm text-gray-400">
          Your ultimate source for movies. Stay updated. Stay entertained.
        </p>

        <div className="flex justify-center space-x-6 text-xl">
          <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaGithub /></a>
        </div>

        <div className="space-x-6 text-sm mt-4">
          <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-400 transition">Terms of Use</a>
          <a href="#" className="hover:text-indigo-400 transition">Contact</a>
        </div>

        <p className="text-xs text-gray-500 pt-4 border-t border-gray-700">
          &copy; {new Date().getFullYear()} MovieSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
