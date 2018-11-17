/* eslint-disable */
import React, { Component } from 'react';
import UpcomingEvent from '../models/UpcomingEvent';

class UpcomingEvents extends Component {
  render() {
    return (
      <section>
        <div className="col-xs-12">


          <h2 >Upcoming Events</h2>

          <div className="content" style={{ marginTop: 0 }}>
            <div className="upcoming-events">
              <UpcomingEvent title="Lake Rhona Trip Commences" startDate="Thursday, 13 December 2018 7:30AM" />
              <UpcomingEvent title="3 Day Freycinet Trip Commences" startDate="Friday, 11 January 2019 7:30AM" />
              <UpcomingEvent title="4 Day Freycinet Trip Commences" startDate="Thursday, 17 January 2019 7:30AM" />
            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
