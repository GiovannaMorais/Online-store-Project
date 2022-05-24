import React from 'react';
import { Link } from 'react-router-dom';

class MainScreen extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="busca">
          <input type="text" />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="ShoppingCart">
          <button type="submit" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </div>
    );
  }
}
export default MainScreen;
