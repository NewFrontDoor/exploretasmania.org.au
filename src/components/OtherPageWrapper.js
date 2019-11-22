import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //eslint-disable-line

import OtherPageContent from './OtherPageContent';

import ContactUs from './pages/ContactUs';
import Trips from './pages/Trips/Trips';
import SupportUs from './pages/SupportUs';
import SupportUsConfirmation from './pages/SupportUsConfirmation';
import Christianity from './pages/Christianity';

import RegistrationFormGenericDay from './pages/RegistrationFormGenericDay'
import RegistrationFormTasmanPeninsula from './pages/RegistrationFormTasmanPeninsula'
import Guides from './pages/Guides';
import GuideBioPage from './pages/GuideBioPage';
import PaypalReturn from './pages/registrations/PaypalReturn';
import RegistrationFormGenericPaypal from './pages/RegistrationFormGenericPaypal';
import RegistrationFormGeneric from './pages/RegistrationFormGeneric';

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Trips} />
          <Route exact path="/SupportUs" component={SupportUs} />
          <Route exact path="/ThankYou" component={SupportUsConfirmation} />

          <Route exact path={"/registerTasmanPeninsula"} component={() => <RegistrationFormTasmanPeninsula eventLocation="Tasman Peninsula" eventDates="16 November 2019" webformUUID="e206bf15-61c0-4e31-8937-cf3659ba18ad" />} />
          <Route exact path={"/registerConinghamCliffsObserve"} component={() => <RegistrationFormGenericDay eventLocation="Coningham Cliffs" eventDates="23 November 2019" webformUUID="45746763-c4ba-49bc-ba00-ce6c913c86cb" />} />
          <Route exact path={"/registerConinghamCliffsClimb"} component={() => <RegistrationFormGenericPaypal eventLocation="Coningham Cliffs" eventDates="23 November 2019" webformUUID="3e7cb784-7928-4082-86ea-b94a58bb64a2" tripCost={20} />} />

          <Route exact path={"/registerMorphBushwalk"} component={() => <RegistrationFormGeneric eventLocation="CRCK Morph/Explore Bushwalk" eventDates="" webformUUID="2f19b7e8-b702-4ed9-a3b7-eb0966517eb3" over18={false} />} />

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