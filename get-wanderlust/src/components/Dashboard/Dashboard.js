import React, { Component } from 'react';
import update from 'react-addons-update';
import Nav from '../Nav/Nav';
import { browserHistory } from 'react-router';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    console.log('props: ',props)

    this.state = {
      explore_list: []
    }
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

            if(explore_list.length > 0) {
              this.setState({
                explore_list: explore_list
                // maybe other stuff here
              })
            } else {
              this.setState({
                explore_list: [{id:1, city_name: 'You don\'t have anything in your explore list yet!'}]
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
        <Nav /><br />

        <h2>Hello, {window.localStorage.firstname}</h2>
        <p>I'd love to explore...</p>
          <div className='forIteration'>
            {this.state.explore_list.map((city) => {
              return(
                <div key={city.id}>
                  <h3> {city.city_name} </h3>
                  <p> {city.priority} </p>
                </div>
              )
            })}
          </div>

      </div>
    )
  }

} //closes class Dashboard
