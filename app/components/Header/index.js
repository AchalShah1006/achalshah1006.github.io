/**
 *
 * Navigation
 *
 */

import React, { useState } from 'react';
import { Breadcrumbs, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    color: '#FFF',
    textDecoration: 'none',
    minWidth: 100,
  },
  tab: {
    minWidth: 50,
    color: '#FFF',
  },
});

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const labels = ['Home', 'Profile', 'Skills', 'Work'];

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Breadcrumbs
        value={value}
        onChange={handleTabChange}
        aria-label="breadcrumb"
        color="primary"
      >
        {['/', '/profile', '/skills', '/work'].map((route, index) => (
          <Link key={route} color="primary" to={route} className={classes.link}>
            <Button className={classes.tab}>{labels[index]}</Button>
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}

Header.propTypes = {};

export default Header;
