import { put, call } from 'redux-saga/effects';
import * as Actions from '../actions/list';
import { secureGet } from '../utils/constants/sendJson';

// Fetch the list of star-wars data : Saga 
export function* getList(action) {
  try {
    const response = yield call(secureGet, action.list);
    let results = response.results;
    if (results.length > 0 ) {
      yield put(Actions.listSuccess(results));
    } else {
      yield put(Actions.listFailure(results));
    }
  } catch (error) {
    yield put(Actions.listFailure(error));
  }
}