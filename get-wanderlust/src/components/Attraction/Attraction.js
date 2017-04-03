import React from 'react';
import { Link } from 'react-router';

const Attraction = (props) => {

  return (
    <div className='attraction'>
      <div className='att-details'>
        <h3>{props.name}</h3>
        <p>rating: {props.rating} &#9733;<br />
        category: {props.category}
        </p>
        <a href={props.yelp_url} target="_blank">view on Yelp.com</a>
      </div>

      <img src={props.photo} alt={props.name} />
    </div>
  )
}


export default Attraction;
