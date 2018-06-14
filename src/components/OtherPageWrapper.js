/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import OtherPageContent from './OtherPageContent';

import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import SupportUs from './pages/SupportUs';
import RegistrationForm from './pages/RegistrationForm';
import Guides from './pages/Guides';
import Christianity from './pages/Christianity';

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/SupportUs" component={SupportUs} />
          <Route exact path="/Register" component={RegistrationForm} />
          <Route exact path="/Guides" component={Guides} />
          <Route exact path="/Christianity" component={Christianity} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
