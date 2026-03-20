import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // If NOT on home page
    if (location.pathname !== "/") {
      navigate("/");

      // wait for page to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white">
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
          <button
            className="hover:text-sky-400 transition"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="hover:text-sky-400 transition"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="hover:text-sky-400 transition"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="hover:text-sky-400 transition"
            onClick={() => scrollToSection("journey")}
          >
            Journey
          </button>
          <button
            className="hover:text-sky-400 transition"
            onClick={() => scrollToSection("contact")}
          >
            Message Me
          </button>
          <Link className="hover:text-sky-400 transition" to="/admin">
            Admin
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 pl-6 pb-4 bg-slate-900 w-full mt-2">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("journey")}>Journey</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <Link onClick={() => setIsOpen(false)} to="/admin">
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
