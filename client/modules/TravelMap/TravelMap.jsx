import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ElmTravelMapApp = require('./Main.elm');

const COUNTRIES_BOUNDARIES_TABLE = '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk';

const countriesToString = countries => _.chain(countries)
  .map(country => `'${country}'`)
  .join(', ')
  .value();

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

  componentDidUpdate() {
    const { countries } = this.props;
    const { settings } = this.state;

    ElmTravelMapApp.TravelMap.Main.embed(this.mapApp);

    this.map = new google.maps.Map(this.mapContainer, settings);

    const countriesString = countriesToString(countries);

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
    const { countries } = this.props;

    return (<div className="travel-map">
      <div className="travel-map__countries">
        Visited countries: { countriesToString(countries) }
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
