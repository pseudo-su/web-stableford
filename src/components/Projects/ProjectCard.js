import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import './ProjectCard.css';

const reverseEasyImage = require('./assets/images/reverseasy-hero.png');
const birkImage = require('./assets/images/birk-hero.jpg');
const investoristImage = require('./assets/images/investorist-hero-2.jpg');

function getBackgroundStyle(project) {

    const isSpekit = project.title === 'Spekit';
    const isInvestorist = project.title === 'Investorist';
    const isReverseasy = project.title === 'Reverseasy';

    const image = (
      isSpekit ? birkImage : null ||
      isInvestorist ? investoristImage : null ||
      isReverseasy ? reverseEasyImage : null ||
      null
    );

    const sharedStyle = {
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat'
    };

    const backgroundPosition = (
      isSpekit ? 'left' : null ||
      isInvestorist ? 'right' : null ||
      isReverseasy ? 'center' : null ||
      null
    );

    return Object.assign(sharedStyle, { backgroundPosition });
}

export default class ProjectCard extends Component {
  render() {
    const project = this.props.project;
    const backgroundStyle = getBackgroundStyle(project);
    const linkPath = `/project/${project.title.toLowerCase()}`;

    return (
      <Col sm={6} md={4} lg={3} className="col-centered">
        <div className="ProjectCard animated bounce-hover" style={backgroundStyle}>
            <div className="card-top animated slideInDown" style={{ backgroundColor: project.color }}>
              <a href={linkPath} style={{color: 'white'}}>
                <h3>{project.title}</h3>
              </a>
            </div>
            <div className="card-content">
              <ReactMarkdown source={project.about} />
            </div>
            <div className="card-bottom">
              <Link to={linkPath} className="btn btn-transparent" style={{ backgroundColor: project.color }}>
                read more
              </Link>
            </div>
        </div>
      </Col>
    );
  }
}
