import React, { Component } from 'react';
import NavLinks from './NavLinks';

import { browserHistory } from 'react-router';
import { Link } from 'react-router';


export default class Nav extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className='nav-wrapper'>
        <Link to='/'>getWANDERLUST</Link>
        <NavLinks />
      </div>
    )
  }


}
