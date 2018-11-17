/*eslint-disable*/
import React, { Component } from 'react';
import Popup from 'reactjs-popup'

class TripPopup extends Component {
    render() {
        return (
            <Popup trigger={this.props.trigger} modal>
                {close => (
                    <div className="trip-info-popup">
                        <a className="close" onClick={close}>
                            &times;
        </a>
                        {this.props.content}
                    </div>
                )}
            </Popup>
        );
    }
}

export default TripPopup;