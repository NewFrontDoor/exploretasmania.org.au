import React, { Component } from 'react';
//import TripPopup from './TripPopup';
import UpcomingTrip from '../../models/UpcomingTrip';

import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image2.jpg';
import RhonaImg from '../../../assets/RhonaTrip.jpg';
import FreycinetImg from '../../../assets/FreycinetTrip.jpg'
import LakeRhonaTrip from './LakeRhonaTrip';
import ThreeDaysAtFreycinet2019 from './ThreeDaysAtFreycinet2019';
import FourDaysAtFreycinet2019 from './FourDaysAtFreycinet2019';

class Events extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Our Trips</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div id="block-system-main" className="block block-system">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">
                          <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                            <div className="field-items">
                              <div className="field-item even">
                                <div className="media media-element-container media-default">
                                  <div className="content">
                                    <img height="250" width="300" src={image1} alt="" />
                                  </div>
                                </div>

                                <div className="media media-element-container media-default">
                                  <div className="content">
                                    <img height="250" width="300" src={image2} alt="" />
                                  </div>
                                </div>

                                <p>Explore runs bushwalking and rock-climbing trips where we can build friendships, explore faith and enjoy the wilderness. <br /><br />

                                  We ask that Christians and non-Christians come on our trips together.<br /><br />

                                  Our trips vary in length and difficulty level, and are run in a number of our Tasmanian National Parks, Reserves, and World heritage areas. <br /><br />

                                </p>

                                <h4>Upcoming Trips</h4>
                                <br />
                                <div className="row">
                                  <div className="col-md-6">
                                    <UpcomingTrip name="Lake Rhona: 13-16 December 2018"
                                      desc="Lake Rhona is a beautiful lake nestled in the heart of South-West Tasmania. It has a spectacular white sand beach and is overlooked by Reeds Peak, a rugged crag on the Dennison Range. This unique part of Tasmania’s wilderness is a place you will never forget."
                                      img={RhonaImg}
                                      difficulty={4}
                                      activity="Bushwalking"
                                      length="4 days"
                                      popupContent={<LakeRhonaTrip />}
                                    />
                                  </div>
                                </div>
                                <br />
                                <div className="clearfix"></div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <UpcomingTrip name="3 days at Freycinet: 11-13 January 2019"
                                      desc="Freycinet is described by guide books as having some of the most beautiful beaches in the world. The sand is white, the ocean is pristine blue, the sea cliffs and spectacular and the surrounding mountains just add to the wonder. On this 3 day trip plan to rock climb and abseil on the sea cliffs, walk up one of the mountains and visit two of the world-renowned beaches."
                                      img={FreycinetImg}
                                      difficulty={3}
                                      activity="Rock climbing, abseiling and bushwalking"
                                      length="3 days"
                                      popupContent={<ThreeDaysAtFreycinet2019 />}
                                    />
                                  </div>

                                  <div className="col-md-6">
                                    <UpcomingTrip name="4 days at Freycinet: 17-20 January 2019"
                                      desc="Freycinet is described by guide books as having some of the most beautiful beaches in the world. The sand is white, the ocean is pristine blue, the sea cliffs and spectacular and the surrounding mountains just add to the wonder. On this 4 day trip we plan to rock climb and abseil on the sea cliffs, walk up one of the mountains and visit four of the world-renowned beaches."
                                      img={FreycinetImg}
                                      difficulty={3}
                                      activity="Rock climbing, abseiling and bushwalking"
                                      length="4 days"
                                      popupContent={<FourDaysAtFreycinet2019 />}
                                    />
                                  </div>
                                </div>

                                <br />




                              </div>
                            </div>
                          </div>
                        </div>



                      </div>
                    </div>
                  </div>
                </div>



              </div>




            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
