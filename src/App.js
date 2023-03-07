import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Locations from './pages/Locations';
import Location from './pages/Location';
import About from './pages/About';
import Error from './pages/Error';
import FAQ from './pages/FAQ';
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';

function App() {
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/error" element={<Error />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/characters" element={<Characters />}/>
          <Route path="/character/:CharacterId" element={<Character />}/>
          
          <Route path="/locations" element={<Locations />}/>
          <Route path="/location/:LocationId" element={<Location />}/>

          <Route path="/episodes" element={<Episodes />}/>
          <Route path="/episode/:episodeId" element={<Episode/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
