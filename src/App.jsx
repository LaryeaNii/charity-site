import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Donate from './Donate';
import Contact from './Contact';
import About from './About';
import Team from './Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
