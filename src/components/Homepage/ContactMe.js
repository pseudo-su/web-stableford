import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Badge } from '../common';

import './ContactMe.css';

import portrait from '../assets/images/john.jpg';
const indexContent = require('./index-content.json');

function AboutMe() {
  return (
    <div>
        <div className="quote-box well">
          <ReactMarkdown source={indexContent.contactMessage}/>
        </div>
        <div style={{ position: 'relative', top: -83}}>
          <img src={portrait}
            alt="John Stableford"
            className="img-circle box-shadow"
            style={{ width: 125, height: 125, border: '2px solid #EEEEEE'}} />
          <div className="badges">
            <Badge
              href="https://au.linkedin.com/in/johnstableford"
              target="_blank"
              style={{ padding: '20px 23px', marginLeft: 6, background: '#EEEEEE' }}
              icon="fa fa-linkedin fa-3x"
              brand="primary"
              shadow={true} />
            <Badge
              href="mailto:john@stableford.com.au?Subject=Hey%20John"
              style={{ padding: 20, marginLeft: 6, background: '#EEEEEE' }}
              icon="fa fa-envelope fa-3x"
              brand="primary"
              shadow={true} />
            <Badge
              href="#contact"
              style={{ padding: 20, marginLeft: 6, background: '#EEEEEE' }}
              onClick={() => console.log('focus contact-form-name')}
              onTouchStart={() => console.log('focus contact-form-name')}
              icon="fa fa-comment fa-3x"
              brand="primary"
              shadow={true} />
          </div>
        </div>
    </div>
  );
}

function Form() {
  return (
    <form>
      <p className="text-danger">Sorry, contact form disabled.</p>
      <p className="text-primary">You can email me at <a href="mailto:john@stableford.com.au">john@stableford.com.au</a></p>


      <FormGroup
        bsSize="lg"
        controlId="inputName" >
        {/*<ControlLabel>Your Name (required)</ControlLabel>*/}
        <FormControl
          type="text"
          placeholder="Name"
          disabled
        />
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup
        bsSize="lg"
        controlId="inputEmail" >
        {/*<ControlLabel>Your Email (required)</ControlLabel>*/}
        <FormControl
          type="text"
          placeholder="Email"
          disabled
        />
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup
        bsSize="lg"
        controlId="inputSubject" >
        {/*<ControlLabel>Subject</ControlLabel>*/}
        <FormControl
          type="text"
          placeholder="Subject"
          disabled
        />
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup
        bsSize="lg"
        controlId="inputMessage" >
        {/*<ControlLabel>Message</ControlLabel>*/}
        <FormControl componentClass="textarea" placeholder="Message" disabled />
        <FormControl.Feedback />
      </FormGroup>
      <Button type="submit" bsStyle="primary" disabled>Submit</Button>
    </form>
  );
}

export default class ContactMe extends Component {
  render() {
    // contact
    return (
      <div className="ContactMe" id="contact">
        <div className="text-center">
          <h2 style={{
            display: 'inline-block',
            fontWeight: 600,
            marginBottom: 40,
            borderBottom: '2px solid'}}>
            Contact Me
          </h2>
        </div>
        <Grid>
          <Row>
            <Col md={6}>
              <AboutMe />
            </Col>
            <Col md={6}>
              <Form />
              <br />
              <br />
              <br />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

