import React, { useState, useEffect } from 'react';
import variante1 from '../../assets/img_avatar/variante1.png';
import variante2 from '../../assets/img_avatar/variante2.png';
import variante3 from '../../assets/img_avatar/variante3.png';
import variante4 from '../../assets/img_avatar/pc_product.png';

const ImageComponent = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [shownImages, setShownImages] = useState([]);
  const images = [
    variante1,
    variante2,
    variante3,
    variante4
    // Agrega aquí más nombres de imágenes según sea necesario
  ];

  useEffect(() => {
    // Lógica para cambiar la imagen al refrescar la página sin repetir
    const availableImages = images.filter(image => !shownImages.includes(image));
    
    if (availableImages.length === 0) {
      // Si ya se han mostrado todas las imágenes, reinicia el historial
      setShownImages([]);
    } else {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const newImage = availableImages[randomIndex];
      
      setImageIndex(newImage);
      setShownImages([...shownImages, newImage]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <img 
        src={imageIndex}
        alt={`Imagen ${imageIndex + 1}`}
        style={{ maxWidth: '80%' }}
      />
    </div>
  );
};

export default ImageComponent;