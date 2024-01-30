// Gallery.js

import React from 'react';
import "../componets/gallery.css";
import image1 from '../projectimages/OIP.jpg';
import image2 from '../projectimages/OIP1.jpg';
import image3 from '../projectimages/OIP2.jpg';


const Gallery = () => {
  return (
    <div className="gallery">
      <img src={image1} alt="Gallery 1" />
      <img src={image2} alt="Gallery 2" />
      <img src={image3} alt="Gallery 3" />
    </div>
  );
};

export default Gallery;
