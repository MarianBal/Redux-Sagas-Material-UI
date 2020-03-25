import React, { useState } from 'react';
import {
  Container,
  Card,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import styles from './style';
import { MovieIcon } from './../../icons';

export default ({ history }) => {
  const [searchText, setSearchText] = useState('');

  const classes = styles();

  const handleSearchTextChange = event => setSearchText(event.target.value);

  const handleCleanTextClick = event => setSearchText('');
  const handleSearchTextClick = event =>
    history.push(`/results?movieName=${searchText}`);

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            onClick={handleSearchTextClick}
            color="primary"
            size="large"
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
