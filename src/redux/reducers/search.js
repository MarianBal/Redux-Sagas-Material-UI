import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_COMPLETE,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETE,
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_START:
      return { ...state, isLoading: true };

    case SEARCH_MOVIES_ERROR:
      return { ...state, isLoading: false, movies: null };

    case SEARCH_MOVIES_COMPLETE:
      return { ...state, isLoading: false, movieResults: action.results.data };

    case SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };

    case SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };

    case SEARCH_MOVIE_BY_ID_COMPLETE:
      return { ...state, isLoading: false, movieResult: action.movie.data };

    default:
      return { ...state };
  }
}
