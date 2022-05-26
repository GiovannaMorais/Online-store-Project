import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/CartCheckout">
          <button type="button" data-testid="checkout-products">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}
export default ShoppingCart;
