/**
 *
 * Footer
 *
 */

import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';
import './Footer.css';

const socialList = [
  <FaFacebookSquare />,
  <FaInstagram />,
  <FaGithubSquare />,
  <FaLinkedin />,
];

const socialColor = ['skyblue', 'pink', 'white', '#2867B2'];
const socialLink = [
  'https://www.facebook.com/shahachal.32',
  'https://www.instagram.com/shah_achal/',
  'https://github.com/AchalShah1006',
  'https://www.linkedin.com/in/achalshah32/',
];

// Style React Components
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  social: {
    padding: '10px',
    display: 'flex',
    margin: 'auto',
    width: '30%',
  },
  typo: {
    fontSize: '24px',
    '& > *': {
      verticalAlign: 'middle',
    },
  },
  footer: {
    backgroundColor: '#2A2A2A',
  },
  footerContainer: {
    minHeight: 70,
    padding: 10,
    paddingBottom: '1.5rem',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <Typography
          style={{ textAlign: 'center', fontSize: '16px', marginTop: '1rem' }}
        >
          All Rights Reserved
        </Typography>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '16px',
          }}
        >
          Copyright &copy; <span style={{ color: 'orange' }}> Achal Shah</span>
        </Typography>
        <div className={classes.social}>
          {socialList.map((text, index) => (
            <Button
              key={socialColor[index]}
              target="_blank"
              href={socialLink[index]}
              style={{
                width: '25%',
                verticalAlign: 'middle',
                minWidth: '20px',
              }}
            >
              <Typography
                style={{ color: socialColor[index] }}
                className={classes.typo}
              >
                {text}
              </Typography>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
