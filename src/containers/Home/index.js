import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from '../../components/HomePage';
import Navigation from '../../components/Navigation';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#1A1A1A',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Home() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <Navigation />
      <div className={classes.drawerHeader} />
      <HomePage />
    </div>
  );
}
