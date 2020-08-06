/**
 *
 * Navigation
 *
 */
import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Icon,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaBars,
} from 'react-icons/fa';
import Lists from '../Lists';
const drawerWidth = 240;

// Style React Components
const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1A1A1A',
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  brandName: {
    fontSize: '26px',
    textAlign: 'center',
    width: '100%',
    '@media(min-width: 600px)': {
      fontSize: '30px',
    },
    fontFamily: 'Caveat, cursive',
  },
  divider: {
    backgroundColor: 'grey',
  },
  social: {
    padding: '10px',
    display: 'flex',
    textAlign: 'center',
    width: '100%',
  },
}));

const socialColor = ['skyblue', 'pink', 'white', '#2867B2'];
const socialLink = [
  'https://www.facebook.com/shahachal.32/',
  'https://www.instagram.com/shah_achal/',
  'https://github.com/AchalShah1006',
  'https://www.linkedin.com/in/achalshah32/',
];
const socialList = [
  <FaFacebookSquare />,
  <FaInstagram />,
  <FaGithubSquare />,
  <FaLinkedin />,
];

function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: '#1A1A1A' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Icon style={{ color: 'white' }}>
              <FaBars style={{ verticalAlign: 'top' }} />
            </Icon>
          </IconButton>
          <Typography variant="h6" noWrap className={classes.brandName}>
            <span id="brand"> Achal Shah</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon style={{ color: 'white' }} />
            ) : (
              <ChevronRightIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <Lists />
        <Divider className={classes.divider} />
        <div className={classes.social}>
          {socialList.map((text, index) => (
            <a
              href={socialLink[index]}
              target="_blank"
              style={{ width: '25%' }}
            >
              <Typography
                style={{ color: socialColor[index], fontSize: '24px' }}
              >
                {text}
              </Typography>
            </a>
          ))}
        </div>
        <Divider className={classes.divider} />
      </Drawer>
    </>
  );
}

Navigation.propTypes = {};

export default Navigation;
