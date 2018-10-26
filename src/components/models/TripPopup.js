/*eslint-disable*/
import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import LakeRhonaTrip from '../pages/LakeRhonaTrip';

class TripPopup extends Component {
    render() {
        return (
            <Popup trigger={this.props.trigger} modal>
                {close => (
                    <div className="trip-info-popup">
                        <a className="close" onClick={close}>
                            &times;
        </a>
                        <LakeRhonaTrip />
                    </div>
                )}
            </Popup>
        );
    }
}

export default TripPopup;