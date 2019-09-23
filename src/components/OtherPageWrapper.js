/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import ContactUs from './pages/ContactUs';
import Trips from './pages/Trips/Trips';
import SupportUs from './pages/SupportUs';
import SupportUsConfirmation from './pages/SupportUsConfirmation';
import LakeRhonaRegistrationForm from './pages/LakeRhonaRegistrationForm';
import Christianity from './pages/Christianity';

import RegistrationFormGeneric from './pages/RegistrationFormGeneric'
import RegistrationFormTasmanPeninsula from './pages/RegistrationFormTasmanPeninsula'
import Guides from './pages/Guides';
import GuideBioPage from './pages/GuideBioPage';
import PaypalReturn from './pages/registrations/PaypalReturn';

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
          <Route exact path={"/registerTasmanPeninsula"} component={() => <RegistrationFormTasmanPeninsula eventLocation="Tasman Peninsula" eventDates="16 November 2019" webformUUID="e206bf15-61c0-4e31-8937-cf3659ba18ad" />} />
          <Route exact path={"/PaypalReturn/"} component={PaypalReturn} />
          <Route exact path={"/PaypalReturn/:sid"} component={PaypalReturn} />

          <Route exact path="/Guides" component={Guides} />
          <Route exact path="/Guides/:name" component={GuideBioPage} />
          <Route exact path="/Christianity" component={Christianity} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;