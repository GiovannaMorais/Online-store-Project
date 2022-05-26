import React from 'react';
import propTypes from 'prop-types';
import '../css/ratingStars.css';

export default class RatingStars extends React.Component {
  rateStar = ({ target: { value } }) => {
    const { rateProduct } = this.props;
    rateProduct(value);
  }

  generateStars = (position) => {
    const starAmount = 5;
    const starArray = [];
    for (let i = 0; i < starAmount; i += 1) {
      if (i <= position) {
        starArray.push((
          <button
            key={ `button${i}` }
            type="button"
            value={ i }
            onClick={ this.rateStar }
            className="ratingStar checkedStar"
            data-testid={ `${i + 1}-rating` }
          >
            ★
          </button>
        ));
      } else {
        starArray.push((
          <button
            key={ `button${i}` }
            type="button"
            value={ i }
            onClick={ this.rateStar }
            className="ratingStar"
            data-testid={ `${i + 1}-rating` }
          >
            ★
          </button>
        ));
      }
    }
    return starArray;
  }

  render() {
    const { position } = this.props;
    return (
      <div>
        {this.generateStars(position)}
      </div>
    );
  }
}

RatingStars.propTypes = {
  rateProduct: propTypes.func.isRequired,
  position: propTypes.number.isRequired,
};
