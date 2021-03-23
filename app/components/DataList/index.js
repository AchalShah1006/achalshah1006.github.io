import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  span: {
    display: 'block',
  },
}));

export default function DataList(props) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.link} />
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={
          <>
            <Typography
              component="span"
              variant="h6"
              color="textPrimary"
              className={classes.span}
            >
              {props.heading}
            </Typography>
            {props.content}
          </>
        }
      />
    </ListItem>
  );
}
