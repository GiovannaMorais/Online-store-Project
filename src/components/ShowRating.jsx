import React from 'react';
import RatingStars from './RatingStars';

class ShowRating extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>{ email }</span>
          <RatingStars />
        </div>
        <div>
          <p>{ comment }</p>
        </div>
      </div>
    );
  }
}

export default ShowRating;
