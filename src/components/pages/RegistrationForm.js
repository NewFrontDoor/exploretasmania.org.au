/* eslint-disable */

import React, { Component } from 'react';
import _ from 'lodash';
import validator from 'validator';
import {escape} from 'he'

//import PaypalConfirmation from './confirmations/Paypal';
//import ChequeDDConfirmation from './confirmations/ChequeDD';

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

  constructor(){
    super();
    this.state = {firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  address: "",
                  suburb: "",
                  state: "",
                  age: "",
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
                  nonChristianFriend: ""}

    this.resetRegistrationForm = this.resetRegistrationForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetRegistrationForm(){
    this.setState({firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  address: "",
                  suburb: "",
                  state: "",
                  age: "",
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
                  nonChristianFriend: ""})
  }

  handleChange(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    var change = {};
    change[e.target.name] = value;
    this.setState(change);
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    var errorMessage = "";
    let totalCost = 0;

    if(validator.isEmpty(this.state.firstName))
    {
      errorMessage += "Please enter your first name.\n";
    }
    if(validator.isEmpty(this.state.lastName))
    {
      errorMessage += "Please enter your last name.\n";
    }
    if(validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email))
    {
      errorMessage += "Please enter a valid email address.\n";
    }
    if(validator.isEmpty(this.state.phone))
    {
      errorMessage += "Please enter a phone number.\n";
    }
    if(validator.isEmpty(this.state.address))
    {
      errorMessage += "Please enter your address.\n";
    }
    if(validator.isEmpty(this.state.suburb))
    {
      errorMessage += "Please enter your suburb.\n";
    }
    if(validator.isEmpty(this.state.state))
    {
      errorMessage += "Please select your state.\n";
    }
    if(validator.isEmpty(this.state.age))
    {
      errorMessage += "Please select your age range.\n";
    }
    if(validator.isEmpty(this.state.postcode))
    {
      errorMessage += "Please enter your postcode.\n";
    }
    if(validator.isEmpty(this.state.dietary))
    {
      errorMessage += "Please enter your dietary requirements.\n";
    }
    if(validator.isEmpty(this.state.comments))
    {
      errorMessage += "Please enter any relevant comments you may have\n";
    }


    if(errorMessage !== "")
    {
      this.setState({formErrorMessage:errorMessage});
      return false;
    }
    else
    {
      if(this.state.registrationType === "day"){
        //sum total cost
        if(this.state.friday){totalCost += dayPrice;}
        if(this.state.saturday){totalCost += dayPrice;}
        if(this.state.sunday){totalCost += dayPrice;}

        if(this.state.fridayDinner){totalCost += dinnerCost}
        if(this.state.saturdayBreakfast){totalCost += breakfastCost}
        if(this.state.saturdayLunch){totalCost += lunchCost}
        if(this.state.saturdayDinner){totalCost += dinnerCost}
        if(this.state.sundayBreakfast){totalCost += breakfastCost}
        if(this.state.sundayLunch){totalCost += lunchCost}


      }
      else{
          totalCost = currentFullCost;
      }

      this.setState({totalCost:totalCost});
      this.setState({formValid:true});
      console.log(this.state);
      /*handle posting to drupal and show success message*/
      var form = new FormData();
      form.append("webform", "8e070048-9aaf-4371-a0de-35bb5c3d28e6");
      form.append("submission[data][1][values][0]", escape(this.state.firstName));
      form.append("submission[data][2][values][0]", escape(this.state.lastName));
      form.append("submission[data][3][values][0]", escape(this.state.email));
      form.append("submission[data][4][values][0]", escape(this.state.phone));
      form.append("submission[data][5][values][0]", escape(this.state.address));
      form.append("submission[data][6][values][0]", escape(this.state.suburb));
      form.append("submission[data][7][values][0]", escape(this.state.state));

      form.append("submission[data][21][values][0]", escape(this.state.age));
      form.append("submission[data][8][values][0]", escape(this.state.postcode));
      form.append("submission[data][9][values][0]", escape(this.state.registrationType));



      if(this.state.registrationType === 'full' || this.state.registrationType === 'earlyBird'){
        form.append("submission[data][10][values][0]", escape(this.state.weekendDinnerAttendance));
        form.append("submission[data][11][values][0]", 'friday');
        form.append("submission[data][11][values][1]", 'saturday');
        form.append("submission[data][11][values][2]", 'sunday');

        if(this.state.weekendDinnerAttendance)
        {
          form.append("submission[data][12][values][0]", 'fridayDinner');
          form.append("submission[data][12][values][1]", 'saturdayBreakfast');
          form.append("submission[data][12][values][2]", 'saturdayLunch');
          form.append("submission[data][12][values][3]", 'saturdayDinner');
          form.append("submission[data][12][values][4]", 'sundayBreakfast');
          form.append("submission[data][12][values][5]", 'sundayLunch');
        }
        else{
          form.append("submission[data][12][values][0]", 'saturdayBreakfast');
          form.append("submission[data][12][values][1]", 'saturdayLunch');
          form.append("submission[data][12][values][2]", 'saturdayDinner');
          form.append("submission[data][12][values][3]", 'sundayBreakfast');
          form.append("submission[data][12][values][4]", 'sundayLunch');
        }


      }
      else{
        let i = 0;
        if(this.state.friday)
        {
          form.append("submission[data][11][values]["+i+"0]", 'friday');
          i++;
        }
        if(this.state.saturday)
        {
          form.append("submission[data][11][values]["+i+"0]", 'saturday');
          i++;
        }
        if(this.state.sunday)
        {
          form.append("submission[data][11][values]["+i+"0]", 'sunday');
          i++;
        }

        let j = 0;
        if(this.state.fridayDinner){
          form.append("submission[data][12][values]["+j+"]", 'fridayDinner');
          form.append("submission[data][10][values][0]", 'yes');
          j++;
        }
        else{
          form.append("submission[data][10][values][0]", 'no');
        }
        if(this.state.saturdayBreakfast){
          form.append("submission[data][12][values]["+j+"]", 'saturdayBreakfast');
          j++;
        }
        if(this.state.saturdayLunch){
          form.append("submission[data][12][values]["+j+"]", 'saturdayLunch');
          j++;
        }
        if(this.state.saturdayDinner){
          form.append("submission[data][12][values]["+j+"]", 'saturdayDinner');
          j++;
        }
        if(this.state.sundayBreakfast){
          form.append("submission[data][12][values]["+j+"]", 'sundayBreakfast');
          j++;
        }
        if(this.state.sundayLunch){
          form.append("submission[data][12][values]["+j+"]", 'sundayLunch');
          j++;
        }
      }

      form.append("submission[data][13][values][0]", escape(this.state.paymentType));
      form.append("submission[data][14][values][0]", escape(this.state.church));
      form.append("submission[data][15][values][0]", escape(this.state.dietary));
      form.append("submission[data][16][values][0]", escape(this.state.comments));
      form.append("submission[data][17][values][0]", totalCost);

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
    if(!this.state.formValid && registrationsOpen){
      registrationForm = (
        <section>
          <p>{eventDates}<br/>
          {eventLocation}</p>

          <br />
          <form onSubmit={this.handleSubmit}>

            <h3 style={{color: "#a3c95c"}}>Contact Information</h3>

            <label>First Name </label>{requiredField}
            <input className="form-control form-text required" type="text" name="firstName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.firstName} />

            <label>Last Name </label>{requiredField}
            <input className="form-control form-text required" type="text" name="lastName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.lastName} />

            <label>Preferred Name </label>{requiredField}
            <input className="form-control form-text required" type="text" name="lastName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.preferredName} />

            <label>Date of Birth -- Calendar picker to be addeed </label>{requiredField}<br/><br/>

            <label>Age </label>{requiredField} (Any need for this when there is already DOB requested??)<br />
            <select name="age" value={this.state.age} onChange={this.handleChange.bind(this)}>
            <option value="">----</option>
              <option value="under18">Under 18</option>
              <option value="18to24">18-24</option>
              <option value="25-40  ">25-40</option>
              <option value="40-60">40-60</option>
              <option value="over60">60+</option>
            </select><br/><br />

            <label>Email </label>{requiredField}
            <input className="form-control form-text required" type="text" name="email" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.email} />

            <label>Contact Number </label>{requiredField}
            <input className="form-control form-text required" type="text" name="phone" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.phone} />

            <label>Address </label>{requiredField}
            <input className="form-control form-text required" type="text" name="address" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.address} />

            <label>Suburb </label>{requiredField}
            <input className="form-control form-text required" type="text" name="suburb" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.suburb} />

            {/*
            <label>State</label>{requiredField}<br/>
            <select name="state" value={this.state.state} onChange={this.handleChange.bind(this)}>
            <option value="">----</option>
              <option value="act">Australian Capital Territory</option>
              <option value="nsw">New South Wales</option>
              <option value="nt">Northern Territory</option>
              <option value="qld">Queensland</option>
              <option value="sa">South Australia</option>
              <option value="tas">Tasmania</option>
              <option value="wa">Western Australia</option>
            </select><br /><br />*/}

            <label>Postcode </label>{requiredField}
            <input className="form-control form-text" type="text" name="postcode" size="4" maxLength="4" onChange={this.handleChange.bind(this)} value={this.state.postcode} /><br/>

            <h3 style={{color: "#a3c95c"}}>Trip Details</h3>
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

            <h3 style={{color: "#a3c95c"}}>Catering Information</h3>

            <label>
              Please specify any dietary requirements {requiredField} </label><br/>
                <textarea className="form-control" name="dietary" rows="5" onChange={this.handleChange.bind(this)} value={this.state.dietary} />
                <span style={{fontSize: "14px"}}>Please write N/A if none</span>
                <br/><br/>
              Please indicate your hot drink preferences:<br />

              I would appreciate a hot drink:<br />
              <br/>
              <label>With Breakfast </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="drinkWithBreakfast" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithBreakfast === "yes"}/>
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="drinkWithBreakfast" value="no" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithBreakfast === "no"}/>
              {this.state.drinkWithBreakfast === 'yes' ? (<section>Select your hot drink preference: Multiple options can be selected<br/><input type="checkbox" name="breakfastTea" value={this.state.breakfastTea} onChange={this.handleChange.bind(this)} />&nbsp;Tea&nbsp;<br/>
              <input type="checkbox" name="breakfastCoffee" value={this.state.breakfastCoffee} onChange={this.handleChange.bind(this)} />&nbsp;Coffee&nbsp;<br/>
              <input type="checkbox" name="breakfastHotChocolate" value={this.state.breakfastHotChocolate} onChange={this.handleChange.bind(this)} />&nbsp;Hot Chocolate&nbsp;<br/>
                </section>) : (<section></section>)}
              <br />
              <label>With Supper </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="drinkWithSupper" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithSupper === "yes"}/>
              <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="drinkWithSupper" value="no" onChange={this.handleChange.bind(this)} checked={this.state.drinkWithSupper === "no"}/><br/>

              {this.state.drinkWithSupper === 'yes' ? (<section>Select your hot drink preference: Multiple options can be selected<br/><input type="checkbox" name="supperTea" value={this.state.supperTea} onChange={this.handleChange.bind(this)} />&nbsp;Tea&nbsp;<br/>
              <input type="checkbox" name="supperCoffee" value={this.state.supperCoffee} onChange={this.handleChange.bind(this)} />&nbsp;Coffee&nbsp;<br/>
              <input type="checkbox" name="supperHotChocolate" value={this.state.supperHotChocolate} onChange={this.handleChange.bind(this)} />&nbsp;Hot Chocolate&nbsp;<br/></section>) : (<section></section>)}


            <h3 style={{color: "#a3c95c"}}>Religious Background</h3>

            <label>Do you identify as “Christian”? </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="idAsChristian" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.idAsChristian === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="idAsChristian" value="no" onChange={this.handleChange.bind(this)} checked={this.state.idAsChristian === "no"}/>
