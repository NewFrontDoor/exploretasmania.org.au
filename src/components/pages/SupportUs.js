import React, { Component } from 'react';

class SupportUs extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Support Us</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Support</span>
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

                                <p>Explore primarily aims to support you in your evangelism – so please consider bringing a friend along on one of our trips!<br /><br />
                                  Please also pray for us; this is God’s work, so we need Him to be working through us every step of the way – when we are on trips and when we are planning and preparing. Please contact us to receive our prayer newsletter.<br /><br />
                                  Finally, we also need financial support to be able to run this ministry. If you wish to make a donation to support Explore financially please do so.</p>

                                <br />
                                <div className="col-xs-12 text-center" style={{ marginBottom: "25px" }}>
                                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="PM2TUDYLS324A" />
                                    {/*<input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />*/}
                                    <input type="submit" className="btn btn-primary" name="submit" value="Donate to Explore Tasmania" />
                                    <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
                                  </form>
                                </div>

                                <p className="text-center">
                                  <em>Payments are processed for Explore Tasmania by Presbyterian Church of Tasmania.</em>
                                </p>





                              </div></div></div></div>



                      </div>
                    </div>
                  </div>  </div>



              </div>




            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default SupportUs;