import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center p-4">
        {/* Hamburger Button (LEFT) */}
        <button
          className="md:hidden text-2xl mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="hover:text-sky-400 transition" to="/">
            Home
          </Link>
          {/* <Link className="hover:text-sky-400 transition" to="/about">
            About
          </Link> */}
          <Link className="hover:text-sky-400 transition" to="/projects">
            Projects
          </Link>
          <Link className="hover:text-sky-400 transition" to="/skills">
            Skills
          </Link>
          <Link className="hover:text-sky-400 transition" to="/journey">
            Journey
          </Link>
          <Link className="hover:text-sky-400 transition" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-sky-400 transition" to="/admin">
            Admin
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 pl-6 pb-4">
          <Link onClick={() => setIsOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/projects">
            Projects
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/skills">
            Skills
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/journey">
            Journey
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">
            Contact
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/admin">
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
