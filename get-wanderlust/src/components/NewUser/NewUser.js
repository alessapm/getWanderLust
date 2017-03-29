import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

//import Nav

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
  }; //close handleChange

  handleSubmit(event){
    event.preventDefault();

    fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data) => {
      console.log('new user created');
      browserHistory.push('/login');
    })
    .catch((err) => {
      console.log(err);
    })
  }; //closes handleSubmit


  render() {
    return(
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="first_name"
            onChange={this.handleChange.bind(this)}
            type='text'
            placeholder="Enter First Name" />
            <br /><br />

            <input name="last_name"
            onChange={this.handleChange.bind(this)}
            type='text'
            placeholder="Enter Last Name" />
            <br /><br />

          <input name='email'
            onChange={this.handleChange.bind(this)}
            type='text'
            placeholder='Enter Email' />
            <br /><br />

            <input name='password'
            onChange={this.handleChange.bind(this)}
            type='password'
            placeholder='Enter password' />
            <br /><br />

            <button type="submit">Submit</button>
          </form>
      </div>
    )
  } //closes render


} //closes class NewUser
