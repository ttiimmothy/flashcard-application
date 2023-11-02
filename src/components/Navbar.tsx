import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-brown-700 p-4">
      <NavLink
        to="/"
        className="mx-4 text-lg font-bold text-gray-600 hover:text-gray-400"
      >
        Home
      </NavLink>
      <NavLink
        to="/flashcards"
        className="mx-4 text-lg font-bold text-gray-600 hover:text-gray-400"
      >
        My Flashcards
      </NavLink>
    </nav>
  );
};

export default Navbar;
