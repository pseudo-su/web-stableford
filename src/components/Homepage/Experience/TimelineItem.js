import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Badge } from '../../common';

import './TimelineItem.css';

function TimelineItemBadges({ icon, label, direction }) {
  const LabelBadge = () => (
    <div style={{ alignSelf: 'center', whiteSpace: 'nowrap' }} className="hidden-xs hidden-sm">
      <Badge brand="muted" shadow={false} style={{ background: '#e1e1e1' }}>
        <h2 style={{ margin: 0 }}>{label}</h2>
      </Badge>
    </div>
  );
  const Seperator = () => <div>&nbsp;</div>;
  const LogoBadge = () => (
    <div>
      <Badge icon={`fa fa-3x ${icon}`}
        brand="muted"
        shadow={false}
        style={{ padding: 15,
          background: '#e1e1e1',
          borderRadius: '0',
          boxShadow: 'rgba(119, 119, 119, 0.498039) 0px 12px 9px -9px' }}>
      </Badge>
    </div>
  );

  const isLeft = direction === 'left';
  const badges = [ LogoBadge, Seperator, LabelBadge ];
  const orderedBadges = isLeft ? badges.reverse() : badges;

  return (
    <div className={`TimelineItemBadges ${direction}`} style={{ display: 'flex', position: 'absolute' }}>
      {orderedBadges.map((Item, idx) => (
        <Item key={idx} />
      ))}
    </div>
  );
}

function TimelineItemBody({ title, label, content, align }) {

  return (
    <div className={`TimelineItemBody ${align}`}>
      <h2 style={{ color: '#3E5871', fontWeight: 600 }}>{title}</h2>
      <h2 style={{ color: '#777777' }} className="hidden-md hidden-lg">{label}</h2>

      <div className="item-content well">
        <ReactMarkdown source={content} />
      </div>
    </div>
  );
}

export default class TimelineItem extends Component {
  render() {
    const event = this.props.event;
    const isOdd = Boolean(this.props.eventIndex % 2);
    const align = isOdd ? 'right' : 'left';
    
    const timelineDateSpan = getTimelineDateSpan(
      event.time.startYear,
      event.time.startMonth,
      event.time.endYear,
      event.time.endMonth
    );

    return (
      <Row className={`TimelineItem ${align}`}>
        <Col md={6} mdPush={ isOdd ? 6 : 0 }>
          <div className="item-wrapper">
            <TimelineItemBadges icon={event.icon} label={timelineDateSpan} direction={isOdd ? 'left' : 'right'} />
            <TimelineItemBody
              align={align}
              title={event.title}
              label={timelineDateSpan}
              content={event.content} />
          </div>
        </Col>
      </Row>
    );
  }
}

function getTimelineDateSpan(startYear, startMonth, endYear, endMonth) {
  // TODO: fix
  const startDate = `${startMonth || ''} ${startYear || ''}`.trim();
  const endDate = (
    `${endMonth || ''} ${endYear || ''}`.trim() || 
    'Present'
  );

  return `${startDate} - ${endDate}`;
}
