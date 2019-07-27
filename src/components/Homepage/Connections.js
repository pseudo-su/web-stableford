import React, { Component } from 'react';

export default class Connections extends Component {
  render() {
    return (
      <div className="connections" id="connections" style={{ display: 'none'}}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <div style={{ display: 'inline-block'}}>
                <h2 className="text-center animate-on-vis underline fadeInDown">Connections</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ minHeight: 400 }}></div>
          </div>
        </div>
      </div>
    );
  }
}
