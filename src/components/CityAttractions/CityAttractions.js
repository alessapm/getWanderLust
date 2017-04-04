import React from 'react';
import Attraction from '../Attraction/Attraction.js';

const CityAttractions = (props) => {
  const attractions = props.attractions.map((att) => {
    if (att.categories[0]){
      return (
        <Attraction
          key={att.id}
          name={att.name}
          rating={att.rating}
          category={att.categories[0].title}
          photo={att.image_url}
          yelp_url={att.url}
        />
      )
    } else {
      return (
        <Attraction
          key={att.id}
          name={att.name}
          rating={att.rating}
          category="unavailable"
          photo={att.image_url}
          yelp_url={att.url}
        />
      )
    }
  });


  return (
    <div className="cityattractions-container">
      {attractions}
    </div>
  )
}


export default CityAttractions;
