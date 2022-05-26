import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default class ToShoppingCartButton extends React.Component {
  render() {
    const { quantity } = this.props;
    return (
      <Link to="/ShoppingCart">
        <button type="submit" data-testid="shopping-cart-button">
          Carrinho
          <span data-testid="shopping-cart-size">{ quantity }</span>
        </button>
      </Link>
    );
  }
}

ToShoppingCartButton.propTypes = {
  quantity: propTypes.number.isRequired,
};
