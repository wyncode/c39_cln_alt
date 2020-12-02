import React from 'react';
import { Zoom } from 'react-slideshow-image';
import image from '../images/bs_1.jpg';
import anotherImage from '../images/beeNatural.jpg';

const BlogSlideshow = () => {
  const images = [image, anotherImage];
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="images1"
            style={{ width: '100%', height: '100%' }}
          >
            <img style={{ objectFit: 'cover', width: '50%' }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default BlogSlideshow;
