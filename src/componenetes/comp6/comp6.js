import React, { useState, useEffect } from 'react';

function Main() {
  const [plants, setPlants] = useState([
    { id: 1, name: 'Tubulus', feature: 'regado mensual', price: 80, units: 0 },
    { id: 2, name: 'Niorum', feature: 'regado semanal', price: 10, units: 0 },
    { id: 3, name: 'Florus', feature: 'regado semanal', price: 35, units: 0 },
    { id: 4, name: 'Blancus', feature: 'regado semanal', price: 25, units: 0 },
    { id: 5, name: 'Puntus', feature: 'regado semanal', price: 40, units: 0 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, units: plant.units + 1 } : plant
      )
    );
  };

  const handleDecrement = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId && plant.units > 0
          ? { ...plant, units: plant.units - 1 }
          : plant
      )
    );
  };

  // Recalculate total price whenever units change
  useEffect(() => {
    const newTotalPrice = plants.reduce(
      (total, plant) => total + plant.price * plant.units,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [plants]);

  return (
    <div className="image-grid">
      {plants.map((plant) => (
        <div className="image-item" key={plant.id}>
          <img src={`${plant.id}.jpg`} alt={`Imagen ${plant.id}`} />
          <h3>{plant.name}</h3>
          <p className="feature">{plant.feature}</p>
          <p>${plant.price}</p>
          <div>
            <button onClick={() => handleDecrement(plant.id)}>-</button>
            <span>{plant.units}</span>
            <button onClick={() => handleIncrement(plant.id)}>+</button>
          </div>
        </div>
      ))}
        <TotalPriceDisplay plants={plants} />
    </div>
  );
}
function TotalPriceDisplay({ plants }) {
    const totalPrice = plants.reduce(
      (total, plant) => total + plant.price * plant.units,
      0
    );
  
    return <div className="total-price">Total Price: ${totalPrice}</div>;
  }

export default Main;