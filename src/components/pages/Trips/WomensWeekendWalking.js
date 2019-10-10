import React, { Component } from 'react';
import Difficulty from '../../models/Difficulty'
import TripImg from '../../../assets/WomensWalkingTrip.jpg';
import PackingList from '../../../assets/Packing list updated 30Sept18 Rhona.pdf';

class WomensWeekendWalking extends Component {
    render() {
        return (
            <span>
                <div className="header"> <h5>Women's Weekend Walking</h5> </div>
                <div className="content">
                    <div className="scrollable-frame">
                        <img className="img img-responsive" src={TripImg} alt="" /><br /><br />

                        <br />
                        Lake St Clair is Australia’s deepest lake. It is nestled between multiple mountain ranges and surrounded by rainforest. From the cascading creeks and multicoloured mushrooms in the forest to the expansive waters of the lake and the towering surrounding mountains, there is no shortage of wonders to admire. On this 2 day trip we plan to walk through the forest, camp on the side of the lake and climb one of the surrounding mountains!
                    <br />

                        <br />
                        We would like to invite you to come with us and explore this beautiful place. While we are out in this spectacular part of the wilderness we will build friendships and we will consider faith – the Christian faith. In the evening we will open the Bible together to see what it says about God, about us and about the world.
                    <br />
                        <br />
                        <ul className="no-list-style no-margin-or-padding">
                            <li>
                                <strong>Difficulty:</strong> <Difficulty difficulty={3} />
                            </li>
                            <li>
                                <strong>Number of Days:</strong> 2
                            </li>
                            <li>
                                <strong>Trip Dates:</strong> 5-6 October 2019
                            </li>
                            <li>
                                <strong>Guides for this Trip:</strong> <a href="/guides" target="_blank">Hannah Fair and Layah Conry</a>
                            </li>
                        </ul>
                        <ul className="no-list-style no-margin-or-padding">
                            <li>
                                <strong>Briefing:</strong> There will be a compulsory briefing from 5:30 to 6:30pm on Friday 4th October in the Hobart CBD, location to be confirmed<br />
                                <em>If you are unable to attend this briefing please arrange with us to be briefed at an alternative time.</em>
                            </li>

                            <li>
                                <strong>Start time and place:</strong> 6:00 am on Saturday 5th October in the Hobart CBD, location to be confirmed
                            </li>
                            <li>
                                <strong>Finish time and place:</strong> 4:00 pm on Sunday 6th October in the Hobart CBD, location to be confirmed
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
                        Unless an alternate has been arranged we will drive you to and from Hobart.
                    <br />

                        <br />
                        The trip is being run to the safety standards set for school and adventure groups in Tasmania and will be led by experienced Christian outdoor leaders. This trip is fully catered and we will provide you with all of the specialist equipment you require. We will also provide group sunscreen, insect repellent, hand sanitiser and a wilderness first aid kit.
                    <br />

                        <br />
                        All of the campsites used on this trip are wilderness campsites, with no electricity or showers and only long-drop toilets. Water will be sourced from flowing streams and boiled if necessary. Weather permitting, will be able to wash in the lake.
                    <br />

                        <br />
                        This trip will cost $110. This cost covers food, transport (including ferry ticket), gear maintenance and insurance. You will be asked to pay for the trip via paypal after your registration has been confirmed.
                    <br />

                        <br />
                        The trip itinerary will be as follows, subject to the discretion of your guides.    <br />

                        <br />

                        Briefing: Meet your guides and fellow walkers, ask any questions you may have and borrow any gear you require. We ask that you bring all of your personal gear along to this briefing to be check by our guides; for your safety we need to ensure that you are well enough equipped for the trip.
                        <br /><br />

                        Day 1: We will drive to Lake St Clair (2.5hr) and catch the 9am ferry to the far side of the lake. We will then walk for around 45 minutes to the Mt Byron turnoff. Here you will have two options: leave your pack and climb Mt Byron (4-5 hours return), or continue straight on to the campsite at Echo Point (1hr 15min). We will camp at Echo Point together that evening.
                        <br /><br />
                        Day 2: We will walk for around 3hr from Echo Point to the visitors centre a Cynthia Bay. We will then drive back to Hobart, returning by 4pm.
                        <br /><br />
                        <a href="/registerWomensWeekendWalking" target="_blank" rel="noreferrer noopener"><div className="text-center"><button className="btn btn-primary">Register Your Interest for this Trip Here</button></div></a>

                    </div>
                </div>
            </span>
        );
    }
}

export default WomensWeekendWalking;
