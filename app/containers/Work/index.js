import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from '../../components/Projects';
import Navigation from '../../components/Navigation';
import bookstore from '../../static/images/Bookstore.png';
import covid19 from '../../static/images/covid19.png';
// import chatbot from '../../static/images/aio-bot.png';
import tictactoe from '../../static/images/tictactoe.png';
import portfolio from '../../static/images/portfolio.png';
// import portfolio2 from '../../static/images/Portfolio-2.png';
import colorPicker from '../../static/images/color-picker.png';
import stuPortal from '../../static/images/studentPortal.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    <div id="work">
      <Navigation />
      <div className={classes.drawerHeader} />
      <Grid container className={classes.root}>
        <Project
          title="Portfolio"
          para="Portfolio created with Bootstrap."
          img={portfolio}
          view="https://achalshah1006.github.io/"
        />

        <Project
          title="BookStore"
          para="Bookstore with the varieties of book's for book lovers."
          img={bookstore}
          view="https://github.com/AchalShah1006/BookStore"
        />

        <Project
          title="Background Colour Picker"
          para="On Click Background and Navbar Colour Picker"
          img={colorPicker}
          view="https://achalshah1006.github.io/colorPicker/"
        />

        <Project
          title="Tic Tac Toe"
          para="1v1 Online Tic Tac Toe Game App"
          img={tictactoe}
          view="https://achalshah1006.github.io/Tic-Tac-Toe/"
        />

        <Project
          title="Covid 19 Tracker"
          para="Covid19 Tracker India."
          img={covid19}
          view="https://github.com/AchalShah1006/Covid19-Tracker-reactjs"
        />

        <Project
          title="Student Portal"
          para="Website for college student to check thier profiles."
          img={stuPortal}
          view=""
        />
      </Grid>
    </div>
  );
}
