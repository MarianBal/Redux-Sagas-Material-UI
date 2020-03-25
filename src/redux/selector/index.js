import { get } from 'lodash';

export const isSearchLoading = get(state, 'search.isLoading');
export const movieResults = get(state, 'search.MovieResults.search');
