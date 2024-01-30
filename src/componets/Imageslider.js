// ImageSlider.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../componets/imgslider.css';
import image1 from '../projectimages/OIP.jpg';
import image2 from '../projectimages/OIP1.jpg';
import image3 from '../projectimages/OIP2.jpg';

const ImageSlider = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} autoPlay={true}>
      <div>
        <img src={image1} alt="Slide 1" />
      </div>
      <div>
        <img src={image2} alt="Slide 2" />
      </div>
      <div>
        <img src={image3} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
