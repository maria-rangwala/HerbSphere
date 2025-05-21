import React, { useEffect, useState } from 'react';
import './search.css';
import { Search } from 'lucide-react'; 
import axios from 'axios'; 

function SearchPlants() {
  const [plantNames, setPlantNames] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('https://herbsphere-backend.onrender.com/plant/names')
      .then((res) => setPlantNames(res.data))
      .catch((err) => console.error('Failed to fetch plant names:', err));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const filtered = plantNames.filter(name =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredNames(filtered);
  };

  const selectPlant = (name) => {
    fetch(`https://herbsphere-backend.onrender.com/plant/description?plantName=${encodeURIComponent(name)}`)
      .then(res => res.json())
      .then(data => {
        setSelectedPlant(data);
        setShowModal(true);
        setFilteredNames([]);
        setSearchInput('');
      });
  };

  return (
    <div className="search-section">
    <div className="search-wrapper">
      <div className="search-bar-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search for a medicinal plant..."
          className="search-bar"
        />
      </div>

      {filteredNames.length > 0 && (
        <ul className="dropdown-list">
          {filteredNames.map((name, index) => (
            <li key={index} onMouseDown={() => selectPlant(name)}>{name}</li>
          ))}
        </ul>
      )}
    </div>
    
      {showModal && selectedPlant && (
        <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="overlay-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPlant.imageUrl} alt={selectedPlant.plantName} />
            <h2>{selectedPlant.plantName}</h2>
            <p><strong>Part Used:</strong> {selectedPlant.partUsed}</p>
            <p style={{'textAlign':'justify'}}><strong>Medicinal Benefits:</strong> {selectedPlant.medicinalBenefits}</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPlants;
