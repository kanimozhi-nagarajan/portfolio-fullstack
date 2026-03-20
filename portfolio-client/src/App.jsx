import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* <About /> */}
                <Projects />
                <Skills />
                <Journey />
                <Contact />
              </>
            }
          />

          {/* Admin stays separate */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
