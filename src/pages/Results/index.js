import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovie } from '../../redux/actions/search';

export default ({ location }) => {
  const dispatch = useDispatch();

  const movies = useSelector(state => {
    console.log(state);
  });

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);

    dispatch(searchMovie({ movieName }));
  });

  return <Container> results</Container>;
};
