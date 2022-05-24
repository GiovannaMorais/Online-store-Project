import React from 'react';
import Categories from './components/Categories';

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
        <Categories />
      </div>
    );
  }
}
export default MainScreen;
