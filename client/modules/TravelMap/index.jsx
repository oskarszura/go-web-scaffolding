import React, { Component } from 'react';

const ElmTravelMapApp = require('./Main.elm');

export default class TravelMap extends Component {
  componentDidMount() {
    ElmTravelMapApp.TravelMap.Main.embed(document.querySelector('.js-travel-map'));
  }

  render() {
    return (<div className="js-travel-map" />);
  }
}
