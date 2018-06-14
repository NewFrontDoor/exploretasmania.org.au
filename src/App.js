import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePageWrapper from './components/homepage/HomePageWrapper';
import OtherPageWrapper from './components/OtherPageWrapper';
import Footer from './components/Footer';

import './assets/css/mediaelement/mediaelementplayer.min.css';

import './assets/css/simplenews/simplenews.css';
import './assets/css/alignmentstyles.css';


import './assets/css/font-awesome/font-awesome.min.css';

import './assets/css/tb_megamenu/bootstrap.css';
import './assets/css/tb_megamenu/base.css';
import './assets/css/tb_megamenu/default.css';
import './assets/css/tb_megamenu/compatibility.css';

import './assets/nestor/css/bootstrap.min.css';
import './assets/nestor/css/ionicons.min.css';
import './assets/nestor/css/flexslider.css';
import './assets/nestor/css/style.css';

import './assets/css/fontyourface/font.css';

import './assets/nestor/css/color/brown.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="*" component={Navigation} />
          <Route exact path="/" component={HomePageWrapper} />
          <Route path="/:path" component={OtherPageWrapper} />
          <Route path="*" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
