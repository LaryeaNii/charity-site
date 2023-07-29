import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Donate from './Donate';
import Contact from './Contact';
import About from './About';
import Team from './Team';
import FAQ from './FAQ';
import Footer from './Footer';
import charityData from './CharityData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home charityData={charityData} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
