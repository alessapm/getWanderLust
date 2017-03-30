import React, { Component } from 'react';
import Axios from 'axios';
import update from 'react-addons-update';

import CityPhotos from '../CityPhotos/CityPhotos';
import CityAttractions from '../CityAttractions/CityAttractions';
import Nav from '../Nav/Nav';
import Carousel from '../Carousel/Carousel';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      images: [],
      attractions: [],
      reveal: false
    }
  }

  showing(){
    console.log('showing is firing', this.state.city)
    if (this.state.reveal && this.state.city !== ''){
      return(
        <p>Showing images for: "{this.state.city}"</p>
      )
    }
  }

  findImages() {
    // change to Axios()

    fetch(`http://localhost:8000/explore/${this.state.city}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json()
      .then((data) => {
        console.log('data: ', data);
        this.setState({ images: data, reveal: true})
      })
    )
    .catch((err) => console.log('findImages err: ', err));
  } //closes findImages

  findAttractions() {
    fetch(`http://localhost:8000/explore/attractions/${this.state.city}`, {
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
    .catch((err) => console.log('findAttractions err: ', err));
  }//closes findAttractions


  handleChange(event){
    this.setState({
      city: event.target.value
    })
  }


  render() {

   return(
     <div>
      <Nav /><br />
      <label>It's a big world. Where do you want to go?</label><br />
      <input name="city"
        type="text"
        onChange={this.handleChange.bind(this)}
        placeholder="enter a city to explore"
      />
      <button type="submit" onClick={this.findImages.bind(this)} >Inspire Me</button>
      <button type="submit" onClick={this.findAttractions.bind(this)} >Tell Me More</button>
      <div className="wrapper">

        <div className="getImages">
          {this.showing()}
          <CityPhotos
            images={this.state.images}
          />
        </div>
        <div className="getAttractions">
          <CityAttractions
            attractions={this.state.attractions}
           />
        </div>

        <div className="getCarousel">
          <Carousel
            images={this.state.images}
          />
        </div>

      </div>
    </div>

    )
  } //closes render

} //closes class Main
