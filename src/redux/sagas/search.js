import { put, call, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_COMPLETE,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETE,
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

export function* searchMovieById({ payload }) {
  try {
    const movie = yield call(
      apiCall,
      `&i=${payload.movieId}`,
      null,
      null,
      'GET'
    );
    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, movie });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIES_START, searchMovie);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
}
