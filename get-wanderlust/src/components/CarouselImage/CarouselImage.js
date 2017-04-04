import React, { Component } from 'react';

class CarouselImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      substring: ''
    }


  }

  componentDidMount(){
    let urlString = this.props.photo
    let indexNeeded = urlString.indexOf('?');
    let newString = urlString.substring(0,indexNeeded);

    this.setState({substring: newString})
  }



 render() {

  return (

    <div className='caro-modal' onClick={this.props.unsetModal}>
      <h2>{this.props.title}</h2>
      <img src={this.state.substring} />
      <h3>{this.props.caption}</h3>
    </div>
  )

 }



} //closes CarouselImage


export default CarouselImage;

