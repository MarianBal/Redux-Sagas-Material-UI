import { SEARCH_MOVIES_START } from '../../consts/actionTypes';

export const searchMovie = payload => ({
  type: SEARCH_MOVIES_START,
  payload,
});
