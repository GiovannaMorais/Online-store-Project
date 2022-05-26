import React from 'react';
import CardProductsToBuy from './components/CardProductsToBuy';
import {Link} from 'react-router-dom';
import CartCheckout from './components/CartCheckout';

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
          <button data-testid="checkout-products">Finalizar Compra</button>
          </Link>
      </div>
    );
  }
}
export default ShoppingCart;
