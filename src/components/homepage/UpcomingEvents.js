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
              <UpcomingEvent title="Women’s Weekend Walking" startDate="5-6 October 2019" />

            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
