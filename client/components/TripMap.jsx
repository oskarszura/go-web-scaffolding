import React, { Component, PropTypes } from 'react';
import gMaps from 'gmaps';

export default class TripMap extends Component {
  static propTypes = {
    places: PropTypes.arrayOf(React.PropTypes.string),
    onAddPlace: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this._directionServiceCallback = this._directionServiceCallback.bind(this);
    this._drawRoute = this._drawRoute.bind(this);
    this._handleAddPlace = this._handleAddPlace.bind(this);
    this._locations = props.places;
    this._map = {};
    this._directionService = {};
    this._directionsDisplay = {};

    props.onAddPlace(this._handleAddPlace);
  }

  componentDidMount() {
    const mapOptions = {
      zoom: 8,
      center: new gMaps.LatLng(0, 0),
      mapTypeId: gMaps.MapTypeId.ROADMAP,
    };

    this._map = new gMaps.Map(this.mapNode, mapOptions);
    this._directionService = new gMaps.DirectionsService();
    this._directionsDisplay = new gMaps.DirectionsRenderer({
      map: this._map,
    });
  }

  _handleAddPlace(place) {
    this._locations.push(place.name);
    this._drawRoute();
  }

  _drawRoute() {
    if (this._locations.length < 2) return false;

    const endIndex = this._locations.length - 1;
    const origin = this._locations[0];
    const destination = this._locations[endIndex];
    const waypoints = this._locations.slice(1, endIndex).map(location => ({
      location,
      stopover: true,
    }));

    const directionServiceOptions = {
      origin,
      destination,
      waypoints,
      travelMode: 'WALKING',
    };

    this._directionService.route(directionServiceOptions,
      this._directionServiceCallback(this._directionsDisplay));

    return true;
  }

  _directionServiceCallback(directionsDisplay) {
    return (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);

        // const myRoute = response.routes[0].legs[0];
        /* for (let i = 0; i < myRoute.steps.length; i += 1) {
          //const marker = this._locations[i] || new gMaps.Marker();

          // marker.setMap(this._map);
          // marker.setPosition(myRoute.steps[i].start_location);

          gMaps.event.addListener(marker, 'click', () => {
            const stepDisplay = new gMaps.InfoWindow();
            stepDisplay.setContent(myRoute.steps[i].instructions);
            stepDisplay.open(this._map, marker);
          });
        }*/
      }
    };
  }

  render() {
    return (<div
      className="trip-map"
      ref={(node) => { this.mapNode = node; }}
    />);
  }
}
