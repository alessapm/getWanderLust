import React, { Component } from 'react';

class Photo extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='photo'>
        <img src={this.props.photo}
         alt={this.props.title}
         onClick={this.props.setModal} />

      </div>
    )
  }

} //closes Photo


export default Photo;

