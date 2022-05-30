import React from 'react';
import { Link } from 'react-router-dom';
import Carrinho from '../image/Carrinho.png';
import ToShoppingCartButton from './ToShoppingCartButton';
import '../css/header.css';

class Header extends React.Component {
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

    render() {
      return (
        <div className="header">
          <div className="title">
            <Link className="link" to="/">
              <h1>DarkMarket</h1>
            </Link>
          </div>
          <nav>
            <Link to="/ShoppingCart">
              <div className="divQuantity">
                <img src={ Carrinho } alt="carrinho" />
                <ToShoppingCartButton
                  quantity={ this.readsQuantity() }
                  screen={ () => this.update() }
                />
              </div>
            </Link>
          </nav>
        </div>
      );
    }
}

export default Header;
