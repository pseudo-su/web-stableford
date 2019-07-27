import React, { Component } from 'react';

import portrait from '../assets/images/john.jpg';
import './HomeSplash.css';

function Typing() {
  // TODO: typing animate
  const titles = [
    'Software Developer',
    'Front End Software Developer. ',
    'NodeJS Developer. ',
    'Web Developer',
    'Full Stack Web Developer. ',
  ];
  return (
    <div>
      <h2 className="title-subheading" >{titles[4]}</h2>
    </div>
  );
}

function ContactLinks() {
  const links = [{
    href: 'https://au.linkedin.com/in/johnstableford',
    target: '_blank',
    icon: 'fa fa-linkedin',
  }, {
    href: 'mailto:john@stableford.com.au?Subject=Hello%20John',
    target: '',
    icon: 'fa fa-envelope',
  }, {
    href: '#contact',
    target: '',
    icon: 'fa fa-comment',
  }];

  return (
    <div style={{ marginTop: 20 }}>
      {links.map((link, idx) => (
        <a key={idx} {...link} className="btn btn-link btn-navbar" style={{ border: 'none' }}>
          <span className={link.icon} style={{fontSize: '1.5em'}}></span>
        </a>
      ))}
    </div>
  );
}

export default class HomeSplash extends Component {
  render() {
    return (
      <div className="HomeSplash" id="home">
        <div className="splash-content">
          <img className="img-circle box-shadow"
            alt="Small portrait of John Stableford"
            style={{width: 125, height: 125, border: '2px solid #EEEEEE'}}
            src={portrait} />

          <h1 className="title-heading">JOHN STABLEFORD</h1>
          <Typing />
          <ContactLinks />
        </div>

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 10, textAlign: 'center'}}>
          <a href="#about" style={{ color: 'white' }}>
            <span className="btn btn-transparent">
              See More
            </span>
            <br />
            <span className="fa fa-chevron-down fa-lg"></span>
          </a>
        </div>
      </div>
    );
  }
}


