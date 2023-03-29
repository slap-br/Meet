// src/Event.js

import React, { Component } from "react";


class Event extends Component {
  render() {
    return <div>
      <div></div>
      <div className="Event">
        <h2 className="summary">{ Event.summary }</h2>
        <p className="start">
          { Event.start.dateTime }
        </p>
        <p className="location">
          {`Location: ${Event.location}`}
        </p>
        <button
          className='details-button'
          onClick={this.toggleDetails}
        >
          {collapsed ? 'show' : 'hide'} details
        </button>
        {!collapsed && (
          <div className='details'>
            <h3 className='about'>
              About this event:
            </h3>
            <a
              className='link'
              href={Event.htmlLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              See details on Google Calendar
            </a>
            <p className='description'>
              {Event.description}
            </p>
          </div>
        )}
      </div>
    </div>;
  }
}

export default Event;