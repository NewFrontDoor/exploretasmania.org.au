/*eslint-disable*/
import React, { Component } from 'react';
import Difficulty from './Difficulty';
import TripPopup from './TripPopup';

class UpcomingTrip extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <section>
                <div className="header"> <h5>{this.props.name}</h5> </div>
                <div className="content">
                    <TripPopup trigger={<a href="javascript:void(0);"><img className="img img-responsive" src={this.props.img} difficulty={this.props.difficulty} /></a>} /><br />
                    <span style={{ fontSize: "10px" }}>Click on the image for more detailed trip information</span><br /><br />
                    {this.props.desc} <br /><br />
                    <ul className="no-list-style no-margin-or-padding">
                        <li>
                            <strong>Difficulty:</strong> <Difficulty difficulty={this.props.difficulty} />
                        </li>
                        <li>
                            <strong>Activity:</strong> {this.props.activity}
                        </li>
                        <li>
                            <strong>Length:</strong> {this.props.length}
                        </li>
                    </ul>
                    <br />
                    <em>This is an adult trip – you must be over 18 to attend.</em>
                </div>
            </ section>
        );
    }
}

export default UpcomingTrip;