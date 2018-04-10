import * as actionTypes from './actionTypes';

export const fetchDataSuccess = countries => ({
  type: actionTypes.DATA_FETCH_SUCCESS,
  countries,
});

export const fetchDataFail = error => ({
  type: actionTypes.DATA_FETCH_ERROR,
  error,
});
