import React from 'react';
// import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  makeStyles,
  Icon,
  ClickAwayListener,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from '@material-ui/core';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import Header from '../Header';

const drawerWidth = 240;

// Style React Components
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  brandName: {
    fontSize: '26px',
    '@media(min-width: 600px)': {
      fontSize: '30px',
    },
    fontFamily: 'Caveat, cursive',
  },
  divider: {
    backgroundColor: 'grey',
  },
  open: {
    display: 'block',
  },
  typo: {
    display: 'block',
    fontSize: '24px',
    '& > *': {
      verticalAlign: 'middle',
    },
  },
}));

function Navigation() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <div>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: '#1B1B1B' }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Icon>
                <FaBars style={{ verticalAlign: 'top' }} />
              </Icon>
            </IconButton>
            <Typography variant="h6" noWrap className={classes.brandName}>
              <span id="brand"> Achal Shah</span>
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Hidden xsDown implementation="css">
                <Header />
              </Hidden>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden smUp implementation="css">
          <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        </Hidden>
      </div>
    </ClickAwayListener>
  );
}

Navigation.propTypes = {};

export default Navigation;
