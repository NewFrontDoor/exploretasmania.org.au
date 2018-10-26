/* eslint-disable */
import React, { Component } from 'react';

import Iframe from 'react-iframe';


class UpcomingEvents extends Component {
  render() {
    return (
      <section>
        <div className="col-xs-12">


          <h2 >Upcoming Events</h2>

          <div className="content" style={{ marginTop: 0 }}>
            {/*<Iframe url="https://summerleas.elvanto.com.au/calendar_embed/?c[]=9f425cbf-05c1-11e6-8c36-063ef7799403&amp;ca[]=services&events=1&upcoming[count]=3&upcoming[timeframe]=m&max=5" marginWidth="0" width="100%" height="300px" position="relative" />
          <p>For a full calendar, <a href="#" title="View full calendar">click here</a>.</p>  */}
            <table className="col-xs-12">
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>Date</th>
                  <th style={{ padding: "10px" }}>Time</th>
                  <th style={{ padding: "10px" }}>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px" }}>1st October 2018</td>
                  <td style={{ padding: "10px" }}>N/A</td>
                  <td style={{ padding: "10px" }}> Summer trips dates released</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
