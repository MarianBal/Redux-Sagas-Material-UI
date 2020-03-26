import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/search';
import { movieResult as movieResultSelector } from '../../redux/selector';

export default ({ match }) => {
  const dispatch = useDispatch();

  const movieResult = useSelector(state => movieResultSelector(state));

  useEffect(() => {
    const movieId = match.params.id;

    (!movieResult || (movieResult && movieResult.imdbID !== movieId)) &&
      dispatch(searchMovieById({ movieId }));
  }, []);

  return (
    <>
      {!movieResult ? (
        <CircularProgress size={100} color="primary" />
      ) : (
        <Container>
          <Typography variant="h3">{movieResult.Title}</Typography>
          <img src={movieResult.Poster} alt={movieResult.Title} />
          <Typography>
            <strong>Actores: </strong>
            {movieResult.Actors}
          </Typography>
          <Typography>
            <strong>Director: </strong>
            {movieResult.Director}
          </Typography>
          <Typography>
            <strong>País: </strong>
            {movieResult.Country}
          </Typography>
          <Typography>
            <strong>Clasificación: </strong>
            {movieResult.rated}
          </Typography>
          <Typography>
            <strong>Premios: </strong>
            {movieResult.Awards}
          </Typography>
          <Typography>
            <strong>Sinopsis: </strong>
            {movieResult.Plot}
          </Typography>
        </Container>
      )}
    </>
  );
};