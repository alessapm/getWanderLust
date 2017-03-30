import React from 'react';

const Photo = (props) => {
  return (
    <div className='photo'>
      <img src={props.photo} alt={props.title} />
    </div>
  )
}


export default Photo;
