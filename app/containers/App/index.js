import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from '../HomePage';
import Resume from '../../components/Resume';
import Profile from '../Profile';
import Skills from '../Skills';
import Work from '../Work';
import Navigation from '../../components/Navigation';

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

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Navigation />
        <main className={classes.section}>
          <Switch>
            <Route exact path="/" component={HomePage} />
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
