import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {
  FaMapMarkerAlt,
  FaUniversity,
  FaAddressCard,
  FaEnvelope,
} from 'react-icons/fa';
import { Avatar } from '@material-ui/core';
import src from '../../static/images/pp.jpg';

const header = 64;
const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100% - ${header}px)`,
  },
  header: {
    margin: theme.spacing(0),
    fontSize: '30px',
    fontWeight: 'bolder',
    fontFamily: 'Forque',
    '@media(min-width: 600px)': {
      fontSize: '42px',
      margin: theme.spacing(1),
    },
  },
  grids: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: '100%',
    textAlign: 'center',
    margin: '1rem auto',
  },
  img: {
    height: 200,
    width: 200,
    display: 'inline-block',
    padding: '5px',
    backgroundColor: 'burlywood',
    boxShadow: '5px 5px 10px 0px gray',
  },
  lists: {
    padding: '3px 5px',
    listStyle: 'none',
    fontSize: '20px',
  },
  faIcons: {
    margin: '0px 5px',
    verticalAlign: 'text-top',
  },
  btn: {
    margin: '0px 0.3rem',
  },
}));

export default function MyAbout() {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <div className={classes.avatar}>
        <Avatar
          src={src}
          alt="Achal Shah"
          variant="square"
          className={classes.img}
        />
      </div>
      <div>
        <h1>I am Achal Shah.</h1>
        <ul style={{ padding: '0px' }}>
          <li className={classes.lists}>
            <FaMapMarkerAlt className={classes.faIcons} /> Ahmedabad, India.
          </li>
          <li className={classes.lists}>
            <FaAddressCard className={classes.faIcons} /> Currently pursing in
            B.Tech as a computer engineer student.
          </li>
          <li className={classes.lists}>
            <FaUniversity className={classes.faIcons} /> Gujarat Technical
            University (GTU)
          </li>
          <li className={classes.lists}>
            <FaEnvelope className={classes.faIcons} /> shahachal.007@gmail.com
          </li>
        </ul>
      </div>
      <div style={{ padding: '5px 10px', width: '100%' }}>
        <Box
          component="div"
          style={{ margin: '0px auto', width: 'max-content' }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/Portfolio-ReactJs/resume"
          >
            <Button
              className={classes.btn}
              variant="outlined"
              color="secondary"
            >
              Resume
            </Button>
          </Link>
          <Button className={classes.btn} variant="outlined" color="primary">
            Contact Me
          </Button>
        </Box>
      </div>
    </Container>
  );
}
