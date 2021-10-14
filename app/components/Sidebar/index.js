/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
  Drawer,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import {
  FaHome,
  FaIdBadge,
  FaTasks,
  FaFolderOpen,
  FaCaretLeft,
  FaCaretRight,
} from 'react-icons/fa';
import clsx from 'clsx';
import SocialList from '../SocialList';

const drawerWidth = 240;

// Style React Components
const useStyles = makeStyles(theme => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    color: '#000',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#000',
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  divider: {
    backgroundColor: 'grey',
  },
  open: {
    display: 'block',
  },
  typo: {
    display: 'block',
    fontSize: '24px',
    '& > *': {
      verticalAlign: 'middle',
    },
  },
  icon: {
    verticalAlign: 'text-top',
    marginRight: '0.3em',
  },
}));

function Sidebar({ handleDrawerClose, open }) {
  const classes = useStyles();
  const theme = useTheme();

  const routes = ['/', '/profile', '/skills', '/work'];
  const li = [
    <FaHome className={classes.icon} />,
    <FaIdBadge className={classes.icon} />,
    <FaTasks className={classes.icon} />,
    <FaFolderOpen className={classes.icon} />,
  ];
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <FaCaretLeft /> : <FaCaretRight />}
        </IconButton>
      </div>
      <Divider className={classes.divider} />
      <List className={classes.list}>
        {['Home', 'About', 'Skills', 'Work'].map((text, index) => (
          <Link
            key={routes[index]}
            to={routes[index]}
            style={{ display: 'block', textDecoration: 'none' }}
            onClick={handleDrawerClose}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                <Icon key={text} style={{ color: '#1b1b1b' }}>
                  {li[index]}
                </Icon>
              </ListItemIcon>
              <ListItemText style={{ color: '#1b1b1b' }} primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider className={classes.divider} />
      <div className={clsx(classes.hide, open && classes.open)}>
        <SocialList />
      </div>
      <Divider className={classes.divider} />
      <div className={clsx(classes.hide, open && classes.typo)}>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '16px',
            marginTop: '1rem',
          }}
        >
          All Rights Reserved
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: '16px' }}>
          Copyright &copy; <span style={{ color: '#8a2be2' }}> Achal Shah</span>
        </Typography>
      </div>
    </Drawer>
  );
}
export default Sidebar;
