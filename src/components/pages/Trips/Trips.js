import React, { Component } from 'react';
import UpcomingTrip from '../../models/UpcomingTrip';

import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image3.jpg';
import WomensWeekendWalking from './WomensWeekendWalking';
import WomensWalkingTrip from '../../../assets/WomensWalkingTrip.jpg'

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
                      <div className="row">

                        <div className="col-md-8">
                          <div className="text-center not-full-desktop">
                            <img height="250" width="300" src={image1} alt="" className="img img-responsive" />
                          </div>
                          <br />
                          <p>Explore runs bushwalking and rock-climbing trips where we can build friendships, explore faith and enjoy the wilderness. <br /><br />

                            We ask that Christians and non-Christians come on our trips together.<br /><br />

                            Our trips vary in length and difficulty level, and are run in a number of our Tasmanian National Parks, Reserves, and World heritage areas. <br /><br />

                          </p>

                          <p>
                            We are currently planning trips for the 2019/2020 summer. Please get in touch if either you or your church would like to plan an trip with us.
                          </p>

                          <div className="text-center not-full-desktop">
                            <img height="250" width="300" src={image2} alt="" className="img img-responsive" />
                          </div>


                          <h4>Upcoming Trips</h4>
                          <br />
                          <div className="row">
                            <div className="col-md-8">
                              <UpcomingTrip name="Women’s Weekend Walking: 5-6 October 2019"
                                desc="Lake St Clair is Australia’s deepest lake. It is nestled between multiple mountain ranges and surrounded by rainforest. From the cascading creeks and multicoloured mushrooms in the forest to the expansive waters of the lake and the towering surrounding mountains, there is no shortage of wonders to admire. On this 2 day trip we plan to walk through the forest, camp on the side of the lake and climb one of the surrounding mountains!"
                                img={WomensWalkingTrip}
                                difficulty={3}
                                activity="Bushwalking"
                                length="2 days"
                                popupContent={<WomensWeekendWalking />}
                              />
                            </div>
                          </div>
                          {/*   <br />
                                <div className="clearfix"></div>
                                <div className="row">
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
    */}
                          <br />

                        </div>
                        <div className="col-md-4 full-desktop-only">
                          <div className="row">

                            <img height="250" width="300" src={image1} alt="" className="img img-responsive" />
                          </div>
                          <div className="row" style={{ marginTop: "10px" }}>
                            <img height="250" width="300" src={image2} alt="" className="img img-responsive" />

                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>



              </div>





            </div >
          </div >
        </div >
      </section >
    );
  }
}

export default Events;
