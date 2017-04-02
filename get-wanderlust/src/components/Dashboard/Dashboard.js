import React, { Component } from 'react';
import update from 'react-addons-update';
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
  }; //closes getExploreList

  removeCity(){

    console.log('city id: ', this.state.remove_id)
  }

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
                  <div key={city.city_name} className="list-city">
                    <h3> {city.city_name} </h3>
                    <p> country: {city.country} <br />
                      region: {city.region}
                    </p>
                    <button className="remove-btn"
                    // onClick={this.setState({remove_id: city.id}, () => {
                    //   {this.removeCity.bind(this)}
                    // })}
                    >remove</button>
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
