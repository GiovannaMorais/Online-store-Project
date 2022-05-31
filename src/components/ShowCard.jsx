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
        className="product-card-link"
      >
        <div data-testid="product" className="product-item">
          <div className="product-title">
            <p>{ product.title }</p>
          </div>
          <div className="product-thumbnail">
            <img src={ product.thumbnail } alt="" />
          </div>
          <div className="product-shipping">
            {
              product.shipping.free_shipping
              && <span data-testid="free-shipping">Frete Grátis</span>
            }
          </div>
          <div className="product-price">
            <span>R$</span>
            <span>{ product.price }</span>
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
    shipping: propTypes.shape({
      free_shipping: propTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};