<br/><br/>
            {this.state.idAsChristian === 'yes'? (<section>
            <label>What church do you currently attend? </label>
             <input className="form-control form-text required" type="text" name="church" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.church} />
             <label>What is the name of the non-Christian friend coming on this trip with you?</label>
             <input className="form-control form-text required" type="text" name="nonChristianFriend" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.nonChristianFriend} />
             </section>) :
             (<section>
               <label>Do you identify as belonging to another religious group? </label> &nbsp; <label> Yes &nbsp;</label><input type="radio" name="idAsAnotherReligion" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.idAsAnotherReligion === "yes"}/>
               <label>&nbsp;&nbsp; No &nbsp;</label><input type="radio" name="idAsAnotherReligion" value="no" onChange={this.handleChange.bind(this)} checked={this.state.idAsAnotherReligion === "no"}/><br />
             </section>)}
             <br/>{this.state.idAsAnotherReligion === 'yes' ? (<section>
               <label>Which religion?</label><input className="form-control form-text required" type="text" name="otherReligion" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.otherReligion} />
             <br/></section>) : (<section></section>) }

            Briefly describe what “faith” means to you
            <input className="form-control form-text required" type="text" name="faithMeaning" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.faithMeaning} />

            <h3 style={{color: "#a3c95c"}}>Medical Information</h3>
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

            <label>Do you have any medical conditions</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="medicalConditions" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.medicalConditions === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="medicalConditions" value="no" onChange={this.handleChange.bind(this)} checked={this.state.medicalConditions === "no"}/><br/>


            {this.state.medicalConditions === 'yes' ? (<section><label>Anaphylaxis </label><br/>
            <label> Yes &nbsp;</label><input type="radio" name="anaphylaxis" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.anaphylaxis === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="anaphylaxis" value="no" onChange={this.handleChange.bind(this)} checked={this.state.anaphylaxis === "no"}/><br/>

            <label>Epilepsy </label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="epilepsy" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.epilepsy === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="epilepsy" value="no" onChange={this.handleChange.bind(this)} checked={this.state.epilepsy === "no"}/><br/>

            <label>Mental illness</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="mentalIllness" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.mentalIllness === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="mentalIllness" value="no" onChange={this.handleChange.bind(this)} checked={this.state.mentalIllness === "no"}/><br/>

            <label>Asthma </label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="asthma" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.asthma === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="asthma" value="no" onChange={this.handleChange.bind(this)} checked={this.state.asthma === "no"}/><br/>

            <label>High blood pressure</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="highBloodPressure" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.highBloodPressure === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="highBloodPressure" value="no" onChange={this.handleChange.bind(this)} checked={this.state.highBloodPressure === "no"}/><br/>

            <label>Phobias</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="phobias" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.phobias === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="phobias" value="no" onChange={this.handleChange.bind(this)} checked={this.state.phobias === "no"}/><br/>

            <label>Heart condition</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="heartCondition" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.heartCondition === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="heartCondition" value="no" onChange={this.handleChange.bind(this)} checked={this.state.heartCondition === "no"}/><br/>

            <label>Arthritis</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="arthritis" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.arthritis === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="arthritis" value="no" onChange={this.handleChange.bind(this)} checked={this.state.arthritis === "no"}/><br/>

            <label>Pregnancy</label> <br/>
            If yes: number of months<br />
            <label> Yes &nbsp;</label><input type="radio" name="pregnancy" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.pregnancy === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="pregnancy" value="no" onChange={this.handleChange.bind(this)} checked={this.state.pregnancy === "no"}/><br/>

            <label>Diabetes</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="diabetes" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.diabetes === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="diabetes" value="no" onChange={this.handleChange.bind(this)} checked={this.state.diabetes === "no"}/><br/>

            <label>Allergies</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="allergies" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.allergies === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="allergies" value="no" onChange={this.handleChange.bind(this)} checked={this.state.allergies === "no"}/><br/>

            <label>Other</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="otherCondition" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.otherCondition === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="otherCondition" value="no" onChange={this.handleChange.bind(this)} checked={this.state.otherCondition === "no"}/><br/>
            If yes: please specify<br /> Please give details of any medical condition<br />
</section>) : (<section></section>)}

            <label>Are you allergic to anything, including drugs or medication?</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="allergicToAnything" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.allergicToAnything === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="allergicToAnything" value="no" onChange={this.handleChange.bind(this)} checked={this.state.allergicToAnything === "no"}/><br/>

            {this.state.allergicToAnything === 'yes' ? (<section><label>
              Please provide details about your allergy</label><br/>
              <textarea className="form-control" name="allergyComments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.allergyComments} />
</section>) : (<section></section>)}

            Medication &amp; treatment:<br />
            Please give details of any medication (including dose) or current medical treatments. <br />
            Please also email us any other relevant information, for instance an anaphylaxis/asthma management plan.<br /><br />

            <label>Do you wear glasses or contact lenses?</label> <br/>
            <label> Yes &nbsp;</label><input type="radio" name="glasses" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.glasses === "yes"}/>
            <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="glasses" value="no" onChange={this.handleChange.bind(this)} checked={this.state.glasses === "no"}/><br/>


            <br /><label>Rate your swimming ability: </label>{requiredField} &nbsp;
            <select name="swimmingAbility" value={this.state.swimmingAbility} onChange={this.handleChange.bind(this)}>
            <option value="">----</option>
              <option value="NonSwimmer">Non-swimmer</option>
              <option value="weak">Weak</option>
              <option value="reasonable">Reasonable</option>
              <option value="strong">Strong</option>
            </select><br /><br />

            <label>
              Please provide any additional information that would be helpful for managing your wellbeing {requiredField}</label><br/>
              <textarea className="form-control" name="wellbeingComments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.wellbeingComments} />

            <h3 style={{color: "#a3c95c"}}>Consent and Declaration</h3>


            <label>
              Other Comments {requiredField}</label><br/>
              <textarea className="form-control" name="comments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.comments} />
            <br/>
            <span style={{fontSize: "14px"}}>
              Please add any other comments that you would like to pass onto the organisers.
            </span>
            <br/><br/>

            <input type="submit" value="Register" className="btn btn-primary"/>

            <br/><br/>
            <div id="errorMessage" style={{whiteSpace: "pre-line", fontWeight: "bold"}}>
              {this.state.formErrorMessage}
            </div>
          </form>
        </section>
      );
    }
    else if (!this.state.formValid && !registrationsOpen){
      registrationForm = (
        <section>
          <p>{eventDates}<br/>
          Camp Clayton, Ulverstone</p>
          <p>Registrations Close 2nd September 2018</p>

          <h3 style={{color: "#a3c95c"}}>Registrations for --- have now closed.</h3>
        </section>
    )
    }
    else
    {
      registrationForm = <div></div>
    }

    var formSubmitted;
    if(this.state.formSubmitted)
    {
      formSubmitted = ( <div>
                          {this.state.paymentType === "paypal" ?
                            <PaypalConfirmation /> :
                            <ChequeDDConfirmation totalCost={this.state.totalCost} surname={this.state.lastName}/>}

                      <br /><br />
                      <input type="button" onClick={this.resetRegistrationForm} value="Register Somebody Else?" className="btn btn-primary"/>
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
