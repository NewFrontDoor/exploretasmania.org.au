import React, { Component } from 'react';
import Difficulty from './Difficulty';
import TripPopup from './TripPopup';
import rockClimbingImg from '../../assets/rockClimbingImg.png'

class UpcomingTrip extends Component {
    constructor(props) {
        super(props);
        this.state = { focusEvent: this.props.focusEvent }
        console.log(this.props)
    }
    render() {
        return (
            <section className="upcoming-trip">
                <div className="header"> <h5>{this.props.name}</h5> </div>
                <div className="content">
                    <img className="img img-responsive" src={this.props.img} difficulty={this.props.difficulty} alt="" /><br /><br />
                    <span dangerouslySetInnerHTML={{ __html: this.props.desc }} /> <br />
                    <ul className="no-list-style no-margin-or-padding">
                        <li>
                            <strong>Difficulty:</strong> <Difficulty difficulty={this.props.difficulty} />
                        </li>
                        {this.props.rockClimbing === "yes" ? <li style={{paddingLeft: "68px"}}><img src={rockClimbingImg} height="31" width="31" alt=""/> Variable (rock climbing) - climbing routes range from easy to moderate</li> : ''}
                        <li>
                            <strong>Activity:</strong> {this.props.activity}
                        </li>
                        <li>
                            <strong>Length:</strong> {this.props.length}
                        </li>
                    </ul>
                    <br />
                    {this.props.nonStandardTrip === "yes" ? <em>{this.props.nonStandardTripInfo}</em> : <em>This is an adult trip – you must be over 18 to attend.</em>}<br /><br />
                    {this.state.focusEvent === "yes" ? <section><em>This is a trip primarily for international students, though other interested individuals are welcome to join us too.</em><br /><br /></section> : ''}
                    <TripPopup trigger={<a href="javascript:void(0);" //eslint-disable-line
                    ><div className="text-center"><button className="btn btn-primary">Read more and Register</button></div></a>} content={this.props.popupContent} />
                    <br />
                </div>
            </ section>
        );
    }
}

export default UpcomingTrip;