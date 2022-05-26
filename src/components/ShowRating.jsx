import React from 'react';
import propTypes from 'prop-types';
import RatingStarRender from './RatingStarRender';

class ShowRating extends React.Component {
  render() {
    const { email, starPosition, comment } = this.props;
    return (
      <div>
        <div>
          <span>{ email }</span>
          <RatingStarRender starPosition={ starPosition } />
        </div>
        <div>
          <p>{ comment }</p>
        </div>
      </div>
    );
  }
}

ShowRating.propTypes = {
  email: propTypes.string.isRequired,
  starPosition: propTypes.string.isRequired,
  comment: propTypes.string.isRequired,
};

export default ShowRating;
