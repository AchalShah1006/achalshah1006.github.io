import React from 'react';
import PropTypes from 'prop-types';
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

function DataList(props) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.link} />
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={
          <span>
            <Typography
              component="span"
              variant="h6"
              color="textPrimary"
              className={classes.span}
            >
              {props.heading}
            </Typography>
            {props.content}
          </span>
        }
      />
    </ListItem>
  );
}

DataList.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
};

export default React.memo(DataList);
