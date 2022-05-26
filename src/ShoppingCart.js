import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/CartCheckout">
          <button type="button" data-testid="checkout-products">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}
export default ShoppingCart;
