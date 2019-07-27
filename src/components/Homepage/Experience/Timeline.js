import React, { Component } from 'react';

import TimelineItem from './TimelineItem';

export default class Timeline extends Component {
  render() {
    const timelineItems = require('./timeline.json');

    return (
      <div className="timeline">
        {timelineItems.reverse().map((event, idx) => (
          <TimelineItem key={idx} event={event} eventIndex={idx} />
        ))}
        <div className="row">
          <div className="col-xs-12">
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
