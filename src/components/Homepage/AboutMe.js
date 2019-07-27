import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './AboutMe.css';

import { Badge } from '../common';

import computerDeskImg from '../assets/images/hero-bg-gray.png';
import indexContent from './index-content.json';

function AboutBadge(props) {
  return (
    <div className="text-center">
      <Badge {...props} />
      <h3 className={`text-${props.brand}`}>{props.label}</h3>
    </div>
  );
}

export default class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe" id="about">
        <Grid>
          <Row>
            <Col md={6}>
              <h2  style={{ fontWeight: 600, borderBottom: '2px solid'}}>About Me</h2>
              <ReactMarkdown source={indexContent.about} />
              <Row>
                <br />
                <br />
                <Col xs={6} sm={4}>
                  <AboutBadge 
                    label="Collaboration"
                    icon="devicons devicons-ubuntu fa-3x"
                    brand="info"
                    shadow={true} />
                </Col>
                <Col xs={6} sm={4} smPush={4}>
                  <AboutBadge
                    label="Mobile First"
                    icon="devicons devicons-android fa-3x"
                    brand="muted"
                    shadow={true} />
                </Col>
                <Col sm={4} smPull={4}>
                  <AboutBadge label="Web Design"
                    icon="devicons devicons-html5 fa-4x"
                    brand="primary"
                    shadow={true} />
                </Col>
              </Row>
            </Col>
            <Col md={6} style={{ textAlign: 'center' }}>
              <img src={computerDeskImg}
                alt="Computer Desk Background" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
