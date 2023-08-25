import './comp3.css' //Se importa el CSS de la misma carpeta
import React, { useState, useEffect } from 'react';


//Este componente se encarga de llamar la API y mostrar la informacion de una imagen recibida
//Usa un comando fetch para obtener la imagen de la API y usa una clave de autorizacion
//la imagen se guarda en la variable plantImagel
function PlantImages() {
  const [plantImage, setPlantImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?query=plant', {
      headers: {
        Authorization: 'Client-ID LO2zzHrurRQVwpJMWYF2a1ipa6noWMqcV40SPCb4GG0',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPlantImage(data.urls.regular);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //Aqui empiza la informacion que se muestra en la pagina
  //es una simple foto random que se obtiene de la API
  return (
    <div className='contenedor'>
        <h3>¡Gracias por visitarnos!</h3>
      <img src={plantImage} alt="Random Plant" />
    </div>
  );
}

export default PlantImages;

