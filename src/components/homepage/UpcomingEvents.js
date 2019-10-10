import React, { Component } from 'react';
import UpcomingEvent from '../models/UpcomingEvent';
import { getFromDrupalAPI } from '../../utils/fetchJSON';

class UpcomingEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: null
    }
  }

  componentWillMount() {
    var that = this;
    getFromDrupalAPI('trips_api', function (data) {
      that.setState({ events: data });
    });
  }


  render() {
    if (this.state.events !== null && this.state.events.length > 0) {
      var UpcomingEvents = this.state.events.map(trip => (
        <UpcomingEvent title={trip.node_title} startDate={trip.startdate} key={trip.nid} />
      ))
    }

    return (
      <section>
        <div className="col-xs-12">
          <h2 >Upcoming Events</h2>

          <div className="content" style={{ marginTop: 0 }}>
            <div className="upcoming-events">
              {UpcomingEvents}

            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
