import './comp6.css'; //Se importa el CSS de la misma carpeta
import React, { useState, useEffect } from 'react';

//Este es el componente que muestra cada uno de los elementos de cactus
//los cuales estan compuestos de un nombre, una imagen, una descripcion y un precio
//tambien tienen botones de incremento y decremento de unidades a comprar

function Main() {
  //Se crea primero una variable que contiene arreglos para guardar la informacion de
  //cada elemento
  const [plants, setPlants] = useState([
    { id: 1, name: 'Tubulus', feature: 'regado mensual', price: 80, units: 0 },
    { id: 2, name: 'Niorum', feature: 'regado semanal', price: 10, units: 0 },
    { id: 3, name: 'Florus', feature: 'regado semanal', price: 35, units: 0 },
    { id: 4, name: 'Blancus', feature: 'regado semanal', price: 25, units: 0 },
    { id: 5, name: 'Puntus', feature: 'regado semanal', price: 40, units: 0 },
  ]);
  //Se crea una variable que guardara el valor del precio total
  const [totalPrice, setTotalPrice] = useState(0);

    //este metodo aumenta las unidades a comprar de una planta en especifico
  const handleIncrement = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, units: plant.units + 1 } : plant
      )
    );
  };
//este metodo decrementa las unidades a comprar de una planta en especifico
  const handleDecrement = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId && plant.units > 0
          ? { ...plant, units: plant.units - 1 }
          : plant
      )
    );
  };

  // Este metodo calcula el total del precio considerando las unidades y precios de 
  //las plantas agregadas en los metodos anteriores
  useEffect(() => {
    const newTotalPrice = plants.reduce(
      (total, plant) => total + plant.price * plant.units,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [plants]);

  //Aqui comienza lo que se mostrara en la pagina
  //se tiene un contenedor general de todos los elementos
  //y atraves de un metodo .map se recorre toda la variable plants con sus arreglos
  //y se crea cada elemento sin tener que escribirlos uno por uno
  //los botones tambien llaman las funciones de incremento y decremento al ser clickeados
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
//Este es otro componente que va dentro del componente anterior
//y su funcion solo es calcular y mostrar el precio total de los
//cactus seleccionados
function TotalPriceDisplay({ plants }) {
    const totalPrice = plants.reduce(
      (total, plant) => total + plant.price * plant.units,
      0
    );
  
    return <button className="total-price">Total Price: ${totalPrice}</button>;
  }

export default Main;