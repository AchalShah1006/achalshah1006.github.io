/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
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
});

export default function Projects(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
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
        <Button size="small" color="primary">
          <a href={props.view} target="_blank" className={classes.link}>
            View
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
