import React from 'react';
// YOU ARE IN CAROUSEL
import CarouselImage from '../CarouselImage/CarouselImage.js';

const Carousel = (props) => {
  console.log('carousel props: ', props)

  if(props.length == 0) {
    return null;
  } else {
    const images = props.images.map((image) => {
      return (
        <CarouselImage
          key={image.id}
          title={image.title}
          photo={image.display_sizes[0].uri}
          caption={image.caption}
        />
      )
  });


    return (
      <div className="carousel-container">
        {images}
      </div>
    )
  } //closes else


} //closes Carousel





export default Carousel;
