import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default class NavLinks extends Component {
  constructor(){
    super();

    this.state = {
      isloggedin: false
    }
  }

  componentWillMount(){
    let isloggedin = localStorage.getItem('token') ? true : false;
    this.setState({isloggedin: isloggedin});
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('user_id');
    browserHistory.push('/');
  }

  render(){
    if (this.state.isloggedin){
      return (
        <div className="nav-links">
          <Link to="/"><img className="logo" src="../../styles/get-wanderflust-white-01.svg" /></Link>
          <Link to="/dashboard">Explore List</Link>
          <p onClick={this.logout.bind(this)}>Logout</p>
        </div>
      )
    } else {
      return (
        <div className="nav-links">
          <Link to="/"><img className="logo" src="../../styles/get-wanderflust-white-01.svg" /></Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )
    }
  } //closes render

} //closes NavLinks


