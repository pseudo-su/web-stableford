import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

import './ProjectCardList.css';

export default class ProjectCardList extends Component {
  render() {
    const projects = require('./projects.json');

    return (
      <div className="ProjectCardList" id="projects">
        <Grid>
          <Row>
            <Col xs={12} style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-block'}}>
                <h2 style={{ fontWeight: 600, borderBottom: '2px solid', marginBottom: 30, textAlign: 'center'}}>
                  Projects I've worked on
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="row-centered">
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </Row>
        </Grid>
      </div>
    );
  }
}


