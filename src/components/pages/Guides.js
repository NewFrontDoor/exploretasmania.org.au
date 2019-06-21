import React, { Component } from 'react';

import Hannah from '../../assets/Hannah.jpg';
import Jordan from '../../assets/Jordan.jpg';
import Pat from '../../assets/Pat.jpg';
import Layah from '../../assets/Layah.jpg';

class Guides extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Guides</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Guides</span>
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
                  <div className="content">

                    <div className="row guide-row">
                      <div className="col-md-3">
                        <div className="item-box">
                          <figure>
                            <img className="img-responsive" src={Pat} width="263" height="263" alt="" />
                          </figure>
                          <div className="item-box-desc text-center">
                            <h4>Patrick Stam</h4>
                            <small>Guide</small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 bio-div">
                        <p className="guide-bio">

                          Patrick works as an Outdoor Education teacher at Calvin Christian School in Kingston Tasmania. He grew up in a Christian home and has been a believer most of his life.
                          He attends Bay Christian Church in Blackmans Bay. Patrick is married to Anna and they have 3 young children, Eleanor, Rueben and Naomi.

                          Patrick has a Certificate IV in Outdoor Recreation from TasTAFE and a Certificate in Adventure Tourism from Otago Polytechnic in New Zealand.
                        Patrick has been leading on Christian outdoor camps from more than a decade. In the past he has worked as a guide on the Franklin River and a ski instructor at Cardrona in New Zealand.<br /><br />

                          Patrick is well respected in the Tasmanian Outdoor Community for his skills, safety, experience, excellent instructing skills and friendly nature.
                          He instructs rock climbing, abseiling, white water kayaking and rafting, mountain biking, bushwalking and first aid.
                        </p>
                      </div>
                    </div>

                    <div className="row guide-row">
                      <div className="col-md-3">
                        <div className="item-box">
                          <figure>
                            <img className="img-responsive" src={Hannah} width="263" height="263" alt="" />
                          </figure>
                          <div className="item-box-desc text-center">
                            <h4>Hannah Fair</h4>
                            <small>Guide</small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 bio-div">
                        <p className="guide-bio">
                          <strong>Relevant qualifications:</strong> Wilderness First Aid<br /><br />
                          <strong>Why I love the wilderness:</strong><br />
                          I love being surrounded by trees, mountains, oceans and people, with time to invest in them all.
                        I love the physical exertion that many wilderness activities require. I love the feeling of standing on top of a mountain, taking in the beauty of God’s creation surrounding me.<br /><br />
                          <strong>Why I love God:</strong><br />
                          God created the world and He rules the world. He is so big and powerful and yet He cares so much about me that He sent Jesus to take the punishment for everything I have ever done wrong, so that I can spend eternity in paradise with Him.

                        </p>
                      </div>
                    </div>

                    <div className="row guide-row">
                      <div className="col-md-3">
                        <div className="item-box">
                          <figure>
                            <img className="img-responsive" src={Jordan} width="263" height="263" alt="" />
                          </figure>
                          <div className="item-box-desc text-center">
                            <h4>Jordan Poland</h4>
                            <small>Guide</small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 bio-div">
                        <p className="guide-bio">
                          <strong>Relevant qualifications:</strong> Cert III in Outdoor Recreation (including First Aid, Guide Abseiling, Whitewater Rescue Level 2)<br /><br />
                          <strong>Why I love the wilderness:</strong><br />
                          From mountains to beaches, from plants to wildlife, we have some of the best in the world right here in Tasmania. I love the challenge that the wilderness can set, and the reward of getting to a destination. I love the feeling of ‘getting away’, how the worries and stresses of day to day life disappear. I love experiencing the wilderness with others, getting an opportunity to spend quality time together, getting to know each other better and talk about the bigger things in life.<br /><br />
                          <strong>Why I love God:</strong><br />
                          Because even in my worst moments, in the things I am ashamed of, He loved me so much that he paid the price for what I’ve done so that I can have a relationship with him. Even when I betrayed him, He still wanted to
                        </p>
                      </div>
                    </div>

                    <div className="row guide-row">
                      <div className="col-md-3">
                        <div className="item-box">
                          <figure>
                            <img className="img-responsive" src={Layah} width="263" height="263" alt="" />
                          </figure>
                          <div className="item-box-desc text-center">
                            <h4>Layah Conry</h4>
                            <small>Guide</small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 bio-div">
                        <p className="guide-bio">
                          <strong>Relevant qualifications:</strong> First Aid with Oxygen Administration, SSI Snorkel Instructor Certificate<br /><br />
                          <strong>Why I love the wilderness:</strong><br />
                          The wilderness is where I feel most at home. It’s refreshing in its simplicity, stunning in its intricacy, inspiring in its reflectivity of the incredibly joyous and creative God that made it!  I love to get lost in the depths of the peace and solitude that comes with being surrounded by nature in its most raw form.<br /><br />
                          <strong>Why I love God:</strong><br />
                          In the midst of my everything God is there with endless love and mercy and grace.  He walks personally with me and my heart is overwhelmed with joy to love Him in return for his incredible sacrifice that he made so that I might be part of his beloved family.  I love Him because He has shown his own love for me.
                        </p>
                      </div>
                    </div>





                  </div>
                </div>  </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Guides;
