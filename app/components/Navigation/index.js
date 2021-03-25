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
  typo: {
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
                <FaCaretLeft style={{ color: 'white' }} />
              ) : (
                <FaCaretRight style={{ color: 'white' }} />
              )}
            </IconButton>
          </div>
          <Divider className={classes.divider} />
          <Lists handler={handleDrawerClose} />
          <Divider className={classes.divider} />
          <div className={classes.social}>
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
          <Typography
            style={{ textAlign: 'center', fontSize: '16px', marginTop: '1rem' }}
          >
            All Rights Reserved
          </Typography>
          <Typography style={{ textAlign: 'center', fontSize: '16px' }}>
            Copyright &copy;{' '}
            <span style={{ color: 'orange' }}> Achal Shah</span>
          </Typography>
        </Drawer>
      </div>
    </ClickAwayListener>
  );
}

Navigation.propTypes = {};

export default Navigation;
