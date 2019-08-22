import React, { Component } from 'react';

class Guide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOverlay: false
    }

  }

  toggleOverlay(e) {
    this.setState({ displayOverlay: !this.state.displayOverlay });
  }

  setOverlayFalse(e) {
    this.setState({ displayOverlay: false });
  }
  setOverlayTrue(e) {
    this.setState({ displayOverlay: true });
  }



  render() {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12 text-center">
        <div className="item-box">
          <div className="guide-img-wrapper" onMouseEnter={this.setOverlayTrue.bind(this)} onMouseLeave={this.setOverlayFalse.bind(this)} onTouchStart={this.setOverlayTrue.bind(this)}>
            <img className="img-responsive guide-img" src={this.props.image} width="263" height="263" alt="" />
            {this.state.displayOverlay ? <div className="guide-img-overlay">
              {/*<h4>{this.props.name}</h4>
              <small>{this.props.title}</small><br />*/}
              <a href={'/Guides/' + this.props.name}><input type="button" className='btn btn-primary' name="Learn More" value="Learn More" /></a>

            </div> : ''}
          </div>
          <div className="item-box-desc text-center">
            <h4>{this.props.name}</h4>
            <small>{this.props.title}</small>
          </div>
        </div>
      </div>

    );
  }
}

export default Guide;
