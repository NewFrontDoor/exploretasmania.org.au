import React, { Component } from 'react';
import Difficulty from '../../models/Difficulty'
import TripImg from '../../../assets/TasmanPeninsula.jpg';
import PackingList from '../../../assets/Day trip packing list.pdf';

class TasmanPeninsulaOutdoorXP extends Component {
    render() {
        return (
            <span>
                <div className="header"> <h5>Tasman Peninsula Outdoor Experience</h5> </div>
                <div className="content">
                    <div className="scrollable-frame">
                        <img className="img img-responsive" src={TripImg} alt="" /><br /><br />

                        <br />
                        You have probably heard of the Tasman Peninsula as the location of the famous Port Arthur Historic Site. You may not know that the Tasman Peninsula is also home to a wide variety of natural wonders! On this trip we will explore some of the diverse coastal scenery on the Tasman Peninsula. This will include the towering sea cliffs of Cape Hauy, the intricate detail of the Tessellated Pavement and the power of the ocean on display at The Blowhole.
                        <br />

                        <br />
                        We would like to invite you to come with us and experience this beautiful place. While we are out in this spectacular part of the wilderness we will build friendships and we will consider faith – the Christian faith. On this trip we will open the Bible together to see what it says about God, about us and about the world.
                        <br />
                        <br />
                        <ul className="no-list-style no-margin-or-padding">
                            <li>
                                <strong>Difficulty:</strong> <Difficulty difficulty={1} />
                            </li>
                            <li>
                                <strong>Number of Days:</strong> 1
                            </li>
                            <li>
                                <strong>Trip Date:</strong> 16 November 2019
                            </li>
                            <li>
                                <strong>Guides for this Trip:</strong> <a href="/guides" target="_blank">Hannah Fair and Jordan Poland</a>
                            </li>
                            <li>
                                <strong>Start time and place:</strong> 8:30am, Wellspring Anglican Church, 43 Grosvenor St, Sandy Bay.
                            </li>
                            <li>
                                <strong>Finish time and place:</strong> 7:30pm, Wellspring Anglican Church, 43 Grosvenor St, Sandy Bay.
                            </li>
                            <li>
                                <strong>Packing list:</strong> Find out what to bring <a href={PackingList} target="_blank">here</a>.
                            </li>
                            <br />
                            <li>
                                <em>This is an adult trip – you must be over 18 to attend.</em>
                            </li>
                            <br />
                            <li>
                                <em>This is a trip primarily for international students, though other interested individuals are welcome to join us too.</em>
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
                        This trip will cost $30. This cost covers food, transport, gear maintenance and insurance. You will be asked to pay for the trip via paypal after your registration has been confirmed.
                        <br />

                        <br />
                        The trip itinerary will be as follows, subject to the discretion of your guides.
                        <br />

                        <br />

                        8:30am: We will meet at Wellspring Anglican Church, 43 Grosvenor St, Sandy Bay. Your guides will check that you have appropriate clothes and shoes. We will then drive 2 hours to Fortescue Bay on the Tasman Peninsula.
                        <br /><br />
                        11am: We will walk for 4-5 hours to Cape Hauy and back. This walk in relatively flat and the track is very well maintained. This is part of the famous Three Capes Track. We will have lunch while we are out on this walk (provided).
                        <br /><br />
                        3:30pm (approx): We will drive back to Eaglehawk Neck (45 minutes) and visit a few more natural attractions - The Blowhole and Tessellated Pavements. There will be the opportunity to purchase additional hot food at The Blowhole.
                        <br /><br />
                        6:00pm: We will drive back to Hobart (1 hour 15 minutes), arriving in Hobart by 7:30pm.
                        <br /><br />
                        <a href="/registerTasmanPeninsula" target="_blank" rel="noreferrer noopener"><div className="text-center"><button className="btn btn-primary">Register Your Interest for this Trip Here</button></div></a>

                    </div>
                </div>
            </span>
        );
    }
}

export default TasmanPeninsulaOutdoorXP;
