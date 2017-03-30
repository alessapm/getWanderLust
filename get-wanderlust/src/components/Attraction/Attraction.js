import React from 'react';
import { Link } from 'react-router';

const Attraction = (props) => {
  return (
    <div className='attraction'>
      <div className='att-details'>
        <h3>{props.name}</h3>
        <p>{props.rating}<br />
        {props.category}
        </p>
        <Link to={props.yelp_url}>details</Link>

      </div>
      <img src={props.photo} alt={props.name} />
    </div>
  )
}


export default Attraction;
