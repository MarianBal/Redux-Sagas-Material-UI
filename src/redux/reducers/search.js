import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_COMPLETE,
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_START:
      return { ...state, isLoading: true };
      break;

    case SEARCH_MOVIES_ERROR:
      return { ...state, isLoading: false, movies: null };
      break;

    case SEARCH_MOVIES_COMPLETE:
      return { ...state, isLoading: false, movieComplete: action.results.data };
      break;

    default:
      return { ...state };
      break;
  }
}
