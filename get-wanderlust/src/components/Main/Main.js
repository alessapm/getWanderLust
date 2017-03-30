import React, { Component } from 'react';
import Axios from 'axios';
import update from 'react-addons-update';
import CityPhotos from '../CityPhotos/CityPhotos';
import CityAttractions from '../CityAttractions/CityAttractions';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      attractions: []
    }
  }


  findImages() {
    // change to Axios()

    fetch(`http://localhost:8000/explore/paris`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json()
      .then((data) => {
        console.log('data: ', data);
        this.setState({ images: data })
      })
    )
    .catch((err) => console.log('findImages err: ', err));
  }

  findAttractions() {
    fetch(`http://localhost:8000/explore/attractions/paris`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json()
      .then((data) => {
        console.log('data: ', data);
        this.setState({ attractions: data })
      })
    )
    .catch((err) => console.log('findImages err: ', err));
  }






  render() {
   return(
     <div>
      <h1>Hello World</h1>
      <button type="submit" onClick={this.findImages.bind(this)} >Click Me</button>
      <button type="submit" onClick={this.findAttractions.bind(this)} >Fuck Yeah!</button>
      <div className="wrapper">
        <div className="getImages">

          <CityPhotos
            images={this.state.images}
          />

          <CityAttractions
            attractions={this.state.attractions}
           />

        </div>
        <div className="getAttractions"></div>
      </div>
    </div>

    )
  } //closes render




} //closes class Main
