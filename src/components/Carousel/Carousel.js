import React, { Component } from 'react';
import CarouselImage from '../CarouselImage/CarouselImage.js';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';

class Carousel extends Component {
  // console.log('carousel props: ', props)


  constructor(props) {
    super(props);

    this.state= {
      images: "",
      index: 0
    }
  }

  componentDidMount(){
    this.setState({images: this.props.images})
  }

  next(){
    if(this.state.index === this.state.images.length-1){
      this.setState({index: 0})
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }

  } //closes next

  prev(){
    console.log('this.state: ', this.state)
    if(this.state.index === 0){
      this.setState({index: this.state.images.length-1})
    } else {
      this.setState({
        index: this.state.index - 1
      })
    }

  } //closes prev

  render() {
    let images;

    if (this.props.length == 0) {
      return null;
    } else {
      images = this.props.images.map((image) => {
        return (
          <CarouselImage
          key={image.id}
          title={image.title}
          photo={image.display_sizes[0].uri}
          caption={image.caption}
          unsetModal={this.props.unsetModal}
          />
          )
      });
    }



    return (
      <div className='carousel-wrapper'>
        <button onClick={this.prev.bind(this)}>&#8617;</button>
          {images[this.state.index]}
        <button onClick={this.next.bind(this)}>&#8618;</button>
      </div>
    )


  } //closes render


} //closes Carousel



export default Carousel;
