import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from '../../components/Projects';
import Navigation from '../../components/Navigation';
import bookstore from '../../static/images/Bookstore.png';
import covid19 from '../../static/images/covid19.png';
import chatbot from '../../static/images/aio-bot.png';
import portfolio from '../../static/images/portfolio.png';
import portfolio2 from '../../static/images/Portfolio-2.png';
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

export default function Work() {
  const classes = useStyles();

  return (
    <>
    <Navigation  />
      <div className={classes.drawerHeader} />
      <Grid container className={classes.root}>
        <Grid item xs className={classes.item}>
          <Project
            title="Portfolio"
            para="Portfolio created with Bootstrap."
            img={portfolio}
            view="https://achalshah1006.github.io/"
          />
        </Grid>
        <Grid item xs className={classes.item}>
          <Project
            title="BookStore"
            para="Bookstore with the varieties of book's for book lovers."
            img={bookstore}
            view="https://github.com/AchalShah1006/BookStore"
          />
        </Grid>
        <Grid item xs>
          <Project
            title="Reactjs Portfolio"
            para="Portfolio with ReactJs and Material UI"
            img={portfolio2}
            view="https://achalshah1006.github.io/Portfolio-ReactJs/"
          />
        </Grid>
        <Grid item xs>
          <Project
            title="Covid 19 Tracker"
            para="Covid19 Tracker India."
            img={covid19}
            view="https://github.com/AchalShah1006/Covid19-Tracker-reactjs"
          />
        </Grid>
        <Grid item xs>
          <Project
            title="Chat-Bot"
            para="Chat Bot App to help user to get through the website."
            img={chatbot}
            view="https://github.com/AchalShah1006/Chatbot"
          />
        </Grid>

        <Grid item xs>
          <Project
            title="Student Portal"
            para="Website for college student to check thier profiles."
          />
        </Grid>
      </Grid>
    </>
  );
}
