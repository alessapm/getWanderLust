import React, { Component } from 'react';
import update from 'react-addons-update';
// import Nav from '../Nav/Nav';
import { browserHistory } from 'react-router';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    // this.state = {}
  }

  // check for presence of JWT token
  componentWillMount(){
    if (!localStorage.getItem('token')) {
      browserHistory.push('/login');
    }
  } //closes componentWILLMount

  componentDidMount(){
    this.getExploreList();
  } //closes componentDidMount

  getExploreList() {
    fetch('http://localhost:8000/users/restrict', {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((results) => {
      results.json().then((content) => {
        console.log(content.message);

        fetch(`http://localhost:8000/explore/list/${localStorage.user_id}`, {
          method: 'GET'
        })
        .then((list) => {
          list.json().then((explore_list) => {
            console.log('**explore list: ', explore_list);

            if(explore_list) {
              this.setState({
                explore_list: explore_list,
                // maybe other stuff here
              })
            }
          })
        })
      })
    })
    .catch((err) => {
      console.log('fail in catch...', err);
      browserHistory.push('/login');
    })
  }; //closes getExploreList

  render() {
    return (
      <div className='wrapper'>
        <h1>THIS IS THE DASHBOARD</h1>
      </div>
    )
  }

} //closes class Dashboard
