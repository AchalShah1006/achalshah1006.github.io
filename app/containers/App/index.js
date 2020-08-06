import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../../components/Navigation';
import Home from '../Home';
import Profile from '../Profile';
import Work from '../Work';
import Skills from '../Skills';
import Resume from '../../components/Resume';
// Style React Components
const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'Fira Sans, sans-serif',
  },

  section: {
    width: '100%',
  },
});

export default function PersistentDrawerLeft() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Navigation />
        <main className={classes.section}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
