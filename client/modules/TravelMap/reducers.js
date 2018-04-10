import * as actionTypes from './actionTypes';

const defaultState = {
  countries: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.DATA_FETCH_SUCCESS:
      return Object.assign({}, state, {
        countries: action.countries,
      });

    default:
      return state;
  }
}
