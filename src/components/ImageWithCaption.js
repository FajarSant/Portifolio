import React from 'react';
import '../Style/Skill.css';

const ImageWithCaption = ({ imageSrc, caption }) => {
  return (
    <div className="image-with-caption">
      <img src={imageSrc} alt={caption} className="image" />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default ImageWithCaption;
