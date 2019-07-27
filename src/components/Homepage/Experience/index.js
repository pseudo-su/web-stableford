import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Experience.css';
import './ExperienceBackground.css';

import Timeline from './Timeline';

class ExperienceBackground extends Component {

  render() {
    return (
      <div className="ExperienceBackground">
        <svg viewBox="0 0 900 900">
          <path
            fill="none"
            stroke="#3E5871"
            strokeWidth="10"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            d="M450,-700L450,9500" />
          <path
            fill="none" 
            stroke="#9BD5B3"
            strokeWidth="10"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            d="M465,-700L465,9500" />
          <path
            fill="none"
            stroke="#A1C4E0"
            strokeWidth="10"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            d="M435,-700L435,9500" />
        </svg>
      </div>
    );
  }
}

function ExperienceHeading() {
  const headingStyle = {
    display: 'inline-block',
    margin: 0,
    backgroundColor: '#e1e1e1',
    padding: 15,
    border: 'transparent',
    borderRight: '1px solid #9bd5b3',
    borderLeft: '1px solid #a1c4e0',
    fontWeight: 600,
  };

  return (
    <Row>
      <Col xs={12} style={{ textAlign: 'center' }}>
        <h2 style={headingStyle} className="box-shadow-light">Skills & Experience</h2>
      </Col>
    </Row>
  );
}

export default class Experience extends Component {
  render() {

    return (
      <div className="Experience" id="skills-experience">
        <ExperienceBackground />
        <Grid>
          <ExperienceHeading />
          <Row>
            <Col xs={12}>
              <Timeline />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
