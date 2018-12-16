import React, { Component } from 'react';
import { Loader } from 'graphen';

const ElmTripsApp = require('./Main.elm');

export default class TripsApp extends Component {
  componentDidMount() {
    ElmTripsApp.Trips.Main.embed(document.querySelector('.js-trips-app'));
  }

  render() {
    return (<div className="js-trips-app">
      <Loader />
    </div>);
  }
}
