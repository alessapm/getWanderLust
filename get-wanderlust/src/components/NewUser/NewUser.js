import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';
import Logo from '../../styles/get-wanderflust-white-01.svg';
// import Axios from 'axios';

import Nav from '../Nav/Nav';

export default class NewUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    }
  }


  handleChange(event){
    let newState = update(this.state, {
      user: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  } //close handleChange

  handleSubmit(event){
    event.preventDefault();

    fetch("https://get-wanderlust.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      console.log("new user created");
      browserHistory.push("/login");
    })
    .catch((err) => {
      console.log(err);
    })
  } //closes handleSubmit


  render() {
    return(
      <div className='container'>
        <Nav /><br />

        <form className="user-form" onSubmit={this.handleSubmit.bind(this)}>
          <h1 className="user-h1">Welcome to <br />
          <img src={ Logo } /></h1><br />
          <div className="form-content">
            <label>First Name: </label><br/>
            <input name="first_name"
              onChange={this.handleChange.bind(this)}
              type='text'
              placeholder="Enter First Name" />
              <br /><br />

              <label>Last Name: </label><br/>
              <input name="last_name"
              onChange={this.handleChange.bind(this)}
              type='text'
              placeholder="Enter Last Name" />
              <br /><br />

              <label>Email Address: </label><br/>
              <input name="email"
              onChange={this.handleChange.bind(this)}
              type='text'
              placeholder="Enter Email" />
              <br /><br />

              <label>Password: </label><br/>
              <input name="password"
              onChange={this.handleChange.bind(this)}
              type='password'
              placeholder="Enter password" />
              <br /><br />
            </div>
            <button type="submit" className="sign-btn">Submit</button>

          </form>
      </div>
    )
  } //closes render


} //closes class NewUser
