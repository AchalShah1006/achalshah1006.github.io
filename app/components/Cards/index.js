import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    height: 300,
    width: 250,
    margin: '1rem auto',
    '@media(min-width: 320px)': {
      maxWidth: '90%',
      height: 300,
      width: 300,
    },
    '@media(min-width: 600px)': {
      maxWidth: 345,
      height: 300,
      width: 600,
    },
  },
  circle: {
    margin: '0.5rem auto',
    height: 150,
    width: 150,
    borderRadius: '50%',
    border: '10px solid blue',
    verticalAlign: 'middle',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'blue',
      color: 'white',
      border: '10px solid skyblue',
    },
  },
  icon: {
    '& > *': {
      verticalAlign: 'middle',
    },
    fontSize: '80px',
    height: '-webkit-fill-available',
  },
  typo: {
    width: '100%',
    fontFamily: 'Fira Sans, sans-serif',
    margin: '1rem auto',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bolder',
  },
});

function Cards(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box component="div" className={classes.circle}>
        <span className={classes.icon}>{props.comp}</span>
      </Box>
      <h1 className={classes.typo}>{props.title}</h1>
      <div>
        <Typography style={{ fontSize: '18px' }} className={classes.typo}>
          {props.code}
        </Typography>
      </div>
    </Card>
  );
}

Cards.propTypes = {
  comp: PropTypes.element,
  title: PropTypes.string,
  code: PropTypes.string,
};

export default Cards;
