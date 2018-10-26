/*eslint-disable*/
import React, { Component } from 'react';
import _ from 'lodash';
import difficultyImg from '../../assets/difficultyImg.png';
import difficultyRatings from '../../assets/Difficulty Ratings updated 30Sept18.pdf';


class Difficulty extends Component {
    render() {
        const difficultyRating = {
            1: "Easy",
            2: "Moderately Easy",
            3: "Moderately Challenging",
            4: "Challenging",
            5: "Very Challenging"

        };
        return (
            <span>
                {_.times(this.props.difficulty, () => <img className="align-baseline" src={difficultyImg} height="31" width="23" />)} {difficultyRating[this.props.difficulty]} - read more <a href={difficultyRatings} target="_blank" rel="noreferrer noopener">here</a>
            </span>
        );
    }
}

export default Difficulty;