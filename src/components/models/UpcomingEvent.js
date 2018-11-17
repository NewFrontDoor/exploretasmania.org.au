import React, { Component } from 'react';

class Event extends Component {

    render() {
        return (
            <div className="upcoming-event">
                <div><i className="icon ion-calendar upcoming-event-icon" /></div>
                <div className="upcoming-event-title">{this.props.title}</div>
                <div className="upcoming-event-date">{this.props.startDate}</div>
            </div>
        );
    }
}

export default Event;
