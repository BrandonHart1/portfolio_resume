import React from 'react';
import backgroundVideo from '../assets/programming.mp4';

const HomePage = () => {
  return (
    <div className='main'>
      <video src={backgroundVideo} autoPlay fadeOut muted />
    </div>
  );
};

export default HomePage;
