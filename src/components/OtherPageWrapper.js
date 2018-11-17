/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import ContactUs from './pages/ContactUs';
import Trips from './pages/Trips/Trips';
import SupportUs from './pages/SupportUs';
import LakeRhonaRegistrationForm from './pages/LakeRhonaRegistrationForm';
import Guides from './pages/Guides';
import Christianity from './pages/Christianity';

import RegistrationFormGeneric from './pages/RegistrationFormGeneric'

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Trips} />
          <Route exact path="/SupportUs" component={SupportUs} />
          <Route exact path="/registerLakeRhona" component={LakeRhonaRegistrationForm} />
          <Route exact path={"/registerFreycinet3Days"} component={() => <RegistrationFormGeneric eventLocation="Freycinet" eventDates="11-13 January 2019" webformUUID="f3660c20-03b5-4197-9ebe-793d78a5afde" />} />
          <Route exact path={"/registerFreycinet4Days"} component={() => <RegistrationFormGeneric eventLocation="Freycinet" eventDates="17-20 January 2019" webformUUID="b06cf7c4-bb8d-4fb2-bcfa-7a9bc65a5ede" />} />

          <Route exact path="/Guides" component={Guides} />
          <Route exact path="/Christianity" component={Christianity} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
