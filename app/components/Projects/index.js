import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '0.7rem auto',
    maxWidth: '60%',
    minWidth: 300,
    minHeight: '320px',
    '@media(min-width: 600px)': {
      maxWidth: '50%',
      minWidth: 400,
    },
  },
  media: {
    height: 200,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  item: {
    margin: '0px auto',
  },
});

export default function Projects(props) {
  const classes = useStyles();

  return (
    <Grid item xs className={classes.item}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.para}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {props.view === '' ? (
            <Button size="small" color="primary" disabled>
              View
            </Button>
          ) : (
            <Button size="small" color="primary">
              <Button
                href={props.view}
                target="_blank"
                className={classes.link}
              >
                View
              </Button>
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
