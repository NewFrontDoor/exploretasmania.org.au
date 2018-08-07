import React, { Component } from 'react';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

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
                          <p><div className="media media-element-container media-default">
                            <div className="content">
                              <img height="250" width="300" src={image1} alt="" />
                            </div>
                            </div>

                          </p>

                          <p><div className="media media-element-container media-default">
                          <div className="content">
                            <img height="250" width="300" src={image2} alt="" />
                          </div>
                      </div>
                    </p>
                    <p>Explore runs bushwalking and rock-climbing trips where we can build friendships, explore faith and enjoy the wilderness. <br/><br/>

                      We ask that Christians and non-Christians come on our trips together.<br/><br/>

                      Our trips vary in length and difficulty level, and are run in a number of our Tasmanian National Parks, Reserves, and World heritage areas. <br/><br/>

                      Our trip dates for the 2018/2019 summer will be announced on the 1st October – stay tuned! <br/><br/>

                      If you wish to express interest in coming on one of our trips please contact us and we will notify you when we release the trip information.

                    </p></div></div></div></div>



                </div>
                  </div>
                </div>  </div>



                        </div>




                      </div>
                    </div>
                  </div>
      </section>
    );
  }
}

export default Events;
