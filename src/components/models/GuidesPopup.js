import React, { Component } from 'react';
import Popup from 'reactjs-popup'

class GuidesPopup extends Component {
    render() {
        return (
            <Popup trigger={this.props.trigger} modal>
                {close => (
                    <div className="guide-info-popup">
                        <a className="close" onClick={close}>
                            &times;
        </a>
                        <span dangerouslySetInnerHTML={{ __html: this.props.content }} />
                    </div>
                )}
            </Popup>
        );
    }
}

export default GuidesPopup;