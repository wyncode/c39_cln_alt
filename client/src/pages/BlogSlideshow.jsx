import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../images/bs_1.jpg';
import '../images/blog_slide_1.svg';

const BlogSlideshow = () => {
  const images = [{ src: '../images/bs_1.jpg' }, '../images/blog_slide_1.svg'];
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: '100%' }}>
            <img style={{ objectFit: 'cover', width: '100%' }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default BlogSlideshow;
