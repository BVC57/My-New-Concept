// UserReview.js

import React from 'react';
import '../componets/Review.css';

const UserReview = ({ name, rating, comment }) => {
  return (
    <div className="user-review">
      <div className="user-info">
        <div className="user-avatar">A</div>
        <div className="user-details">
          <p className="user-name">{name}</p>
          <p className="user-rating">Rating: {rating}/5</p>
        </div>
      </div>
      <p className="user-comment">{comment}</p>
    </div>
  );
};

export default UserReview;
