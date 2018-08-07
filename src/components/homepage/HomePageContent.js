/* eslint-disable */
import React, { Component } from 'react';

import WhereToFindUs from './WhereToFindUs';
import UpcomingEvents from './UpcomingEvents';

class HomePageContent extends Component {
  render() {
    return (
      <section>
        <div className="content-2 bg-color-white text-color-default" >
          <div className="container">
            <div className="row">
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePageContent;
