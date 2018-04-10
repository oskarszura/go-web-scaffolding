import _ from 'lodash';
import { put, call } from 'redux-saga/effects';
import * as actions from './actions';

function getData() {
  return fetch('/api/trips', { credentials: 'same-origin' })
    .then(response => response.json())
    .catch(() => 'Fetching data failed');
}

function* fetchData() {
  const data = yield call(getData);

  if (_.isArray(data)) {
    const countries = _.reduce(_.filter(data, 'code'), (acc, trip) => _.union(acc, [trip.code]), []);

    yield put(actions.fetchDataSuccess(countries));
  } else {
    yield put(actions.fetchDataFail(data));
  }
}

export default fetchData;
