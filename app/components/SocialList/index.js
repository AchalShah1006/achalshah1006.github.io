/**
 *
 * SocialList
 *
 */

import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles({
  typo: {
    display: 'block',
    fontSize: '24px',
    '& > *': {
      verticalAlign: 'middle',
    },
  },
  social: {
    padding: '10px',
    display: 'flex',
    textAlign: 'center',
    width: '100%',
  },
});

function SocialList() {
  const classes = useStyles();
  const socialColor = ['blue', 'red', 'black', '#2867B2'];
  const socialLink = [
    'https://www.facebook.com/shahachal.32',
    'https://www.instagram.com/shah_achal/',
    'https://github.com/AchalShah1006',
    'https://www.linkedin.com/in/achalshah32/',
  ];
  const socialList = [
    <FaFacebookSquare />,
    <FaInstagram />,
    <FaGithubSquare />,
    <FaLinkedin />,
  ];

  return (
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
  );
}

SocialList.propTypes = {};

export default SocialList;
