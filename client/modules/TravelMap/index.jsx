import React, { Component } from 'react';

const ElmTravelMapApp = require('./Main.elm');

export default class TravelMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      },
    };
  }

  componentDidMount() {
    ElmTravelMapApp.TravelMap.Main.embed(this.mapApp);

    this.map = new google.maps.Map(this.mapContainer, this.state.settings);
  }

  render() {
    return (<div className="travel-map">
      <div ref={(ref) => { this.mapApp = ref; }} />
      <div
        className="travel-map__board"
        ref={(ref) => { this.mapContainer = ref; }}
      />
    </div>);
  }
}
