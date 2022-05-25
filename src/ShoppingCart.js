import React from 'react';
import CardProductsToBuy from './components/CardProductsToBuy';

class ShoppingCart extends React.Component {
  render() {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    return (
      <div>
        {
          productsToBuy !== null
            ? <CardProductsToBuy />
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}
export default ShoppingCart;
