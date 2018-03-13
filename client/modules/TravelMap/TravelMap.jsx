import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ElmTravelMapApp = require('./Main.elm');

const COUNTRIES_BOUNDARIES_TABLE = '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk';

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
    const { countries } = this.props;
    const { settings } = this.state;

    ElmTravelMapApp.TravelMap.Main.embed(this.mapApp);

    this.map = new google.maps.Map(this.mapContainer, settings);

    const countriesString = _.chain(countries)
        .map(country => `'${country}'`)
        .join(', ');

    this.map = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: COUNTRIES_BOUNDARIES_TABLE,
        where: `ISO_2DIGIT IN (${countriesString})`,
      },
      map: this.map,
      suppressInfoWindows: true,
    });
  }

  render() {
    return (<div className="travel-map">
      <div>
        Countries: {this.props.countries}
      </div>
      <div
        className="travel-map__board"
        ref={(ref) => { this.mapContainer = ref; }}
      />
      <div ref={(ref) => { this.mapApp = ref; }} />
    </div>);
  }
}

TravelMap.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TravelMap.defaultProps = {
  countries: [],
};
