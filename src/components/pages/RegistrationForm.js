/* eslint-disable */

import React, { Component } from 'react';
import _ from 'lodash';
import validator from 'validator';
import { escape } from 'he'

import DatePicker from 'react-date-picker'

//import {postToWebform} from './postToAPI.js';

const registrationsOpen = true;
const earlyBirdCutoff = new Date('2018-08-13');
const earlyBirdValid = earlyBirdCutoff.getTime() > Date.now();

const eventDates = "Event dates from and to";
const eventLocation = "Event Location";

//price details from PWWA
const fullWeekendEarlyPrice = 130;
const fullWeekendPrice = 140;
const dayPrice = 20;
const breakfastCost = 9;
const lunchCost = 16;
const dinnerCost = 19
const currentFullCost = earlyBirdValid ? fullWeekendEarlyPrice : fullWeekendPrice;

class RegistrationForm extends Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      preferredName: "",
      email: "",
      phone: "",
      address: "",
      suburb: "",
      state: "",
      dob: null,
      postcode: "",
      church: "",
      dietary: "",
      comments: "",
      formErrorMessage: "",
      formValid: false,
      formSubmitted: false,
      registrationType: "full",
      paymentType: "cheque",
      totalCost: 0,
      friday: false,
      fridayDinner: false,
      saturday: false,
      saturdayBreakfast: false,
      saturdayLunch: false,
      saturdayDinner: false,
      sundayBreakfast: false,
      sundayLunch: false,
      weekendDinnerAttendance: 'yes',
      nonChristianFriend: ""
    }

    this.resetRegistrationForm = this.resetRegistrationForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetRegistrationForm() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postcode: "",
      church: "",
      dietary: "",
      comments: "",
      formErrorMessage: "",
      formValid: false,
      formSubmitted: false,
      nonChristianFriend: ""
    })
  }

  handleChange(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    var change = {};
    change[e.target.name] = value;
    this.setState(change);
    console.log(this.state)
  }

  updateDate = date => this.setState({ dob: date })

  handleSubmit(e) {
    e.preventDefault();
    var errorMessage = "";
    let totalCost = 0;

    if (validator.isEmpty(this.state.firstName)) {
      errorMessage += "Please enter your first name.\n";
    }
    if (validator.isEmpty(this.state.lastName)) {
      errorMessage += "Please enter your last name.\n";
    }
    if (validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email)) {
      errorMessage += "Please enter a valid email address.\n";
    }
    if (this.state.dob === null) {
      errorMessage += "Please enter your date of birth.\n";
    }
    if (validator.isEmpty(this.state.phone)) {
      errorMessage += "Please enter a phone number.\n";
    }
    if (validator.isEmpty(this.state.address)) {
      errorMessage += "Please enter your address.\n";
    }
    if (validator.isEmpty(this.state.dietary)) {
      errorMessage += "Please enter your dietary requirements.\n";
    }
    if (validator.isEmpty(this.state.comments)) {
      errorMessage += "Please enter any relevant comments you may have\n";
    }


    if (errorMessage !== "") {
      this.setState({ formErrorMessage: errorMessage });
      return false;
    }
    else {
      if (this.state.registrationType === "day") {
        //sum total cost
        if (this.state.friday) { totalCost += dayPrice; }
        if (this.state.saturday) { totalCost += dayPrice; }
        if (this.state.sunday) { totalCost += dayPrice; }

        if (this.state.fridayDinner) { totalCost += dinnerCost }
        if (this.state.saturdayBreakfast) { totalCost += breakfastCost }
        if (this.state.saturdayLunch) { totalCost += lunchCost }
        if (this.state.saturdayDinner) { totalCost += dinnerCost }
        if (this.state.sundayBreakfast) { totalCost += breakfastCost }
        if (this.state.sundayLunch) { totalCost += lunchCost }


      }
      else {
        totalCost = currentFullCost;
      }

      this.setState({ totalCost: totalCost });
      this.setState({ formValid: true });
      console.log(this.state);
      /*handle posting to drupal and show success message*/
      var form = new FormData();
      form.append("webform", "webform-uuid");
      form.append("submission[data][1][values][0]", escape(this.state.firstName));
      form.append("submission[data][2][values][0]", escape(this.state.lastName));
      form.append("submission[data][3][values][0]", escape(this.state.email));
      form.append("submission[data][4][values][0]", escape(this.state.phone));
      form.append("submission[data][5][values][0]", escape(this.state.address));
      form.append("submission[data][6][values][0]", escape(this.state.suburb));
      form.append("submission[data][7][values][0]", escape(this.state.state));

      form.append("submission[data][8][values][0]", escape(this.state.postcode));


      /*var that = this;
      postToWebform(form, function(data){
        that.setState({submissionID:data.sid})
        that.setState({formSubmitted:true})
      })*/
    }

  }

  render() {

    var requiredField = (<span className="form-required" title="This field is required.">*</span>);
    var registrationForm;
    if (!this.state.formValid && registrationsOpen) {
      registrationForm = (
        <section>
          <p>{eventDates}<br />
            {eventLocation}</p>

          <br />
          <form onSubmit={this.handleSubmit}>

            <h3 style={{ color: "#c2b49a" }}>Contact Information</h3>

            <label>First Name </label>{requiredField}
            <input className="form-control form-text required" type="text" name="firstName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.firstName} />

            <label>Last Name </label>{requiredField}
            <input className="form-control form-text required" type="text" name="lastName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.lastName} />

            <label>Preferred Name </label>
            <input className="form-control form-text required" type="text" name="preferredName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.preferredName} />

            <label>Date of Birth</label>{requiredField}<br />
            <DatePicker
              onChange={this.updateDate}
              value={this.state.dob}
              maxDate={new Date()} /> <br /><br />

            <label>Age </label>{requiredField} (Redundant since DOB is already requested?)<br />

            <label>Address </label>{requiredField}
            <input className="form-control form-text required" type="text" name="address" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.address} />

            <label>Email </label>{requiredField}
            <input className="form-control form-text required" type="text" name="email" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.email} />

            <label>Contact Number </label>{requiredField}
            <input className="form-control form-text required" type="text" name="phone" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.phone} />

            <h3 style={{ color: "#c2b49a" }}>Trip Details</h3>
            <label><input type="checkbox" name="readDescription" value={this.state.readDescription} onChange={this.handleChange.bind(this)} />
              &nbsp;I have read the detailed description for this trip. {requiredField}</label><br />
            <label><input type="checkbox" name="readDifficultyInfo" value={this.state.readDifficultyInfo} onChange={this.handleChange.bind(this)} />
              &nbsp;I have read the difficulty information relevant to this trip. {requiredField}</label><br />
            <label><input type="checkbox" name="agreeToCall" value={this.state.agreeToCall} onChange={this.handleChange.bind(this)} />
              &nbsp;I agree to receive a call from a guide prior to the trip departure date to discuss the requirements of the trip. {requiredField}</label><br />
            <label><input type="checkbox" name="agreeToPack" value={this.state.agreeToPack} onChange={this.handleChange.bind(this)} />
              &nbsp;I agree to pack in accordance with the packing list provided in the detailed trip information. {requiredField}</label><br />
            <label><input type="checkbox" name="agreeToHaveChecked" value={this.state.agreeToHaveChecked} onChange={this.handleChange.bind(this)} />
              &nbsp;I agree to have a guide check my gear prior to departing for the trip (overnight trips only). {requiredField}</label><br />

            <h3 style={{ color: "#c2b49a" }}>Catering Information</h3>

            <label>
              Please specify any dietary requirements {requiredField} </label><br />
            <textarea className="form-control" name="dietary" rows="5" onChange={this.handleChange.bind(this)} value={this.state.dietary} />
            <span style={{ fontSize: "14px" }}>Please write N/A if none</span>
            <br /><br />
            Please indicate your hot drink preferences:<br />

            I would appreciate a hot drink:<br />
            <br />
            <label>With Breakfast </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="drinkWithBreakfast" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithBreakfast === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="drinkWithBreakfast" value="no" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithBreakfast === "no"} />
            {this.state.drinkWithBreakfast === 'yes' ? (<section>Select your hot drink preference: Multiple options can be selected<br /><input type="checkbox" name="breakfastTea" value={this.state.breakfastTea} onChange={this.handleChange.bind(this)} />&nbsp;Tea&nbsp;<br />
              <input type="checkbox" name="breakfastCoffee" value={this.state.breakfastCoffee} onChange={this.handleChange.bind(this)} />&nbsp;Coffee&nbsp;<br />
              <input type="checkbox" name="breakfastHotChocolate" value={this.state.breakfastHotChocolate} onChange={this.handleChange.bind(this)} />&nbsp;Hot Chocolate&nbsp;<br />
            </section>) : (<section></section>)}
            <br />
            <label>With Supper </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="drinkWithSupper" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithSupper === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="drinkWithSupper" value="no" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithSupper === "no"} /><br />

            {this.state.drinkWithSupper === 'yes' ? (<section>Select your hot drink preference: Multiple options can be selected<br /><input type="checkbox" name="supperTea" value={this.state.supperTea} onChange={this.handleChange.bind(this)} />&nbsp;Tea&nbsp;<br />
              <input type="checkbox" name="supperCoffee" value={this.state.supperCoffee} onChange={this.handleChange.bind(this)} />&nbsp;Coffee&nbsp;<br />
              <input type="checkbox" name="supperHotChocolate" value={this.state.supperHotChocolate} onChange={this.handleChange.bind(this)} />&nbsp;Hot Chocolate&nbsp;<br /></section>) : (<section></section>)}


            <h3 style={{ color: "#c2b49a" }}>Religious Background</h3>

            <label>Do you identify as “Christian”? </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="idAsChristian" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.idAsChristian === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="idAsChristian" value="no" onChange={this.handleChange.bind(this)} checked={this.state.idAsChristian === "no"} />
            <br /><br />
            {this.state.idAsChristian === 'yes' ? (<section>
              <label>What church do you currently attend? </label>
              <input className="form-control form-text required" type="text" name="church" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.church} />
              <label>What is the name of the non-Christian friend coming on this trip with you?</label>
              <input className="form-control form-text required" type="text" name="nonChristianFriend" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.nonChristianFriend} />
            </section>) :
              (<section>
                <label>Do you identify as belonging to another religious group? </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="idAsAnotherReligion" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.idAsAnotherReligion === "yes"} />
                <label>&nbsp;&nbsp; No &nbsp;</label><input type="radio" name="idAsAnotherReligion" value="no" onChange={this.handleChange.bind(this)} checked={this.state.idAsAnotherReligion === "no"} /><br />
              </section>)}
            <br />{this.state.idAsAnotherReligion === 'yes' ? (<section>
              <label>Which religion?</label><input className="form-control form-text required" type="text" name="otherReligion" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.otherReligion} />
              <br /></section>) : (<section></section>)}

            Briefly describe what “faith” means to you
            <input className="form-control form-text required" type="text" name="faithMeaning" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.faithMeaning} />

            <h3 style={{ color: "#c2b49a" }}>Medical Information</h3>
            <h5>It is vital that you fill this form accurately in case of an incident that requires medical attention.</h5><br />
            <strong>Emergency contact details</strong><br /><br />
            Name<br />
            <input className="form-control form-text required" type="text" name="contactName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactName} />
            Relationship to you (eg. Wife, mother)
            <input className="form-control form-text required" type="text" name="contactRelationship" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactRelationship} />
            Phone number<br />
            <input className="form-control form-text required" type="text" name="contactPhone" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactPhone} />
            Alternative phone number<br />
            <input className="form-control form-text required" type="text" name="contactPhoneAlternate" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactPhoneAlternate} />
            Email for emergency contact<br />
            <input className="form-control form-text required" type="text" name="contactEmail" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactEmail} />
            <br />
            <strong>Doctor’s details</strong><br /><br />
            Doctors name:<br />
            <input className="form-control form-text required" type="text" name="doctorsName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.doctorsName} />
            Doctors phone number:<br />
            <input className="form-control form-text required" type="text" name="doctorsPhone" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.doctorsPhone} />

            <br />
            <label>Do you have any medical conditions</label> <br />
            <label> Yes &nbsp;</label><input type="radio" name="medicalConditions" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.medicalConditions === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="medicalConditions" value="no" onChange={this.handleChange.bind(this)} checked={this.state.medicalConditions === "no"} /><br />


            {this.state.medicalConditions === 'yes' ? (<section><label>Anaphylaxis </label><br />
              <label> Yes &nbsp;</label><input type="radio" name="anaphylaxis" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.anaphylaxis === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="anaphylaxis" value="no" onChange={this.handleChange.bind(this)} checked={this.state.anaphylaxis === "no"} /><br />

              <label>Epilepsy </label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="epilepsy" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.epilepsy === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="epilepsy" value="no" onChange={this.handleChange.bind(this)} checked={this.state.epilepsy === "no"} /><br />

              <label>Mental illness</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="mentalIllness" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.mentalIllness === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="mentalIllness" value="no" onChange={this.handleChange.bind(this)} checked={this.state.mentalIllness === "no"} /><br />

              <label>Asthma </label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="asthma" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.asthma === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="asthma" value="no" onChange={this.handleChange.bind(this)} checked={this.state.asthma === "no"} /><br />

              <label>High blood pressure</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="highBloodPressure" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.highBloodPressure === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="highBloodPressure" value="no" onChange={this.handleChange.bind(this)} checked={this.state.highBloodPressure === "no"} /><br />

              <label>Phobias</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="phobias" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.phobias === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="phobias" value="no" onChange={this.handleChange.bind(this)} checked={this.state.phobias === "no"} /><br />

              <label>Heart condition</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="heartCondition" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.heartCondition === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="heartCondition" value="no" onChange={this.handleChange.bind(this)} checked={this.state.heartCondition === "no"} /><br />

              <label>Arthritis</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="arthritis" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.arthritis === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="arthritis" value="no" onChange={this.handleChange.bind(this)} checked={this.state.arthritis === "no"} /><br />

              <label>Pregnancy</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="pregnancy" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.pregnancy === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="pregnancy" value="no" onChange={this.handleChange.bind(this)} checked={this.state.pregnancy === "no"} /><br />
              {this.state.pregnancy === 'yes' ? (<section><label>How many months? &nbsp;</label> <input type="number" name="monthsPregnant" onChange={this.handleChange.bind(this)} value={this.state.monthsPregnant} /></section>) : (<section></section>)}

              <label>Diabetes</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="diabetes" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.diabetes === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="diabetes" value="no" onChange={this.handleChange.bind(this)} checked={this.state.diabetes === "no"} /><br />

              <label>Allergies</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="allergies" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.allergies === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="allergies" value="no" onChange={this.handleChange.bind(this)} checked={this.state.allergies === "no"} /><br />

              <label>Other (please specify below)</label> <br />
              <label> Yes &nbsp;</label><input type="radio" name="otherCondition" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.otherCondition === "yes"} />
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="otherCondition" value="no" onChange={this.handleChange.bind(this)} checked={this.state.otherCondition === "no"} /><br />
              <br /><label>Please give any details for your medical condition(s).</label><br />
              <textarea className="form-control" name="medicalConditionDetails" rows="5" onChange={this.handleChange.bind(this)} value={this.state.medicalConditionDetails} />
            </section>) : (<section></section>)}
            <br />
            <label>Are you allergic to anything, including drugs or medication (redundant given previous question includes allergies?)?</label> <br />
            <label> Yes &nbsp;</label><input type="radio" name="allergicToAnything" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.allergicToAnything === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="allergicToAnything" value="no" onChange={this.handleChange.bind(this)} checked={this.state.allergicToAnything === "no"} /><br />

            {this.state.allergicToAnything === 'yes' ? (<section><label>
              Please provide details about your allergy</label><br />
              <textarea className="form-control" name="allergyComments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.allergyComments} />
            </section>) : (<section></section>)}

            <br /><strong>Medication &amp; treatment</strong><br /><br />
            <label>Please give details of any medication (including dose) or current medical treatments.</label><br />
            <textarea className="form-control" name="medicationAndTreatment" rows="5" onChange={this.handleChange.bind(this)} value={this.state.medicationAndTreatment} />
            Please also email us any other relevant information, for instance an anaphylaxis/asthma management plan.<br /><br />

            <label>Do you wear glasses or contact lenses?</label> <br />
            <label> Yes &nbsp;</label><input type="radio" name="glasses" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.glasses === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="glasses" value="no" onChange={this.handleChange.bind(this)} checked={this.state.glasses === "no"} /><br />


            <br /><label>Rate your swimming ability: </label>{requiredField} &nbsp;
            <select name="swimmingAbility" value={this.state.swimmingAbility} onChange={this.handleChange.bind(this)}>
              <option value="">----</option>
              <option value="NonSwimmer">Non-swimmer</option>
              <option value="weak">Weak</option>
              <option value="reasonable">Reasonable</option>
              <option value="strong">Strong</option>
            </select><br /><br />

            <label>
              Please provide any additional information that would be helpful for managing your wellbeing {requiredField}</label><br />
            <textarea className="form-control" name="wellbeingComments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.wellbeingComments} />

            <h3 style={{ color: "#c2b49a" }}>Consent and Declaration</h3>

            <h5>Please read the following information carefully</h5>
            <br />
            <label><input type="checkbox" name="physicallyDemandingAccept" value={this.state.physicallyDemandingAccept} onChange={this.handleChange.bind(this)} />
              &nbsp;  I am aware in signing this document for my participation in an Explore trip that certain
              elements will be physically and/or emotionally demanding. I acknowledge that while the
              organisers will make every reasonable effort to minimise exposure to known risks, all
              hazards and dangers associated with these activities cannot be foreseen or may be beyond
            the control of the organisers. {requiredField}</label><br /><br />

            <label><input type="checkbox" name="riskAccept" value={this.state.riskAccept} onChange={this.handleChange.bind(this)} />
              &nbsp; I agree and I understand that the general nature of the risks may include:
              Physical and/or bodily injury including but not limited to fractures, strains, lacerations, spinal
              injuries, partial or total paralysis, head or brain injuries, loss of limb or body part; and
            Psychological injury, stress and/or emotional distress; and Associated trauma; and Death. {requiredField}</label><br /><br />

            <label><input type="checkbox" name="civilLiabilityAccept" value={this.state.civilLiabilityAccept} onChange={this.handleChange.bind(this)} />
              &nbsp; I acknowledge that the warning contained in this document constitutes a risk warning
            pursuant to the Civil Liability Act 2002. {requiredField}</label><br /><br />

            <label><input type="checkbox" name="followSafetyGuidelinesAccept" value={this.state.riskAccept} onChange={this.handleChange.bind(this)} />
              &nbsp; I agree that should I fail to comply with any safety guidelines and/or written and/or verbal
              instructions during the course of the trip this may compromise the safety and well being of
              the other participants and leaders and as a consequence I may be directed to leave the
            activity at my expense. {requiredField}</label><br /><br />

            <label><input type="checkbox" name="inherentRiskAccept" value={this.state.inherentRiskAccept} onChange={this.handleChange.bind(this)} />
              &nbsp; I the undersigned person acknowledge that there is inherent risk involved in the activities
            undertaken. {requiredField}</label><br /><br />

            <label><input type="checkbox" name="treatmentAuthorisation" value={this.state.treatmentAuthorisation} onChange={this.handleChange.bind(this)} />
              &nbsp; I authorise the organisers to arrange immediate medical attention or treatment including
              the administration via first aid qualified guides of medication such as paracetamol,
              ibuprofen, antihistamines and adrenalin. I also authorise the organiser to arrange
              emergency medical assistance if required. I accept responsibility of any expenses incurred,
            including transport. {requiredField}</label><br /><br />

            <label><input type="checkbox" name="lostEquipmentObligation" value={this.state.lostEquipmentObligation} onChange={this.handleChange.bind(this)} />
              &nbsp; I acknowledge that if I lose or damage equipment that is on loan then I am expected to pay
            for repairs or replacement of the equipment. {requiredField}</label><br /><br />

            <label>I am over 18 years of age.</label><br />
            <label> Yes &nbsp;</label><input type="radio" name="over18" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.over18 === "yes"} />
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="over18" value="no" onChange={this.handleChange.bind(this)} checked={this.state.over18 === "no"} /><br />


            {this.state.over18 === 'yes' ? (<section>
              I, [full name], declare that the information I have provided in this registration form about myself is true and correct.<br />
              Signature:<br />
              Date:
              </section>) : (<section></section>)}

            {this.state.over18 === 'no' ? (<section>
              To be completed by the participant:<br />
              I, [full name], declare that the information I have provided in this registration form about myself is true and correct.<br />
              Signature:<br />
              Date:
              <br />
              <br />
              To be completed by the participant’s parent/guardian:<br />
              I, [full name], the parent/guardian of [full name], declare that the information provided in this registration form about my child is true and correct. <br />
              I have read this registration form, the detailed trip description and the relevant difficulty information and I give permission for my child to participate in this trip.<br />
              Signature:<br />
              Date:
              </section>) : (<section></section>)}


            <br />
            <input type="submit" value="Register" className="btn btn-primary" />

            <br /><br />
            <div id="errorMessage" style={{ whiteSpace: "pre-line", fontWeight: "bold" }}>
              {this.state.formErrorMessage}
            </div>
          </form>
        </section>
      );
    }
    else if (!this.state.formValid && !registrationsOpen) {
      registrationForm = (
        <section>
          <p>{eventDates}<br />
            {eventLocation}</p>

          <h3 style={{ color: "#c2b49a" }}>Registrations for --- have now closed.</h3>
        </section>
      )
    }
    else {
      registrationForm = <div></div>
    }

    var formSubmitted;
    if (this.state.formSubmitted) {
      formSubmitted = (<div>
        {this.state.paymentType === "paypal" ?
          <PaypalConfirmation /> :
          <ChequeDDConfirmation totalCost={this.state.totalCost} surname={this.state.lastName} />}

        <br /><br />
        <input type="button" onClick={this.resetRegistrationForm} value="Register Somebody Else?" className="btn btn-primary" />
      </div>);
    }
    else {
      formSubmitted = "";
    }

    return (
      <section>
        <br />
        <section className="container">
          {formSubmitted}
          {registrationForm}


        </section>
      </section>
    );
  }
}

export default RegistrationForm;
