import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Avatar } from '@material-ui/core';
import user from '../../static/images/profile.jpg';
import DataList from '../../components/DataList';
import Navigation from '../../components/Navigation';

const header = 64;
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: `calc(100vh - ${header}px)`,
    paddingTop: '1.7rem',
    flexGrow: 1,
  },
  large: {
    width: '120px',
    height: '120px',
    margin: '0.5rem auto',

    '@media(min-height: 400px)': {
      width: '200px',
      height: '200px',
    },
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
    textDecoration: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  typo: {
    display: 'inline-block',
    margin: 'auto',
  },
  gridItem: {
    textAlign: 'center',
  },
  listText: {
    width: '100%',
    maxWidth: '100%',
    marginTop: '0.5 rem',
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div id="about">
      <Navigation />
      <div className={classes.drawerHeader} />
      <Container fixed className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Avatar alt="Achal Shah" src={user} className={classes.large} />
            <ul style={{ padding: '0px' }}>
              <li className={classes.lists}>
                <FaMapMarkerAlt className={classes.faIcons} />
                <Typography className={classes.typo}>
                  Ahmedabad, India.
                </Typography>
              </li>
              <li className={classes.lists}>
                <FaEnvelope className={classes.faIcons} />
                <Typography className={classes.typo}>
                  shahachal.32@gmail.com
                </Typography>
              </li>
            </ul>
            <Link className={classes.btn} to="/resume">
              <Button variant="contained" color="secondary">
                Resume
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={8}>
            <List className={classes.listText}>
              <DataList
                link="https://img.collegedekhocdn.com/media/img/institute/logo/738.png"
                title="College / University"
                heading="Silver Oak College Of Engineering and Technology"
                content="I am final year student in department of computer engineering at Silver oak College of Education and Technology graduating in May/June 2021."
              />
              <DataList
                link="https://s3.amazonaws.com/zaubatrademarks/f39a4a1e-56ff-41ab-9b41-d2a4b98032cb.png"
                title="Higher Secondary School"
                heading="Florescent Public School"
                content="Completed 12th grade from Florescent Public school with 76.31% in year-2017"
              />
              <DataList
                link="data:image/jpeg;base64,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"
                title="10th Grade"
                heading="Nutan English School"
                content="Completed 10th grade from Nutan English school with 78.50% in year-2015"
              />
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
