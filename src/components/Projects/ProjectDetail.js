import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Carousel from 'nuka-carousel';

import projects from './projects.json';

import './ProjectDetail.css';

function ProjectHeading({ heading, links = [] }) {
  return (
    <h1>
      {heading}
      {links.map(({ url, name }, idx) => {
        return (
          <div key={idx} style={{ display: 'inline-block', padding: '0 10px' }}>
            <a
              href={url}
              target="_blank"
              className="text-muted"
              style={{ textDecoration: 'none' }}>
              <span
                className="fa fa-external-link"
                style={{ fontSize: '0.8em' }}
              />
              {name}
            </a>
          </div>
        );
      })}
    </h1>
  );
}

function ProjectBadge({ icon, name, description }) {
  const isFontAwesome = icon.startsWith('fa-');

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-centered project-badge-column">
      <div className="text-center">
        <div className="box-shadow-primary project-badge">
          <div style={{ fontSize: isFontAwesome ? null : '3em' }} className={icon} />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function BadgesList({ badges }) {
  return (
    <div className="text-center">
      <div className="row row-centered">
        {badges.map((badge, idx) => {
          return (
            <ProjectBadge
              icon={badge.icon}
              name={badge.name}
              description={badge.description}
            />
          );
        })}
      </div>
    </div>
  );
}

function ProjectPage({
  heading,
  links = [],
  badges,
  about,
  technology,
  achievements,
  images,
}) {
  return (
    <Grid className="ProjectDetail">
      <br />
      <br />
      <br />
      <ProjectHeading heading={heading} links={links} />
      <Row>
        <Col md={6}>
          <ReactMarkdown source={about} />
          <BadgesList badges={badges} />
        </Col>
        <Col md={6}>
          <Carousel>
            {images.carousel.map((img, idx) => {
              return <img src={require(`./assets/images/${img.src}`)} alt={img.description} />
            })}
        </Carousel>
        </Col>
      </Row>
      <h2>Technology</h2>
      <Row>
        <Col md={10}>
          <ReactMarkdown source={technology.description} />
          <BadgesList badges={technology.badges} />
        </Col>
      </Row>
      <h2>My Achievements</h2>
      <Row>
        <Col md={10}>
          <ReactMarkdown source={achievements.description} />
          <BadgesList badges={achievements.badges} />
        </Col>
      </Row>
    </Grid>
  );
}

export default function ProjectDetail(props) {
  const { projectSlug } = props.match.params;
  const project = projects.find(
    item => item.title.toLowerCase() === projectSlug
  );
  return <ProjectPage {...project} />;
}
