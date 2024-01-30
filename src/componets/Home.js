// HomePage.js

import React from 'react';
import ImageSlider from '../componets/Imageslider';
import Gallery from '../componets/Gallery';
import UserReview from '../componets/Review';
import Reels from '../componets/Reels';
import '../componets/Home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Home Page</h1>
      <ImageSlider />
      <h2>Image Gallery</h2>
      <Gallery />
      <br></br>
      <br></br>
      <Gallery />
      <br></br>
      <br></br>
      <Gallery />
      <div>
      <h1>RacePie User Reviews</h1>
      <UserReview name="John Doe" rating={4} comment="Great experience! Loved the race." />
      <UserReview name="Jane Smith" rating={5} comment="Fast and thrilling. Will participate again!" />
      <UserReview name="John Doe" rating={4} comment="Great experience! Loved the race." />
      <UserReview name="Jane Smith" rating={5} comment="Fast and thrilling. Will participate again!" />
      {/* Add more UserReview components as needed */}
    </div>
    <Reels />
    </div>
  );
};

export default Home;
