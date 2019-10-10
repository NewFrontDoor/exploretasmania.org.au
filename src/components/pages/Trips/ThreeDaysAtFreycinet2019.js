import React, { Component } from 'react';
import Difficulty from '../../models/Difficulty'
import FreycinetImg from '../../../assets/FreycinetTrip.jpg';
import PackingList from '../../../assets/Packing list updated 30Sept18 Rhona.pdf';

class ThreeDaysAtFreycinet2019 extends Component {
    render() {
        return (
            <span>
                <div className="header"> <h5>3 DAYS AT FREYCINET</h5> </div>
                <div className="content">
                    <div className="scrollable-frame">
                        <img className="img img-responsive" src={FreycinetImg} alt="Freycinet" /><br /><br />

                        <br />
                        Freycinet is described by guide books as having some of the most beautiful beaches in the world. The sand is white, the ocean is pristine blue, the sea cliffs and spectacular and the surrounding mountains just add to the wonder. On this 3 day trip we plan to rock climb and abseil on the sea cliffs, walk up one of the mountains and visit two of the world-renowned beaches.
                    <br />

                        <br />
                        We would like to invite you to come with us and explore this beautiful place. While we are out in this spectacular part of the wilderness we will build friendships and we will consider faith – the Christian faith. Every evening on this trip we will open the Bible together to see what it says about God, about us and about the world.
                    <br />
                        <br />
                        <ul className="no-list-style no-margin-or-padding">
                            <li>
                                <strong>Difficulty:</strong> <Difficulty difficulty={3} />
                            </li>
                            <li>
                                <strong>Number of Days:</strong> 3
                            </li>
                            <li>
                                <strong>Guides for this Trip:</strong> <a href="/guides" target="_blank">Hannah Fair, Jordan Poland and Pat Stam (rock climbing and abseiling only)</a>
                            </li>
                            <li>
                                <strong>Trip Dates:</strong> 11-13 January 2019
                            </li>
                            <li>
                                <strong>Start time and place:</strong> 7:30am on Friday 11th January at 45 Melville St, Hobart.
                            </li>
                            <li>
                                <strong>Finish time and place:</strong> Approximately 4pm on Sunday 13th January at 45 Melville St, Hobart.
                            </li>
                            <li>
                                <strong>Packing list:</strong> Find out what to bring <a href={PackingList} target="_blank">here</a>.
                            </li>
                            <br />
                            <li>
                                <em>This is an adult trip – you must be over 18 to attend.</em>
                            </li>
                        </ul>
                        <br />
                        <br />
                        There is no long-term parking available at this location so please arrange to leave your car elsewhere. Unless an alternate has been arranged we will drive you to and from Hobart.
                    <br />

                        <br />
                        The trip is being run to the safety standards set for school and adventure groups in Tasmania and will be led by experienced Christian outdoor leaders. This trip is fully catered and we will provide you with all of the specialist equipment you require. We will also provide group sunscreen, insect repellent, hand sanitiser and a wilderness first aid kit.
                    <br />

                        <br />
                        All of the campsites used on this trip are wilderness campsites, with no electricity or showers and only long-drop toilets. Water will be sourced from flowing streams and boiled if necessary. Weather permitting, will be able to wash in the ocean at one of the beaches.
                    <br />

                        <br />
                        This trip will cost $90. This cost includes food, transport, gear maintenance and insurance. You will be asked to pay for the trip via paypal after your registration has been confirmed.
                    <br />

                        <br />
                        The trip itinerary will be as follows, subject to the discretion of your guides.<br />

                        <br />
                        Day 1: Meet in Hobart to arrange gear. Drive approximately 3 hours to Freycinet. Rock climb/abseil at White Water Wall. Camp at White Water Wall that night.<br /><br />
                        Day 2: Walk 4 km (~3 hours) to the summit of Mt Amos and back. This morning walk will only require day packs. Walk 7.5km (3-4 hours) to the campsite at Hazards Beach carrying overnight packs. This walk involves a steep climb to the Wineglass Bay lookout and a steep descent into Wineglass Bay.<br /><br />
                        Day 3: Walk 8.5km (4-5 hours) from the campsite at Hazards Beach back to the carpark and drive back to Hobart.<br /><br />

                        <a href="/registerFreycinet3Days" target="_blank" rel="noreferrer noopener"><div className="text-center"><button className="btn btn-primary">Register Your Interest for this Trip Here</button></div></a>

                    </div>
                </div>
            </span>
        );
    }
}

export default ThreeDaysAtFreycinet2019;
