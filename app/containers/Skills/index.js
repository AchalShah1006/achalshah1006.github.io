import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
  FaCode,
  FaDesktop,
  FaLaptopCode,
  FaBootstrap,
  FaDatabase,
  FaCloudUploadAlt,
} from 'react-icons/fa';
import Cards from '../../components/Cards';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    margin: '0px auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <div id="skills">
      <div className={classes.drawerHeader} />
      <Container fixed>
        <Grid container className={classes.root}>
          <Grid item xs className={classes.item}>
            <Cards
              comp={<FaDesktop />}
              title="WEB DESIGN"
              code="HTML, CSS, JavaScript, ReactJs"
            />
          </Grid>
          <Grid item xs className={classes.item}>
            <Cards
              comp={<FaCode />}
              title="WEB DEVELOPMENT"
              code="Flask, Django"
            />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaBootstrap />}
              title="UI FRAMEWORKS"
              code="Bootstrap, Material UI"
            />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaLaptopCode />}
              title="PROGRAMMING LANGUAGE"
              code="Python, C, CPP"
            />
          </Grid>
          <Grid item xs>
            <Cards comp={<FaDatabase />} title="DATABASE" code="MySQL ,PSQL" />
          </Grid>
          <Grid item xs>
            <Cards
              comp={<FaCloudUploadAlt />}
              title="CLOUD PLATFORMS"
              code="AWS, GCP"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
