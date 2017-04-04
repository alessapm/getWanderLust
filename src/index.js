import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import "./styles/style.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"

import Main from './components/Main/Main';
import Login from './components/Login/Login';
import NewUser from './components/NewUser/NewUser';
import Dashboard from './components/Dashboard/Dashboard';





ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={NewUser} />
    <Route path='/dashboard' component={Dashboard} />

  </Router>,
  document.getElementById('app'));
