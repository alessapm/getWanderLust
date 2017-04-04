import React, { Component } from 'react';
import Photo from '../Photo/Photo.js';

class CityPhotos extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const images = this.props.images.map((image) => {
      return (
        <Photo
          key={image.id}
          title={image.title}
          photo={image.display_sizes[0].uri}
          caption={image.caption}
          setModal={this.props.setModal}
        />
      )
    });

    return (
      <div className="cityphotos-container">
        {images}
      </div>
    )
  }
}


export default CityPhotos;
