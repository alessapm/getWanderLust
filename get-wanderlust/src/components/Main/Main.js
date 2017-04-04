import React, { Component } from 'react';
import Axios from 'axios';


import CityPhotos from '../CityPhotos/CityPhotos';
import CityAttractions from '../CityAttractions/CityAttractions';
import Nav from '../Nav/Nav';
import Carousel from '../Carousel/Carousel';
import Logo from '../../styles/get-wanderflust-white-01.svg';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      images: [],
      attractions: [],
      reveal: false,
      modal: false
    }
  }

  //add something to the user's explore list
  addToExplore(){

    Axios.post(`https://get-wanderlust.herokuapp.com/explore/list/${window.localStorage.user_id}`, {
        city: {
          name: this.state.city,
          priority: 3
        },
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  //display "Showing images for..."
  showing(){

    if (this.state.reveal && this.state.city !== '' && localStorage.token){
      return(
        <div className="showing">
          <p>Showing results for: "{this.state.city}"</p>
          <button onClick={this.addToExplore.bind(this)}>+Explore</button>
        </div>
      )
    } else if (this.state.reveal && this.state.city !== '') {
      return(
        <div className="showing">
          <p>Showing images for: "{this.state.city}"</p>
        </div>
      )
    }
  } //closes showing


  setModal(){
     const set = () => {
      this.setState({modal: true});
    }

    set();
  }

  unsetModal(){
    const unset = () => {
      this.setState({modal: false});
    }

    unset();
  }

  //request to GettyImages API route
  findImages() {

    Axios.get(`https://get-wanderlust.herokuapp.com/explore/${this.state.city}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
        this.setState({ images: data.data, reveal: true})
    })
    .catch((err) => console.log('findImages err: ', err));
  } //closes findImages

  //request to Yelp API route
  findAttractions() {
    Axios.get(`https://get-wanderlust.herokuapp.com/explore/attractions/${this.state.city}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      this.setState({ attractions: data.data});
    })
    .catch((err) => {
      console.log('findAttractions err: ', err);
      this.setState({
        attractions:
          [{categories: [],
            id: 5,
            rating: "",
            name: "Attractions for this city are unavailable",
            image_url: "",
            url: "" }]
      })
    });
  }//closes findAttractions


  handleChange(event){
    this.setState({
      city: event.target.value
    })
  }


  randomize(){

    const defaultCities = ["New York", "Paris", "Prague", "Vienna", "Kyoto", "Miami", "Barcelona", "Copenhagen", "Dublin", "San Francisco", "Havana", "Petra", "Munich", "Madrid", "Denver", "Johannesburg", "Melbourne", "Sydney", "Hong Kong", "Mexico City", "Kingston", "Istanbul", "Oslo", "Warsaw", "Moscow", "Berlin", "Quebec", "Phoenix", "London", "Vancouver", "Barcelona", "Paris", "Berlin", "Prague", "Istanbul", "Kyoto","Sydney", "Petra", "Venice", "Chamonix", "Buenos Aires", "Nashville", "Manila", "Kuala Lumpur", "Taipei", "Manila", "Nashville", "London" ]

    let value = Math.floor(Math.random() * (defaultCities.length-1))

    let pickRandom = () => {
      this.setState({city: defaultCities[value]}, () => {
        this.findImages();
        this.findAttractions();
      })
    }

    pickRandom()
  } //closes randomize

  triggerSearch(){
    this.findImages();
    this.findAttractions();
  }

  render() {

   return(
     <div>
      <Nav />
      <div className="welcome">
          <img src={ Logo } />
      </div>
      <div className="search-area">

        <label>It's a big world, where do you want to go?</label><br />
        <div className="flex">
          <p> Enter a city name like 'Paris' or 'Tokyo', or press this button &#8594;</p>
          <p id='randomize' onClick={this.randomize.bind(this)}>R</p>
        </div>
        <input name="city"
          type="text"
          onChange={this.handleChange.bind(this)}
          placeholder="enter a city to explore"
        /><br />
        <button type="submit" className="find-images"
          onClick={this.triggerSearch.bind(this)}>
          Search
        </button>

      </div>
      <div className="wrapper">
        <div className="imagesAndAttractions">
          <div className="getImages" >
            {this.showing()}
            <CityPhotos
              images={this.state.images}
              setModal={this.setModal.bind(this)}
            />

          </div>
          <div className="getAttractions">
            <CityAttractions
              attractions={this.state.attractions}
             />
          </div>

        </div>
        <div className="getCarousel">
          { this.state.modal ?
            <Carousel
            images={this.state.images}
            unsetModal={this.unsetModal.bind(this)}
             />

          : null }
        </div>
      </div>
    </div>

    )
  } //closes render

} //closes class Main
