import React, { Component } from 'react';
import NavLinks from './NavLinks';



export default class Nav extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <nav>

        <NavLinks />
      </nav>
    )
  }


}
