// ReelsFeed.js

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Reels.css';

const ReelsFeed = () => {
  const [videos, setVideos] = useState([]);
  const [hasMore] = useState(true);

  useEffect(() => {
    // Fetch initial set of videos or load them from an API
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    // Simulate fetching videos from an API
    // You can replace this with an actual API call
    const newVideos = [
      // Replace with your video objects
      { id: 1, url: 'https://www.youtube.com/shorts/c1ae1R8ueZg', title: 'Video 1', user: 'User A' },
      { id: 2, url: 'https://www.youtube.com/shorts/SEFqjpkvnBc', title: 'Video 2', user: 'User B' },
      // Add more video objects
    ];

    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  };

  const loadMoreVideos = () => {
    // Fetch more videos when the user scrolls to the bottom
    fetchVideos();
  };

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={loadMoreVideos}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {videos.map((video) => (
        <div key={video.id} className="reels-feed">
          <div className="reels-video">
            <ReactPlayer
              url={video.url}
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="reels-description">
            <p>{video.title}</p>
            <p>Uploaded by {video.user}</p>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default ReelsFeed;
