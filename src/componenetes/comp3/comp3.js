import './comp3.css'
import React, { useState, useEffect } from 'react';

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

  return (
    <div className='contenedor'>
      <img src={plantImage} alt="Random Plant" />
    </div>
  );
}

export default PlantImages;

