import React, { Component } from 'react';

export default class TravelMap extends Component {
  componentDidMount() {
    const node = document.querySelector('.js-map');
    const settings = {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    };

    this.map = new google.maps.Map(node, settings);
  }

  addMarker(e) {
    console.log(e, e.latLng);

    /*var marker = new google.maps.Marker({
      position: position,
      map: this.map,
    });*/

  }

  render() {
    return (<div className="travel-map">
      <div className="js-map travel-map__board"
        onClick={this.addMarker} />
    </div>);
  }
}