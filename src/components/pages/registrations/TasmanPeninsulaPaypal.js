/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';


class Paypal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sid: this.props.sid,
            tripCost: this.props.tripCost,
            tripName: this.props.tripName
        }
    }

    render() {
        return (
            <section className="container padding-bottom-15">
                <p>Thank you for your registration!</p>
                <p> <strong>In order to complete your payment please click the button below</strong> and you will be redirected to the Paypal site to make your payment using your Paypal account or credit card.</p>
                <p>If you encounter any problems or have any questions about the event please contact <a href="mailto:info@exploretasmania.org.au">info@exploretasmania.org.au</a>.</p>

                <br />

                <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="business" value="paypal@exploretasmania.org.au" />
                    <input type="hidden" name="currency_code" value="AUD" />
                    <input type="hidden" name="upload" value="1" />
                    <input type="hidden" name="no_shipping" value="1" />
                    <input type="hidden" name="return" value={"http://exploretasmania.org/PaypalReturn/" + this.state.sid} />
                    <input type="hidden" name="amount_1" value={this.state.tripCost} />
                    <input type="hidden" name="quantity_1" value="1" />
                    <input type="hidden" name="item_name_1" value={this.state.tripName + " " + this.state.sid} />
                    <input type="Submit" name="submit" value="Complete Payment with Paypal" />
                </form>
            </section>
        );
    }
}

export default Paypal;