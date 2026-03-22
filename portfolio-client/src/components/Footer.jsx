import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Branding */}
        <h2 className="text-sky-400 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
          &gt; kanimozhi.org
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          Building scalable, user-focused web applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="text-2xl hover:text-sky-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            className="text-2xl hover:text-sky-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* <a
            href="mailto:your@email.com"
            className="text-2xl hover:text-sky-400 transition transform hover:scale-110"
          >
            <HiOutlineMail />
          </a> */}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} Kanimozhi Nagarajan. All rights reserved.
        </div>
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 text-sm text-sky-400 hover:underline"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
