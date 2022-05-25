import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default class ShowCard extends React.Component {
  render() {
    const { keyid, product } = this.props;
    return (
      <Link
        to={ `/product-details/${keyid}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <div>
            <p>{ product.title }</p>
          </div>
          <div>
            <div>
              <img src={ product.thumbnail } alt="" />
            </div>
            <div>
              <span>R$</span>
              <span>{ product.price }</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

ShowCard.propTypes = {
  keyid: propTypes.string.isRequired,
  product: propTypes.shape({
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
};
