import React from 'react';
import { render } from 'react-dom';
import Trips from './modules/Trips';
import TravelMap from './modules/TravelMap';

const tripsContainer = document.querySelector('.js-trips');
const mapContainer = document.querySelector('.js-travel-map');

if (tripsContainer) {
  render(
    <Trips />,
    tripsContainer
  );
}

if (mapContainer) {
  render(
    <TravelMap
      countries={['GB', 'DE', 'US']}
    />,
    mapContainer
  );
}

