import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <div className="space-x-6">
          <Link className="hover:text-sky-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-sky-400 transition" to="/about">
            {" "}
            About
          </Link>
          <Link className="hover:text-sky-400 transition" to="/projects">
            {" "}
            Projects
          </Link>
          <Link className="hover:text-sky-400 transition" to="/skills">
            {" "}
            Skills
          </Link>
          <Link className="hover:text-sky-400 transition" to="/journey">
            {" "}
            Journey
          </Link>
          <Link className="hover:text-sky-400 transition" to="/contact">
            {" "}
            Contact
          </Link>
          <Link to="/admin" className="hover:text-sky-400 transition">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
