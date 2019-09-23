import React, { Component } from 'react';
import UpcomingTrip from '../../models/UpcomingTrip';

import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image3.jpg';
import WomensWeekendWalking from './WomensWeekendWalking';
import WomensWalkingTrip from '../../../assets/WomensWalkingTrip.jpg'
import TasmanPeninsulaOutdoorXP from './TasmanPeninsulaOutdoorXP';
import TasmanPeninsulaOutdoorXPImg from '../../../assets/TasmanPeninsula.jpg'

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
                          <p>Explore runs outdoor trips where we support and encourage our participants to build friendships, explore faith and enjoy the wilderness. Our trips include easy half-day bushwalks, epic multi-day wilderness hikes, rock climbing, abseiling and everything in between. We lead trips in many wilderness locations throughout Tasmania; these destinations include the world-famous beaches in the Freycinet National Park, the impressive sea cliffs of Tasman National Park, the towering summit of Frenchmans Cap and the picturesque rainforest surrounding Lake St Clair. All of our trips include time for relaxing, socialising and taking in your surroundings. Our trips are fully catered and we provide all of the specialist equipment required; all you need is warm clothes and appropriate footwear. It doesn’t matter if this is your first trip into the Tasmanian wilderness or your fiftieth, we would love to have you join us!</p>

                          <p>The team at Explore believes in the Christian God, who shows himself to us through the Bible and through the world around us. On our trips we hope you will see God through the wilderness you are surrounded by and through what he has told us in the Bible. On all of our trips we will invite you to read a part of the Bible with us and to have an open conversation about what it is saying. We would love our trips to be an opportunity for people with different beliefs to have these conversations together, so if you are a Christain coming on an Explore trip we ask you to invite someone with different beliefs to come along with you. And if you are someone who doesn’t believe in the Christain God we look forward to learning about what you believe and sharing with you some of what we believe.</p>

                          <p>We are currently planning trips for the 2019/2020 summer, so if you or an organisation you are part of would like to plan a trip with us please get in touch with us as soon as possible.</p>

                          <div className="text-center not-full-desktop">
                            <img height="250" width="300" src={image2} alt="" className="img img-responsive" />
                          </div>


                          <h4 className="padding-top-20">Upcoming Trips</h4>
                          <br />
                          <div className="row">
                            <div className="col-md-10">
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
                          <div className="row">
                            <div className="col-md-10">
                              <UpcomingTrip name="Tasman Peninsula Outdoor Experience: 16 November 2019"
                                desc="You have probably heard of the Tasman Peninsula as the location of the famous Port Arthur Historic Site. You may not know that the Tasman Peninsula is also home to a wide variety of natural wonders! On this trip we will explore some of the diverse coastal scenery on the Tasman Peninsula. This will include the towering sea cliffs of Cape Hauy, the intricate detail of the Tessellated Pavement and the power of the ocean on display at The Blowhole."
                                img={TasmanPeninsulaOutdoorXPImg}
                                difficulty={1}
                                activity="Bushwalking, sightseeing"
                                length="1 day"
                                popupContent={<TasmanPeninsulaOutdoorXP />}
                                focusEvent="yes"
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
