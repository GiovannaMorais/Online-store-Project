import React from 'react';
import propTypes from 'prop-types';
import '../css/ratingStars.css';

export default class RatingStarRender extends React.Component {
  generateStars = (position) => {
    const starAmount = 5;
    const starArray = [];
    for (let i = 0; i < starAmount; i += 1) {
      if (i <= position) {
        starArray.push((
          <button
            key={ `button${i}Comment` }
            type="button"
            value={ i }
            onClick={ this.rateStar }
            className="commentRatingStar checkedStar"
          >
            ★
          </button>
        ));
      } else {
        starArray.push((
          <button
            key={ `button${i}Comment` }
            type="button"
            value={ i }
            onClick={ this.rateStar }
            className="commentRatingStar"
          >
            ★
          </button>
        ));
      }
    }
    return starArray;
  }

  render() {
    const { starPosition } = this.props;
    return (
      <div>
        { this.generateStars(starPosition) }
      </div>
    );
  }
}

RatingStarRender.propTypes = {
  starPosition: propTypes.string.isRequired,
};
