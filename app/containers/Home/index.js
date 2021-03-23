import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import src from '../../static/images/pp.jpg';
import Navigation from '../../components/Navigation';
import ScrollableIcons from '../../components/ScrollableIcons';
const header = 64;

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
  box: {
    height: `calc(100% - ${header}px)`,
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#1A1A1A',
  },
  info: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -30%)',
    verticalAlign: 'middle',
    padding: '5px',
    fontSize: '24px',
  },
  svg: {
    fontSize: '26px',
    textAlign: 'left',
    width: '70%',
    margin: '0px auto',
    '@media (min-width: 600px)': {
      width: '50%',
    },
  },
  icon: {
    width: '20%',
    cursor: 'pointer',
  },
  large: {
    width: '120px',
    height: '120px',
    margin: '0.5rem auto',
    border: '2px solid #2e242c',
    '@media(min-height: 400px)': {
      width: '200px',
      height: '200px',
    },
  },
  text: {
    fontFamily: 'cursive; sans-serif',
    padding: '0.5rem 1rem',
    fontSize: '18px',
    '@media(min-width: 400px)': {
      fontSize: '32px',
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="#">
      <Navigation />
      <div className={classes.drawerHeader} />
      <Box className={classes.box}>
        <div className={classes.info}>
          <div style={{ margin: '0px auto' }}>
            <Avatar alt="Achal Shah" src={src} className={classes.large} />
            <Typography className={classes.text}>Coder / Developer</Typography>
            <ScrollableIcons />
          </div>
        </div>
      </Box>
    </div>
  );
}
