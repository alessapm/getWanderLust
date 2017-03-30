import React from 'react';
import Photo from '../Photo/Photo.js';

const CityPhotos = (props) => {
  const images = props.images.map((image) => {
    return (
      <Photo
        key={image.id}
        title={image.title}
        photo={image.display_sizes[0].uri}
        caption={image.caption}
      />
    )
  });


  return (
    <div className="cityphotos-container">
      {images}
    </div>
  )
}


export default CityPhotos;
