import React, { Component } from 'react';
import Difficulty from './Difficulty'

class TripsPopupContent extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }
    render() {
        console.log(this.state)
        return (
            <span>
                <div className="header"> <h5>{this.props.tripName}</h5> </div>
                <div className="content">
                    <div className="scrollable-frame">
                        <img className="img img-responsive" src={this.props.img} alt="" /><br /><br />

                        <span dangerouslySetInnerHTML={{ __html: this.props.popupBlurb }} />
                        <br />
                        <ul className="no-list-style no-margin-or-padding">
                            <li>
                                <strong>Difficulty:</strong> <Difficulty difficulty={this.props.difficulty} />
                            </li>
                            <li>
                                <strong>Number of Days:</strong> {this.props.tripLength}
                            </li>
                            <li>
                                <strong>Trip {this.props.tripLength !== "1" ? "Dates" : "Date"}:</strong> {this.props.tripLength !== 1 ? <span>{this.props.startDate} - {this.props.endDate}</span> : <span>{this.props.startDate}</span>}
                            </li>
                            <li>
                                <strong>Guides for this Trip:</strong> <a href="/guides" target="_blank">{this.props.guides}</a>
                            </li>
                        </ul>

                        <span dangerouslySetInnerHTML={{ __html: this.props.detailedInfo }} />
                    </div>
                </div>
            </span>
        );
    }
}

export default TripsPopupContent;
