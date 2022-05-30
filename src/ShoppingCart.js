import React from 'react';
import { Link } from 'react-router-dom';
import CardProductsToBuy from './components/CardProductsToBuy';
import Header from './components/Header';

class ShoppingCart extends React.Component {
  update = () => {
    this.forceUpdate();
  }

  readsQuantity() {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    return productsToBuy.length;
  }

  generateCart() {
    return (
      <div>
        <CardProductsToBuy screen={ () => this.update() } />
        <Link to="/CartCheckout">
          <button type="button" data-testid="checkout-products">Finalizar Compra</button>
        </Link>
      </div>);
  }

  render() {
    return (
      <div>
        <Header quantity={ this.readsQuantity() } />
        {
          sessionStorage.productsToBuy.length === 2
          || sessionStorage.productsToBuy === undefined
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : this.generateCart()
        }
      </div>
    );
  }
}
export default ShoppingCart;
