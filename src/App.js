import './App.css';
import Plantlist from './components/plantlist';
import Landingpg from './components/landingpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpg />} />
          <Route path="/plants" element={<Plantlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
