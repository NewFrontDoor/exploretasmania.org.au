import React, { Component } from 'react';
import validator from 'validator';
import { escape } from 'he'

import DatePicker from 'react-date-picker'

import { postToWebform } from '../../utils/postToAPI.js';

const registrationCloseDate = new Date('2020-12-30');
const registrationsOpen = registrationCloseDate.getTime() > Date.now();

const dateFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };


class RegistrationFormTest extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            preferredName: "",
            address: "",
            email: "",
            phone: "",
            readDescription: false,
            readDifficultyInfo: false,
            agreeToCall: false,
            agreeToPack: false,
            agreeToHaveChecked: false,
            dietaryRequirements: "",
            drinkWithBreakfast: "",
            breakfastTea: false,
            breakfastCoffee: false,
            breakfastHotChocolate: false,
            drinkWithSupper: "",
            supperTea: false,
            supperCoffee: false,
            supperHotChocolate: false,
            idAsChristian: "",
            church: "",
            nonChristianFriend: "",
            idAsAnotherReligion: "",
            otherReligion: "",
            faithMeaning: "",
            contactName: "",
            contactEmail: "",
            contactRelationship: "",
            contactPhone: "",
            contactPhoneAlternate: "",
            doctorsName: "",
            doctorsPhone: "",
            medicalConditions: "",
            anaphylaxis: "",
            epilepsy: "",
            mentalIllness: "",
            asthma: "",
            highBloodPressure: "",
            phobias: "",
            heartCondition: "",
            arthritis: "",
            pregnancy: "",
            monthsPregnant: 0,
            diabetes: "",
            allergies: "",
            otherCondition: "",
            medicalConditionDetails: "",
            allergicToAnything: "",
            allergyComments: "",
            medicationAndTreatment: "",
            glasses: "",
            swimmingAbility: "",
            wellbeingComments: "",
            physicallyDemandingAccept: false,
            riskAccept: false,
            civilLiabilityAccept: false,
            followSafetyGuidelinesAccept: false,
            inherentRiskAccept: false,
            treatmentAuthorisation: false,
            lostEquipmentObligation: false,
            over18: null,
            fullNameDeclaration: "[Your Full Name]",
            declarationDate: null,
            formErrorMessage: "",
            formValid: false,
            formSubmitted: false,
            canUseMyPictures: false,
            canTakePictures: false
        }

        this.resetRegistrationForm = this.resetRegistrationForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetRegistrationForm() {
        this.setState({
            firstName: "",
            lastName: "",
            preferredName: "",
            address: "",
            email: "",
            phone: "",
            readDescription: false,
            readDifficultyInfo: false,
            agreeToCall: false,
            agreeToPack: false,
            agreeToHaveChecked: false,
            dietaryRequirements: "",
            drinkWithBreakfast: "",
            breakfastTea: false,
            breakfastCoffee: false,
            breakfastHotChocolate: false,
            drinkWithSupper: "",
            supperTea: false,
            supperCoffee: false,
            supperHotChocolate: false,
            idAsChristian: "",
            church: "",
            nonChristianFriend: "",
            idAsAnotherReligion: "",
            otherReligion: "",
            faithMeaning: "",
            contactName: "",
            contactEmail: "",
            contactRelationship: "",
            contactPhone: "",
            contactPhoneAlternate: "",
            doctorsName: "",
            doctorsPhone: "",
            medicalConditions: "",
            anaphylaxis: "",
            epilepsy: "",
            mentalIllness: "",
            asthma: "",
            highBloodPressure: "",
            phobias: "",
            heartCondition: "",
            arthritis: "",
            pregnancy: "",
            monthsPregnant: 0,
            diabetes: "",
            allergies: "",
            otherCondition: "",
            medicalConditionDetails: "",
            allergicToAnything: "",
            allergyComments: "",
            medicationAndTreatment: "",
            glasses: "",
            swimmingAbility: "",
            wellbeingComments: "",
            physicallyDemandingAccept: false,
            riskAccept: false,
            civilLiabilityAccept: false,
            followSafetyGuidelinesAccept: false,
            inherentRiskAccept: false,
            treatmentAuthorisation: false,
            lostEquipmentObligation: false,
            over18: null,
            fullNameDeclaration: "[Your Full Name]",
            declarationDate: null,
            formErrorMessage: "",
            formValid: false,
            formSubmitted: false,
            canUseMyPictures: false,
            canTakePictures: false
        })
    }

    handleChange(e) {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        var change = {};
        change[e.target.name] = value;
        this.setState(change);
    }

    updateDeclarationDate = date => this.setState({ declarationDate: date })

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        var errorMessage = "";

        /*Contact Information validation*/
        if (validator.isEmpty(this.state.firstName)) {
            errorMessage += "Please enter your first name.\n";
        }
        if (validator.isEmpty(this.state.lastName)) {
            errorMessage += "Please enter your last name.\n";
        }
        if (validator.isEmpty(this.state.address)) {
            errorMessage += "Please enter your address.\n";
        }
        if (validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email)) {
            errorMessage += "Please enter a valid email address.\n";
        }
        if (validator.isEmpty(this.state.phone)) {
            errorMessage += "Please enter your contact number.\n";
        }

        /*Trip Details Validation*/
        if (this.state.readDescription !== true) {
            errorMessage += "Please confirm that you have read the detailed description for this trip.\n";
        }
        if (this.state.readDifficultyInfo !== true) {
            errorMessage += "Please confirm that you have read the relevant difficulty information for this trip.\n";
        }
        if (this.state.agreeToCall !== true) {
            errorMessage += "Please confirm that you agree to receive a phone call from a guide to discuss the details of this trip.\n";
        }
        if (this.state.agreeToPack !== true) {
            errorMessage += "Please confirm that you agree to pack in accordance with the packing list provided in the detailed trip information.\n";
        }
        if (this.state.agreeToHaveChecked !== true) {
            errorMessage += "Please confirm that you agree to have a guide check your gear prior to departing for the trip .\n";
        }

        /* Catering information validation*/
        if (validator.isEmpty(this.state.dietaryRequirements)) {
            errorMessage += "Please specify whether you have any dietary requirements.\n";
        }

        /* Medical information validation */
        if (validator.isEmpty(this.state.contactName)) {
            errorMessage += "Please enter the name of your emergency contact.\n";
        }
        if (validator.isEmpty(this.state.contactRelationship)) {
            errorMessage += "Please enter your relationship to your emergency contact.\n";
        }
        if (validator.isEmpty(this.state.contactPhone)) {
            errorMessage += "Please enter the primary contact number for your emergency contact.\n";
        }
        if (validator.isEmpty(this.state.contactEmail) || !validator.isEmail(this.state.contactEmail)) {
            errorMessage += "Please enter a valid email address for your emergency contact.\n";
        }

        if (validator.isEmpty(this.state.doctorsName)) {
            errorMessage += "Please enter the name of your doctor.\n";
        }
        if (validator.isEmpty(this.state.doctorsPhone)) {
            errorMessage += "Please enter the contact number for your doctor.\n";
        }
        if (this.state.medicalConditions === null) {
            errorMessage += "Please state whether or not you have any medical conditions.\n";
        }
        if (this.state.medicalConditions === "yes" && validator.isEmpty(this.state.medicalConditionDetails)) {
            errorMessage += "Please enter specific details for your medical condition(s).\n";
        }
        if (this.state.allergicToAnything === null) {
            errorMessage += "Please state whether or not you have any allergies.\n";
        }
        if (this.state.allergicToAnything === "yes" && validator.isEmpty(this.state.allergyComments)) {
            errorMessage += "Please enter specific details for each of your allergies.\n";
        }
        if (validator.isEmpty(this.state.medicationAndTreatment)) {
            errorMessage += "Please enter the details of your medication or medical treatment requirements.\n";
        }

        if (this.state.glasses === null) {
            errorMessage += "Please state whether or not you wear glasses or contact lenses.\n";
        }
        if (validator.isEmpty(this.state.swimmingAbility)) {
            errorMessage += "Please rate the level of your swimming ability.\n";
        }


        /* Consent and Declaration */
        if (!this.state.physicallyDemandingAccept) {
            errorMessage += "Please read and confirm that you are giving consent to the above statement regarding unforseen risks, hazards and dangers that may arise for this trip.\n";
        }
        if (!this.state.riskAccept) {
            errorMessage += "Please read and confirm that you are giving consent to the above statement regarding the nature of risks that may arise for this trip.\n";
        }
        if (!this.state.civilLiabilityAccept) {
            errorMessage += "Please confirm that you acknowledge that the warning contained in this document constitutes a risk warning pursuant to the Civil Liability Act 2002.\n";
        }
        if (!this.state.followSafetyGuidelinesAccept) {
            errorMessage += "Please confirm that you acknowledge that if you fail to follow safety instructions that you may be directed to leave the activity at your expense.\n";
        }
        if (!this.state.inherentRiskAccept) {
            errorMessage += "Please confirm that you acknowledge that there is inherent risk involved in the activities undertaken. \n";
        }
        if (!this.state.treatmentAuthorisation) {
            errorMessage += "Please confirm your authorisation for organisers to provide you with immediate medical aid and that you accept the responsibility to cover any costs incurred. \n";
        }
        if (!this.state.lostEquipmentObligation) {
            errorMessage += "Please confirm that you acknowledge that if you lose or damage equipment that is on loan then you will be expected to pay for repairs or replacement of the equipment.  \n";
        }


        if (this.props.over18 !== false) {
            if (this.state.over18 === null) {
                errorMessage += "Please confirm that you are over 18 years of age.\n";
            }

            if (this.state.over18 === "yes") {
                if (this.state.fullNameDeclaration === "[Your Full Name]" || validator.isEmpty(this.state.fullNameDeclaration)) {
                    errorMessage += "Please enter your full name in the declaration above.\n";
                }
                if (this.state.declarationDate === null) {
                    errorMessage += "Please select the date of your declaration and consent to the above information given.\n";
                }
            }
            if (this.state.over18 === "no") {
                errorMessage += "This is an adult trip – you must be over 18 to attend.\n";
            }
        }
        else {
            if (this.state.fullNameDeclaration === "[Your Full Name]" || validator.isEmpty(this.state.fullNameDeclaration)) {
                errorMessage += "Please enter your full name in the declaration above.\n";
            }
            if (this.state.declarationDate === null) {
                errorMessage += "Please select the date of your declaration and consent to the above information given.\n";
            }
        }



        if (errorMessage !== "") {
            this.setState({ formErrorMessage: errorMessage });
            return false;
        }
        else {
            this.setState({ formValid: true });
            console.log(this.state);
            /*handle posting to drupal and show success message*/
            var form = new FormData();
            form.append("webform", this.props.webformUUID);
            form.append("submission[data][1][values][0]", escape(this.state.firstName).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][2][values][0]", escape(this.state.lastName).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][3][values][0]", escape(this.state.preferredName).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][4][values][0]", escape(this.state.address).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][5][values][0]", escape(this.state.email).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][6][values][0]", escape(this.state.phone).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][7][values][0]", this.state.readDescription);
            form.append("submission[data][8][values][0]", this.state.readDifficultyInfo);
            form.append("submission[data][9][values][0]", this.state.agreeToCall);
            form.append("submission[data][10][values][0]", this.state.agreeToPack);
            form.append("submission[data][11][values][0]", this.state.agreeToHaveChecked);
            form.append("submission[data][12][values][0]", escape(this.state.dietaryRequirements).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][13][values][0]", this.state.drinkWithBreakfast);

            if (this.state.drinkWithBreakfast === "yes") {
                let i = 0;
                if (this.state.breakfastTea) {
                    form.append("submission[data][14][values][" + i + "0]", 'breakfastTea');
                    i++;
                }
                if (this.state.breakfastCoffee) {
                    form.append("submission[data][14][values][" + i + "0]", 'breakfastCoffee');
                    i++;
                }
                if (this.state.breakfastHotChocolate) {
                    form.append("submission[data][14][values][" + i + "0]", 'breakfastHotChocolate');
                    i++;
                }
            }

            form.append("submission[data][15][values][0]", escape(this.state.drinkWithSupper));

            if (this.state.drinkWithSupper === "yes") {
                let i = 0;
                if (this.state.supperTea) {
                    form.append("submission[data][16][values][" + i + "0]", 'supperTea');
                    i++;
                }
                if (this.state.supperCoffee) {
                    form.append("submission[data][16][values][" + i + "0]", 'supperCoffee');
                    i++;
                }
                if (this.state.supperHotChocolate) {
                    form.append("submission[data][16][values][" + i + "0]", 'supperHotChocolate');
                    i++;
                }
            }

            form.append("submission[data][17][values][0]", this.state.idAsChristian);
            form.append("submission[data][18][values][0]", escape(this.state.church).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][19][values][0]", escape(this.state.nonChristianFriend).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][20][values][0]", this.state.idAsAnotherReligion);
            form.append("submission[data][21][values][0]", escape(this.state.otherReligion).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][22][values][0]", escape(this.state.faithMeaning).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][23][values][0]", escape(this.state.contactName).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][24][values][0]", escape(this.state.contactRelationship).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][25][values][0]", escape(this.state.contactPhone).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][26][values][0]", escape(this.state.contactPhoneAlternate).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][27][values][0]", escape(this.state.contactEmail).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][28][values][0]", escape(this.state.doctorsName).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][29][values][0]", escape(this.state.doctorsPhone).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][30][values][0]", escape(this.state.medicalConditions).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));

            if (this.state.medicalConditions === "yes") {
                form.append("submission[data][31][values][0]", this.state.anaphylaxis);
                form.append("submission[data][32][values][0]", this.state.epilepsy);
                form.append("submission[data][33][values][0]", this.state.mentalIllness);
                form.append("submission[data][34][values][0]", this.state.asthma);
                form.append("submission[data][35][values][0]", this.state.highBloodPressure);
                form.append("submission[data][36][values][0]", this.state.phobias);
                form.append("submission[data][37][values][0]", this.state.heartCondition);
                form.append("submission[data][38][values][0]", this.state.arthritis);
                form.append("submission[data][39][values][0]", this.state.pregnancy);
                form.append("submission[data][40][values][0]", this.state.monthsPregnant);
                form.append("submission[data][41][values][0]", this.state.diabetes);
                form.append("submission[data][42][values][0]", this.state.allergies);
                form.append("submission[data][43][values][0]", this.state.otherCondition);
                form.append("submission[data][44][values][0]", this.state.medicalConditionDetails);
            }

            form.append("submission[data][45][values][0]", this.state.allergicToAnything);
            if (this.state.allergicToAnything === "yes") {
                form.append("submission[data][46][values][0]", escape(this.state.allergyComments).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            }

            form.append("submission[data][47][values][0]", escape(this.state.medicationAndTreatment).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][48][values][0]", this.state.glasses);
            form.append("submission[data][49][values][0]", this.state.swimmingAbility);
            form.append("submission[data][50][values][0]", escape(this.state.wellbeingComments).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));

            form.append("submission[data][51][values][0]", this.state.physicallyDemandingAccept);
            form.append("submission[data][52][values][0]", this.state.riskAccept);
            form.append("submission[data][53][values][0]", this.state.civilLiabilityAccept);
            form.append("submission[data][54][values][0]", this.state.followSafetyGuidelinesAccept);
            form.append("submission[data][55][values][0]", this.state.inherentRiskAccept);
            form.append("submission[data][56][values][0]", this.state.treatmentAuthorisation);
            form.append("submission[data][57][values][0]", this.state.lostEquipmentObligation);

            form.append("submission[data][58][values][0]", this.state.over18);
            form.append("submission[data][59][values][0]", escape(this.state.fullNameDeclaration).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
            form.append("submission[data][60][values][0]", this.state.declarationDate.toLocaleDateString("en-AU", dateFormatOptions));
            form.append("submission[data][61][values][0]", this.state.canTakePictures);
            form.append("submission[data][62][values][0]", this.state.canUseMyPictures);


            var that = this;
            postToWebform(form, function (data) {
                that.setState({ submissionID: data.sid })
                that.setState({ formSubmitted: true })
            })
        }

    }

    render() {

        var requiredField = (<span className="form-required" title="This field is required.">*</span>);
        var registrationForm;
        if (!this.state.formValid && registrationsOpen) {
            registrationForm = (
                <section>
                    <p>{this.props.eventDates}<br />
                        {this.props.eventLocation}</p>

                    <br />
                    <form onSubmit={this.handleSubmit}>

                        <h3 style={{ color: "#c2b49a" }}>Contact Information</h3>

                        <label>First Name </label>{requiredField}
                        <input className="form-control form-text required" type="text" name="firstName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.firstName} />

                        <label>Last Name </label>{requiredField}
                        <input className="form-control form-text required" type="text" name="lastName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.lastName} />

                        <label>Preferred Name </label>
                        <input className="form-control form-text required" type="text" name="preferredName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.preferredName} />

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
                        <textarea className="form-control" name="dietaryRequirements" rows="5" onChange={this.handleChange.bind(this)} value={this.state.dietary} />
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

                        Briefly describe what “faith” means to you (optional)
            <input className="form-control form-text required" type="text" name="faithMeaning" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.faithMeaning} />

                        <h3 style={{ color: "#c2b49a" }}>Medical Information</h3>
                        <h5>It is vital that you fill this form accurately in case of an incident that requires medical attention.</h5><br />
                        <strong>Emergency contact details</strong><br /><br />
                        Name{requiredField}<br />
                        <input className="form-control form-text required" type="text" name="contactName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactName} />
                        Relationship to you (eg. Wife, mother){requiredField}
                        <input className="form-control form-text required" type="text" name="contactRelationship" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactRelationship} />
                        Phone number{requiredField}<br />
                        <input className="form-control form-text required" type="text" name="contactPhone" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactPhone} />
                        Alternative phone number<br />
                        <input className="form-control form-text required" type="text" name="contactPhoneAlternate" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactPhoneAlternate} />
                        Email for emergency contact{requiredField}<br />
                        <input className="form-control form-text required" type="text" name="contactEmail" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.contactEmail} />
                        <br />
                        <strong>Doctor’s details</strong><br /><br />
                        Doctors name: {requiredField}<br />
                        <input className="form-control form-text required" type="text" name="doctorsName" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.doctorsName} />
                        Doctors phone number: {requiredField}<br />
                        <input className="form-control form-text required" type="text" name="doctorsPhone" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.doctorsPhone} />

                        <br />
                        <label>Do you have any medical conditions {requiredField}</label> <br />
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
                            <br /><label>Please give any relevant details for your medical condition(s).</label> {requiredField}<br />
                            <textarea className="form-control" name="medicalConditionDetails" rows="5" onChange={this.handleChange.bind(this)} value={this.state.medicalConditionDetails} />
                        </section>) : (<section></section>)}
                        <br />
                        <label>Are you allergic to anything, including drugs or medication? {requiredField}</label> <br />
                        <label> Yes &nbsp;</label><input type="radio" name="allergicToAnything" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.allergicToAnything === "yes"} />
                        <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="allergicToAnything" value="no" onChange={this.handleChange.bind(this)} checked={this.state.allergicToAnything === "no"} /><br />

                        {this.state.allergicToAnything === 'yes' ? (<section><label>
                            Please provide details about your allergy</label> {requiredField}<br />
                            <textarea className="form-control" name="allergyComments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.allergyComments} />
                        </section>) : (<section></section>)}

                        <br /><strong>Medication &amp; treatment</strong><br /><br />
                        <label>Please give details of any medication (including dose) or current medical treatments. {requiredField}</label><br />
                        Please also email us any other relevant information, for instance an anaphylaxis/asthma management plan. <br />
                        <textarea className="form-control" name="medicationAndTreatment" rows="5" onChange={this.handleChange.bind(this)} value={this.state.medicationAndTreatment} />
                        <span style={{ fontSize: "14px" }}>Please write N/A if none</span><br /><br />


                        <label>Do you wear glasses or contact lenses? {requiredField}</label> <br />
                        <label> Yes &nbsp;</label><input type="radio" name="glasses" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.glasses === "yes"} />
                        <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="glasses" value="no" onChange={this.handleChange.bind(this)} checked={this.state.glasses === "no"} /><br />


                        <br /><label>Rate your swimming ability: </label>{requiredField} &nbsp;
            <select name="swimmingAbility" value={this.state.swimmingAbility} onChange={this.handleChange.bind(this)}>
                            <option value="">----</option>
                            <option value="nonSwimmer">Non-swimmer</option>
                            <option value="weak">Weak</option>
                            <option value="reasonable">Reasonable</option>
                            <option value="strong">Strong</option>
                        </select><br /><br />

                        <label>
                            Please provide any additional information that would be helpful for managing your wellbeing</label><br />
                        <textarea className="form-control" name="wellbeingComments" rows="5" onChange={this.handleChange.bind(this)} value={this.state.wellbeingComments} />
                        <span style={{ fontSize: "14px" }}>Please write N/A if none</span>

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

                        <label><input type="checkbox" name="canTakePictures" value={this.state.canTakePictures} onChange={this.handleChange.bind(this)} />
                            &nbsp; I consent to Explore sharing photos and videos of me from this trip. I am aware that this may including publication on their website, social media accounts and printed advertising material.</label><br /><br />

                        <label><input type="checkbox" name="canUseMyPictures" value={this.state.canUseMyPictures} onChange={this.handleChange.bind(this)} />
                            &nbsp; I consent to Explore sharing photos and videos that I have taken on this trip. I am aware that this may including publication on their website, social media accounts and printed advertising material.</label><br /><br />


                        {this.props.over18 === false ? <React.Fragment>
                            <section>
                                <br />
                                I, &nbsp;<input className="form-text required" type="text" name="fullNameDeclaration" size="50" maxLength="40" onChange={this.handleChange.bind(this)} value={this.state.fullNameDeclaration} /> &nbsp; declare that the information I have provided in this registration form about myself is true and correct.<br />
                                <br />Date: <DatePicker
                                    onChange={this.updateDeclarationDate}
                                    value={this.state.declarationDate}
                                    minDetail="month"
                                    minDate={new Date()}
                                    maxDate={new Date()} />
                            </section>
                        </React.Fragment>
                            : <React.Fragment><label>I am over 18 years of age.</label> {requiredField}<br />
                                <label> Yes &nbsp;</label><input type="radio" name="over18" value="yes" onChange={this.handleChange.bind(this)} checked={this.state.over18 === "yes"} />
                                <label>&nbsp;&nbsp;No &nbsp;</label><input type="radio" name="over18" value="no" onChange={this.handleChange.bind(this)} checked={this.state.over18 === "no"} /><br /></React.Fragment>}
                        <React.Fragment>



                            {this.state.over18 === 'yes' ? (<section>
                                <br />
                                I, &nbsp;<input className="form-text required" type="text" name="fullNameDeclaration" size="50" maxLength="40" onChange={this.handleChange.bind(this)} value={this.state.fullNameDeclaration} /> &nbsp; declare that the information I have provided in this registration form about myself is true and correct.<br />
                                <br />Date: <DatePicker
                                    onChange={this.updateDeclarationDate}
                                    value={this.state.declarationDate}
                                    minDetail="month"
                                    minDate={new Date()}
                                    maxDate={new Date()} />
                            </section>) : (<section></section>)}

                            {this.state.over18 === 'no' ? (<section>
                                This is an adult trip – you must be over 18 to attend.
              </section>) : (<section></section>)}
                        </React.Fragment>

                        <br />
                        <input type="submit" value="Register" className="btn btn-primary" />

                        <br /> <br />
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
                    <p>{this.props.eventDates}<br />
                        {this.props.eventLocation}</p>

                    <h3 style={{ color: "#c2b49a" }}>Registrations for this event have now closed.</h3>
                </section>
            )
        }
        else {
            registrationForm = <div></div>
        }

        var formSubmitted;
        if (this.state.formSubmitted) {
            formSubmitted = (<div>
                <br /><br />
                <h4>Thank you for registering! We will contact you with additional information soon.</h4>
                {/*<input type="button" onClick={this.resetRegistrationForm} value="Register Somebody Else?" className="btn btn-primary" />*/}
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

export default RegistrationFormTest;
