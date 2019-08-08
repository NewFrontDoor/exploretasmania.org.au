import React, { Component } from 'react';
import GuidesPopup from './GuidesPopup';


class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
          displayOverlay: false
        }

      }

      toggleOverlay(e){
        this.setState({displayOverlay: !this.state.displayOverlay});
      }
      
    
    

    render() {
        return (
                <GuidesPopup trigger={<div className="col-md-3 col-sm-6 col-xs-12">
                <div className="item-box">
                    <div className="guide-img-wrapper" onMouseEnter={this.toggleOverlay.bind(this)} onMouseLeave={this.toggleOverlay.bind(this)} >
                    <img className="img-responsive" src={this.props.image} width="263" height="263" alt=""/>
                        {this.state.displayOverlay ? <div className="guide-img-overlay">
                        <h4>{this.props.name}</h4>
                    <small>{this.props.title}</small><br/>
                    <input type="button" className='btn btn-primary' name="Learn More" value="Learn More"/>
                              
                                </div> : ''}
                    </div>
                    <div className="item-box-desc text-center">
                    <h4>{this.props.name}</h4>
                    <small>{this.props.title}</small>
                    </div>
                </div>
            </div>
            } content={this.props.bio} />
        );
    }
}

export default Guide;
