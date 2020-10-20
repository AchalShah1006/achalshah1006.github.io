import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Work from './containers/Work';
import Skills from './containers/Skills';
import Resume from './components/Resume';

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
        <main className={classes.section}>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route path={process.env.PUBLIC_URL + '/profile'} component={Profile} />
            <Route path={process.env.PUBLIC_URL + '/skills'} component={Skills} />
            <Route path={process.env.PUBLIC_URL + '/work'} component={Work} />
            <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
