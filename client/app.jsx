import React from 'react';
import { render } from 'react-dom';
import Trips from './modules/Trips';

const jsTripsContainer = document.querySelector('.js-trips');

render(
  <Trips />,
  jsTripsContainer
);
