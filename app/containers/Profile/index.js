/**
 *
 * Profile
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import About from '../../components/About';

const useStyles = makeStyles(theme => ({
  section: {
    width: '100%',
    height: '100vh',
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

export default function Profile() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.drawerHeader} />
      <About />
    </section>
  );
}
