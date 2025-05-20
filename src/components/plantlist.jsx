import React, { useEffect, useState } from 'react';
import Plantcard from './plantcard';
import './plantcard.css';

function PlantList() {
  const [plants, setPlants] = useState([]);

useEffect(() => {
    fetch('https://herbsphere-backend.onrender.com/plant/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlants(data);
      })
      .catch((err) => console.error('Error fetching data:', err));
}, []);

  return (
    <div className="plant-list">
      {plants.map((plant, index) => (
        <Plantcard key={index} plant={plant} />
      ))}
    </div>
  );
}

export default PlantList;
