import React from 'react';
import CardProductsToBuy from './components/CardProductsToBuy';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        {
          sessionStorage.productsToBuy.length === 2
          || sessionStorage.productsToBuy === undefined
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : <CardProductsToBuy />
        }
      </div>
    );
  }
}
export default ShoppingCart;
