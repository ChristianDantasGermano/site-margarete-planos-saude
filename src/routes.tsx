import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route path='prato/:id' element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}