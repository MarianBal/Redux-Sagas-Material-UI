import { put, call, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_COMPLETE,
} from '../../consts/actionTypes';
import { apiCall } from '../api';

export function* searchMovie({ payload }) {
  try {
    const results = yield call(
      apiCall,
      `&s=${payload.movieName}`,
      null,
      null,
      'GET'
    );
    yield put({ type: SEARCH_MOVIES_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_MOVIES_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIES_START, searchMovie);
}
