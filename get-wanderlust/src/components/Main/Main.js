import React, { Component } from 'react';
// import update from 'react-addons-update';

export default class Main extends Component {
  constructor(props) {
    super(props);

    //this is where state will go
  }


  findImages() {
    fetch(`http://localhost:8000/explore/paris`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json()
      .then((data) => {
        console.log('data: ', data)
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
        console.log('data: ', data)
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
    </div>

    )
  } //closes render




} //closes class Main
