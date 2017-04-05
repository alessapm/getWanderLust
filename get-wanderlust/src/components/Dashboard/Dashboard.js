import React, { Component } from 'react';

import Nav from '../Nav/Nav';
import { browserHistory } from 'react-router';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    console.log('props: ',props)

    this.state = {
      explore_list: [],
      remove_id: 0
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
    fetch('https://get-wanderlust.herokuapp.com/users/restrict', {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((results) => {
      results.json().then((content) => {
        console.log(content.message);

        fetch(`https://get-wanderlust.herokuapp.com/explore/list/${localStorage.user_id}`, {
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
                explore_list: [{ city_name: 'You don\'t have anything in your explore list yet!'}]
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
  } //closes getExploreList

  removeCity(id){

    this.setState({remove_id: id}, () => {
      fetch(`https://get-wanderlust.herokuapp.com/explore/list/d/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        browserHistory.push('/');
      })
      .catch((err) => {
        console.log('error in removeCity: ', err)
      })
    })

    console.log('city id: ', id);

  } //closes removeCity

  render() {
    return (
      <div className='dash-wrapper'>
        <div className="overlay">
        <Nav /><br />
        <div className="dashboard-wrap">

            <h2>I'd love to explore...</h2>
            <div className='allCities'>
              {this.state.explore_list.map((city) => {
                return(
                  <div key={city.city_id} className="list-city">
                    <h3> {city.city_name} </h3>
                    <p> country: {city.country}</p>
                    <p>region: {city.region}</p>
                    <p> official language: {city.language}</p>
                    <p> population: {city.population}</p>

                    <button className="remove-btn"
                    onClick={() => this.removeCity(city.city_id)}>remove</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

} //closes class Dashboard
