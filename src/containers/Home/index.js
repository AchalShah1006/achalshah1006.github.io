import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
} from 'react-icons/fa';
import src from '../../static/images/pp.jpg';
import Navigation from '../../components/Navigation';
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
    <div className={classes.root}>
    <Navigation />
      <div className={classes.drawerHeader} />
      <Box className={classes.box}>
      <div className={classes.info}>
        <div style={{ margin: '0px auto' }}>
          <Avatar alt="Achal Shah" src={src} className={classes.large} />
          <Typography className={classes.text}>Coder / Developer</Typography>
          <Typography className={classes.svg}>
            <FaHtml5 className={classes.icon} style={{ color: '#e44d26' }} />
            <FaCss3Alt className={classes.icon} style={{ color: '#264de4' }} />
            <FaJsSquare className={classes.icon} style={{ color: '#ffc300' }} />
            <FaReact className={classes.icon} style={{ color: '#61dbfb' }} />
            <FaPython className={classes.icon} style={{ color: 'green' }} />
          </Typography>
        </div>
      </div>
    </Box>
    </div>
  );
}
