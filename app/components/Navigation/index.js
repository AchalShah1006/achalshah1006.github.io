import React from 'react';
// import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Icon,
  ClickAwayListener,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Button,
  List,
} from '@material-ui/core';
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaBars,
  FaCaretLeft,
  FaCaretRight,
} from 'react-icons/fa';
import Lists from '../Lists';

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
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
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
  typo: {
    display: 'block',
    fontSize: '24px',
    '& > *': {
      verticalAlign: 'middle',
    },
  },
}));

const socialColor = ['skyblue', 'pink', 'white', '#2867B2'];
const socialLink = [
  'https://www.facebook.com/shahachal.32',
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
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <div>
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
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <FaCaretLeft style={{ color: 'white' }} />
              ) : (
                <FaCaretRight style={{ color: 'white' }} />
              )}
            </IconButton>
          </div>
          <Divider className={classes.divider} />
          <List className={classes.list}>
            <Lists handler={handleDrawerClose} />
          </List>
          <Divider className={classes.divider} />
          <div className={clsx(classes.hide, open && classes.social)}>
            {socialList.map((text, index) => (
              <Button
                key={socialColor[index]}
                target="_blank"
                href={socialLink[index]}
                style={{
                  width: '25%',
                  verticalAlign: 'middle',
                  minWidth: '20px',
                }}
              >
                <Typography
                  style={{ color: socialColor[index] }}
                  className={classes.typo}
                >
                  {text}
                </Typography>
              </Button>
            ))}
          </div>
          <Divider className={classes.divider} />
          <div className={clsx(classes.hide, open && classes.typo)}>
            <Typography
              style={{
                textAlign: 'center',
                fontSize: '16px',
                marginTop: '1rem',
              }}
            >
              All Rights Reserved
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: '16px' }}>
              Copyright &copy;{' '}
              <span style={{ color: 'orange' }}> Achal Shah</span>
            </Typography>
          </div>
        </Drawer>
      </div>
    </ClickAwayListener>
  );
}

Navigation.propTypes = {};

export default Navigation;
