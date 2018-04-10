import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Trips from './modules/Trips';
import TravelMap from './modules/TravelMap';
import travelMapReducer from './modules/TravelMap/reducers';
import travelMapSagas from './modules/TravelMap/sagas';

const tripsContainer = document.querySelector('.js-trips');
const mapContainer = document.querySelector('.js-travel-map');

const sagaMiddleware = createSagaMiddleware();

if (tripsContainer) {
  render(
    <Trips />,
    tripsContainer
  );
}

if (mapContainer) {
  const store = createStore(
      travelMapReducer,
      applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(travelMapSagas);

  render(
    <Provider store={store}>
      <TravelMap />
    </Provider>,
    mapContainer
  );
}

