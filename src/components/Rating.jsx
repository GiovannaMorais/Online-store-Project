import React from 'react';

class Rating extends React.Component {
    state ={
      comment: {
        email: '',
        messageRating: '',
      },
    }

    handleChange = ({ target: { value, name } }) => {
      const { comment } = this.state;
      const newComment = comment;
      newComment[name] = value;
      this.setState({ comment: newComment });
    }

    render() {
      const { comment } = this.state;
      const { email, messageRating } = comment;
      return (
        <form>
          <div className="email">
            <input
              type="email"
              data-testid="product-detail-email"
              placeholder="Email"
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem(opcional)"
              value={ messageRating }
              name="messageRating"
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <button
              data-testid="submit-review-btn"
              type="button"
              onClick={ () => this.addRating(email, messageRating) }
            >
              Avaliar
            </button>
          </div>
        </form>
      );
    }
}

export default Rating;
