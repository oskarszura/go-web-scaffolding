import React from 'react';
import { render } from 'react-dom';
import TripMap from './components/TripMap';

const Elm = require('./Trips/Main.elm');

const tripNode = document.querySelector('.js-trips');

if (tripNode) {
  const app = Elm.Trips.Main.embed(tripNode);

  app.ports.addTrip.subscribe(() => {});

  app.ports.openTrip.subscribe(() => {
    setTimeout(() => {
      const mapNode = document.querySelector('.js-map');
      render(<TripMap
        places={[]}
        onAddPlace={app.ports.addPlace.subscribe}
      />, mapNode);
    }, 500);
  });
}
