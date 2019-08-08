/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import ContactUs from './pages/ContactUs';
import Trips from './pages/Trips/Trips';
import SupportUs from './pages/SupportUs';
import SupportUsConfirmation from './pages/SupportUsConfirmation';
import LakeRhonaRegistrationForm from './pages/LakeRhonaRegistrationForm';
import GuidesOld from './pages/GuidesOld';
import Christianity from './pages/Christianity';

import RegistrationFormGeneric from './pages/RegistrationFormGeneric'
import Guides from './pages/Guides';

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Trips} />
          <Route exact path="/SupportUs" component={SupportUs} />
          <Route exact path="/ThankYou" component={SupportUsConfirmation} />
          <Route exact path="/registerLakeRhona" component={LakeRhonaRegistrationForm} />
          <Route exact path={"/registerWomensWeekendWalking"} component={() => <RegistrationFormGeneric eventLocation="Lake St Clair" eventDates="5-6 October 2019" webformUUID="19a00a98-fae2-4ecb-a077-96f697d077d3" />} />

          <Route exact path="/Guides" component={GuidesOld} />
          <Route exact path="/GuidesNew" component={Guides} />
          <Route exact path="/Christianity" component={Christianity} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
