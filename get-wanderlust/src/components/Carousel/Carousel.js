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

  next(){
    this.setState({
      index: this.state.index + 1
    })
  }

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
          />
          )
      });
    }

    console.log('******IMAGES: ', images)

    return (
      <div className='carousel-wrapper'>
        <button>prev</button>
          {images[this.state.index]}
        <button onClick={this.next.bind(this)}>next</button>
      </div>
    )

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   arrows: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };

    // return (
    //   <div className='contains-slider'>
    //     <Slider {...settings}>
    //       <div><h3>1</h3></div>
    //       <div><h3>2</h3></div>
    //       <div><h3>3</h3></div>
    //       <div><h3>4</h3></div>
    //       <div><h3>5</h3></div>
    //       <div><h3>6</h3></div>
    //     </Slider>
    //   </div>
    //   )


  }


} //closes Carousel

// ReactDOM.render(
//   <Carousel />,
//   document.getElementById('contains-slider')
// );

export default Carousel;
