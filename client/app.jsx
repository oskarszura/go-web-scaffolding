import React from 'react';
import { render } from 'react-dom';
import Trips from './modules/Trips';

render(
  <Trips />,
  document.querySelector('.js-trips'),
);
