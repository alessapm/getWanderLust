import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

import Nav from '../Nav/Nav';

export default class Login extends Component {
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
  } //closes handleChange

  handleSubmit(event){
    event.preventDefault();

    fetch('https://get-wanderlust.herokuapp.com/users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data) => {

      data.json()
      .then(object => {
        console.log('****', object);

        window.localStorage.setItem('token', object.token);
        window.localStorage.setItem('firstname', object.firstname);
        window.localStorage.setItem('lastname', object.lastname);
        window.localStorage.setItem('user_id', object.user_id);



        browserHistory.push('/dashboard') //need id with this?

      })
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
          <h1 className="user-h1 drop">Welcome Back</h1>
          <div className="form-content">
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
            placeholder="Enter Password" />
            <br /><br />
          </div>
          <button type="submit" className="find-images">Submit</button>

        </form>
        <p>{this.state.error}</p>
      </div>
    )
  }

} //closes class Login
