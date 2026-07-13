import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="animated-gradient flex items-center justify-between px-8 py-4 bg-white">
      <NavLink to="/" className="font-heading text-cc-text text-lg font-bold">
        Candymations <span className="text-cc-pink">.</span>
      </NavLink>

      <div className="flex gap-6 font-body text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-cc-pink font-semibold" : "text-cc-text"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            `${isActive ? "text-cc-pink font-semibold" : "text-cc-text"}`
          }
        >
          Library
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
