import React from 'react';

const CarouselImage = (props) => {
      let urlString = props.photo
      let indexNeeded = urlString.indexOf('?');
      console.log(indexNeeded);
      let newString = urlString.substring(0,indexNeeded);


 return (
        <div className='modal'>
          <h2>{props.title}</h2>
          <img src={newString} />
          <h3>{props.caption}</h3>
        </div>
      )


} //closes CarouselImage








export default CarouselImage;

