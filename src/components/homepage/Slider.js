import React, { Component } from 'react';
import _ from 'lodash';

import overlay from '../../assets/slider-overlay.png';
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';
import slider4 from '../../assets/slider-4.jpg';
import slider5 from '../../assets/slider-5.jpg';

/*
const slides = [{"src": "https://summerleaschurch.org/sites/summerleaschurch.org/files/styles/image_full_width/public/community%20web%20slider.jpg?itok=wztd4SUb",
                    "alt": "Welcome to Summerleas Christian Church",
                    "caption": null},
                    {"src": "https://summerleaschurch.org/sites/summerleaschurch.org/files/styles/image_full_width/public/gc-slider.jpg?itok=7POEz39Z",
                    "alt": "",
                    "caption":
                      {"header": "Gospel Communities",
                       "description": "Community @ Summerleas",
                       "linkText" : "Find out More",
                       "href": "#"
                      }}
                  ];
*/

const slides = [{
  "src": slider1,
  "alt": "",
  "caption":
  {
    //"header": "Welcome to Explore Tasmania"
  }
},
{
  "src": slider2,
  "alt": "",
  "caption":
  {
    //"header": "Welcome to Explore Tasmania"
  }
},
{
  "src": slider3,
  "alt": "",
  "caption":
  {
    //"header": "Welcome to Explore Tasmania"
  }
},
{
  "src": slider4,
  "alt": "",
  "caption":
  {
    //"header": "Welcome to Explore Tasmania"
  }
},
{
  "src": slider5,
  "alt": "",
  "caption":
  {
    //"header": "Welcome to Explore Tasmania"
  }
},

];

class Slider extends Component {
  render() {

    var slideshow = _.map(slides, (slide) => {

      if (slide.caption !== null) {
        return (
          <li key={_.uniqueId()}>
            <figure>
              <img className="img-responsive img-full-width" src={slide.src} width="1440" height="600" alt="" />
              <figcaption className="text-center">
                <div className="highlighted-slider-2-content">
                  {slide.caption.header ? (<h1 className="slider-title">{slide.caption.header}</h1>) : ''}
                  {slide.caption.description ? (<p className="slider-description">{slide.caption.description}</p>) : (<p></p>)}
                  <img className="slider-overlay img img-responsive" src={overlay} alt="" />
                  {slide.caption.linkText ? (<a href={slide.caption.href} className="btn btn-default">{slide.caption.linkText}</a>) : (<section></section>)}


                </div>
              </figcaption>
            </figure>
          </li>
        );
      }

      else {
        return (
          <li key={_.uniqueId()}>
            <figure>
              <a href="#" //eslint-disable-line
              >
                <img className="img-responsive img-full-width" src={slide.src} width="1440" height="600" alt={slide.alt} title={slide.alt} />    </a>
            </figure>
          </li>
        );
      }



    });
    return (
      <section>
        <div id="highlighted-2-region" className="highlighted region-0 block-0 bg-color-grayLight1 text-color-light" >
          <div className="region region-highlighted-2">
            <div id="block-views-front-page-slider-block" className="block block-views">
              <div className="content">
                <div className="view view-front-page-slider view-id-front_page_slider view-display-id-block">
                  <div className="view-content">
                    <div className="highlighted-slider-2">
                      <div className="flex-bullet-slider">
                        <ul className="slides">
                          {slideshow}
                        </ul>
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

export default Slider;
