import React, { Component } from 'react';

import validator from 'validator';

class ContactUs extends Component {
  constructor(){
    super();
    this.state = {nName: "",
                  email: "",
                  message: "",
                  }

    this.handleSubmit = this.handleSubmit.bind(this);
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

    if(validator.isEmpty(this.state.name))
    {
      errorMessage += "Please enter your name.\n";
    }
    if(validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email))
    {
      errorMessage += "Please enter a valid email address.\n";
    }


    if(errorMessage !== "")
    {
      this.setState({formErrorMessage:errorMessage});
      return false;
    }
    else
    {
      this.setState({formValid:true});
      console.log(this.state);
      /*handle posting to drupal and show success message*/
      var form = new FormData();
      form.append("webform", "8e070048-9aaf-4371-a0de-35bb5c3d28e6");
      form.append("submission[data][0][values][0]", escape(this.state.name));
      form.append("submission[data][1][values][0]", escape(this.state.email));
      form.append("submission[data][2][values][0]", escape(this.state.message));
      form.append("submission[data][5][values][0]", escape(this.state.tripNotifications));
      form.append("submission[data][6][values][0]", escape(this.state.prayerNewsletter));

      /*var that = this;
      postToWebform(form, function(data){
        that.setState({submissionID:data.sid})
        that.setState({formSubmitted:true})
      })*/
    }

  }

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Contact Us</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content-region">
    <div className="container">
      <div className="row">

        {/* If the Sidebar First has content then it will be rendered */}


        {/* /Sidebar First region */}

        {/* Rendering of the main content */}

        <div id="main-content-region" className="main-content col-xs-12 col-md-8 col-md-offset-2">

          {/* Output the messages */}

          {/* Rendering the content */}
            <div className="region region-content">

<div id="block-block-54" className="block block-block">


  <div className="content">
    We would love to hear from you! <br/><br/>

    Feel free to contact us by emailing <a href="mailto:info@exploretasmania.org.au">info@exploretasmania.org.au</a> or by filling out the following contact form and we will get back to you as soon as possible.
    </div>
</div>


  <div className="content">
    <div className="contacts">
  <div className="row">


    <div className="col-xs-12 col-sm-12 margin-top-xs-40">
      <h5>Contact Us</h5>
      <p>
      <b>Email:</b>&nbsp; <a href="mailto:info@exploretasmania.org.au">info@exploretasmania.org.au</a></p>
    </div>

  </div> {/* /row */}
</div> {/* /contacts */}  </div>
</div>


  <div className="content">
    <form onSubmit={this.handleSubmit}><div><div className="form-item form-group form-type-textfield form-item-name">
  <label htmlFor="edit-name">Your name <span className="form-required" title="This field is required.">*</span></label>
 <input className="form-control form-text required" type="text" id="edit-name" name="name" value="" size="60" maxLength="255" />
</div>
<div className="form-item form-group form-type-textfield form-item-mail">
  <label htmlFor="edit-mail">Your e-mail address <span className="form-required" title="This field is required.">*</span></label>
 <input className="form-control form-text required" type="text" id="edit-mail" name="mail" value="" size="60" maxLength="255" />
</div>
<div className="form-item form-group form-type-textarea form-item-message">
  <label htmlFor="edit-message">Message <span className="form-required" title="This field is required.">*</span></label>
 <div className="form-textarea-wrapper"><textarea className="form-control form-textarea required" id="edit-message" name="message" cols="60" rows="5"></textarea></div>
</div>

<label>I would like to:</label> <br/>
<label><input type="checkbox" name="tripNotifications" value={this.state.tripNotifications} onChange={this.handleChange.bind(this)} />
&nbsp;Receive notification of upcoming trips. </label><br />
<label><input type="checkbox" name="prayerNewsletter" value={this.state.prayerNewsletter} onChange={this.handleChange.bind(this)}/>
&nbsp;Subscribe to Explore’s prayer newsletter. </label><br />

<br/>
<div className="form-actions form-wrapper" id="edit-actions"><input className="btn btn-primary btn-sm form-submit" type="submit" id="edit-submit" name="op" value="Send message" /></div></div></form>  </div>
</div>
        </div> {/* /main-content-region */}


      </div> {/* /row */}
    </div> {/* /container */}

      </section>
    );
  }
}

export default ContactUs;
