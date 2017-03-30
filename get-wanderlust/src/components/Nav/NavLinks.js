import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class NavLinks extends Component {
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
        <div>
          <Link to="/dashboard">My Explore List</Link>
          <p onClick={this.logout.bind(this)}>Logout</p>
        </div>
      )
    } else {

    }
  } //closes render

} //closes NavLinks
