import React from 'react';
import Categories from './components/Categories';
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
        <Categories />
      </div>
    );
  }
}
export default MainScreen;
