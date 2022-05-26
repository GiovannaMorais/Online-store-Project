import React from 'react';
import { Link } from 'react-router-dom';

export default class ToShoppingCartButton extends React.Component {
  readsQuantity() {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    return productsToBuy.length;
  }

  render() {
    return (
      <Link to="/ShoppingCart">
        <button type="submit" data-testid="shopping-cart-button">
          Carrinho
          <span>{ ` ${this.readsQuantity()}` }</span>
        </button>
      </Link>
    );
  }
}
