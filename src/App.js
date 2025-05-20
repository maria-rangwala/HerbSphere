import './App.css';
import Plantlist from './components/plantlist';
import Landingpg from './components/landingpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './components/about';
import TeamSection from './components/team';
import SearchPlant from './components/search';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpg />} />
          <Route path="/plants" element={<Plantlist />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/search" element={<SearchPlant/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
