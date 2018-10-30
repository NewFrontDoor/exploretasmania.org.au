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
            <TripPopup trigger={
                <section>
                    <div className="header"> <h5>{this.props.name}</h5> </div>
                    <div className="content">
                        <img className="img img-responsive" src={this.props.img} /><br /><br />
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
                </section>}

                difficulty={this.props.difficulty}
            />
        );
    }
}

export default UpcomingTrip;