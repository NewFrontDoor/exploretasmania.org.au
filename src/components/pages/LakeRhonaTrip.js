/*eslint-disable*/
import React, { Component } from 'react';
import Difficulty from '../models/Difficulty'
import RhonaImg from '../../assets/RhonaTrip.jpg';
import PackingList from '../../assets/Packing list updated 30Sept18 Rhona.pdf';

class LakeRhonaTrip extends Component {
    render() {
        return (
            <span>
                <div className="header"> <h5>LAKE RHONA</h5> </div>
                <div className="content">
                    <div className="scrollable-frame">
                        <img className="img img-responsive" src={RhonaImg} alt="Lake Rhona" /><br /><br />

                        <br />
                        Lake Rhona is a beautiful lake nestled in the heart of South-West Tasmania. It has a spectacular white sand beach and is overlooked by Reeds Peak, a rugged crag on the Dennison Range. This unique part of Tasmania’s wilderness is a place that you will never forget.
                    <br />

                        <br />
                        We would like to invite you to come with us and explore this beautiful place. While we are out in this spectacular part of nature we will consider faith – we will think together about the God of the Bible and the Christian faith. Every evening on this trip we will open the Bible together to see what it says about God, about us and about the world. We believe that this special place – along with the whole world - was created by the God of the Bible.
                    <br />
                        <br />
                        <ul className="no-list-style no-margin-or-padding">
                            <li>
                                <strong>Difficulty:</strong> <Difficulty difficulty={4} />
                            </li>
                            <li>
                                <strong>Number of Days:</strong> 4
                            </li>
                            <li>
                                <strong>Guides for this Trip:</strong> <a href="/guides" target="_blank">Hannah Fair and Jordan Poland</a>
                            </li>
                            <li>
                                <strong>Trip Dates:</strong> 13-16 December 2018
                            </li>
                            <li>
                                <strong>Start time and place:</strong> 7:30am on Thursday 13th December at 45 Melville St, Hobart.
                            </li>
                            <li>
                                <strong>Finish time and place:</strong> Approximately 4pm on Sunday 16th December at 45 Melville St,Hobart.
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
                        All of the campsites used on this trip are wilderness campsites, with no electricity, showers or toilets. Water will be sourced from flowing streams and boiled if necessary. We will be able to wash with water from the river at Gordon Vale and Lake Rhona. We will carry a poo tube for toileting in this sensitive wilderness area.
                    <br />

                        <br />
                        This trip will cost $120. This cost includes food, transport, gear maintenance and insurance. You will be asked to pay for the trip via paypal once your registration has been confirmed.
                    <br />

                        <br />
                        The trip itinerary will be as follows, subject to the discretion of your guides.    <br />
                        <em>Note: This trip includes a river crossing. High River levels may result in cancellation/postponement or significant alteration of the trip. Your guides will get in contact with you if this is likely.</em>
                        <br />

                        <br />
                        Day 1: Meet in Hobart to arrange gear. Drive approximately 2.5 hours to the start of the track. Walk 5.5km (~3 hours) to the campsite at Gordon Vale. This walk is mostly flat but involves sections of muddy track and a river crossing.<br /><br />
                        Day 2: Walk 8.5km (5-7 hours) to the campsite at Lake Rhone. This walk involves sections of muddy track and a steep climb.<br /><br />
                        Day 3: Walk 6km (~4 hours return) from the campsite to the summit of Reeds Peak and back. This walk involves steep climbing and descending. Only day packs will need to be carried for this walk.<br /><br />
                        Day 4: Walk 14km (6-8 hours) back to the carpark. This walk involves a steep descent, sections of muddy track and a river crossing.<br /><br />

                        <a href="/register"><button className="btn btn-primary">Register Your Interest for this Trip Here</button></a>

                    </div>
                </div>
            </span>
        );
    }
}

export default LakeRhonaTrip;
