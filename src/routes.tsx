import Fab from "./components/Fab";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar_2";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Fab />
        <Footer />
      </Router>
    </main>
  );
}
