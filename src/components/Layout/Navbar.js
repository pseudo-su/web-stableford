import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import infinicodeLogo from '../assets/images/infinicode-logo.png';

export function DefaultNavbar() {
  return (
    // box-shadow
    <nav className={'navbar navbar-fixed-top navbar-default'}>
      <div className="container">
        {/*Brand and toggle get grouped for better mobile display*/}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            <img src={infinicodeLogo} alt="S" className="navbar-image" />
            <span className="navbar-title animated fadeInRight">
              &nbsp;tableford
            </span>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/about-me#home" className="animated">Home</Link></li>
            <li><Link to="/about-me#about" className="animated">About Me</Link></li>
            <li><Link to="/about-me#projects" className="animated">Projects</Link></li>
            <li><Link to="/about-me#skills-experience" className="animated">Skills & Experience</Link></li>
            <li><Link to="/about-me#contact" className="animated">Contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export class AboutMeNavbar extends Component {
  constructor() {
    super();
    this.state = {
      nearTop: true,
    };
    this.listenForScroll = this.listenForScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenForScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenForScroll);
  }

  listenForScroll(ev) {
    const nearTop = window.pageYOffset < 221;

    this.setState({ nearTop });
  }

  render() {
    const isAtTop = this.state.nearTop;

    return (
      // box-shadow
      <nav className={'navbar navbar-fixed-top ' + ( isAtTop ? 'navbar-inverse' : 'navbar-default' )}>
        <div className="container">
          {/*Brand and toggle get grouped for better mobile display*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" style={{ height: isAtTop ? 60 : null }}>
              <img src={infinicodeLogo} alt="S" className="navbar-image" />
              <span className="navbar-title animated fadeInRight">
                {isAtTop ? '' : ' tableford'}
              </span>
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home" className="animated">Home</a></li>
              <li><a href="#about" className="animated">About Me</a></li>
              <li><a href="#projects" className="animated">Projects</a></li>
              <li><a href="#skills-experience" className="animated">Skills & Experience</a></li>
              <li><a href="#contact" className="animated">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}
