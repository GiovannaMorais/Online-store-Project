import React from 'react';
import propTypes from 'prop-types';
import RatingStars from './RatingStars';

class Rating extends React.Component {
  render() {
    const { comment } = this.props;
    const { email, messageRating, rating } = comment;
    const { addComment } = this.props;
    const { handleChange, rateProduct, generateID } = this.props;
    return (
      <form>
        <div className="email">
          <input
            type="email"
            data-testid="product-detail-email"
            placeholder="Email"
            value={ email }
            name="email"
            onChange={ handleChange }
            required
          />
          <RatingStars rateProduct={ rateProduct } position={ rating } />
        </div>
        <div>
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            value={ messageRating }
            name="messageRating"
            onChange={ handleChange }
          />
        </div>
        <div>
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ () => {
              generateID();
              addComment(comment);
            } }
          >
            Avaliar
          </button>
        </div>
      </form>
    );
  }
}

Rating.propTypes = {
  addComment: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  rateProduct: propTypes.func.isRequired,
  generateID: propTypes.func.isRequired,
  comment: propTypes.shape({
    email: propTypes.string.isRequired,
    messageRating: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default Rating;
