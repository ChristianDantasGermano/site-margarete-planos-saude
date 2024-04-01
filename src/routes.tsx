import { useState } from "react";
import Fab from "./components/Fab";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <main className={isMobileMenuOpen ? "overflow-hidden" : ""}>
      <Router>
        <Navbar
          navbarIsOpen={isMobileMenuOpen}
          setNavbarOpen={setIsMobileMenuOpen}
        />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Fab />
        <Footer />
      </Router>
    </main>
  );
}
