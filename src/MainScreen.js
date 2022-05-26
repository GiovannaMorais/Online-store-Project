import React from 'react';
import CardProducts from './components/CardProducts';
import Categories from './components/Categories';
import ToShoppingCartButton from './components/ToShoppingCartButton';
import * as api from './services/api';

class MainScreen extends React.Component {
  state = {
    products: [],
    categoryID: '',
    searchTerm: '',
  }

  handleCategoryClick = async (id) => {
    this.setState({ categoryID: id });
    const result = await api.getProductsFromCategoryAndQuery(id);
    this.setState({ products: result.results });
  }

  handleSearch = async (categoryID, searchTerm) => {
    const result = await api.getProductsFromCategoryAndQuery(categoryID, searchTerm);
    this.setState({ products: result.results });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { products, categoryID, searchTerm } = this.state;
    // console.log(products);
    console.log(categoryID);
    return (
      <div>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <label htmlFor="busca">
            <input
              type="text"
              id="busca"
              data-testid="query-input"
              value={ searchTerm }
              name="searchTerm"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => this.handleSearch(categoryID, searchTerm) }
          >
            Search
          </button>
          <div>
            {
              products.length > 0
                ? <CardProducts products={ products } />
                : <p>Nenhum produto foi encontrado</p>
            }
          </div>
        </div>
        <ToShoppingCartButton />
        <Categories handleCategoryClick={ this.handleCategoryClick } />
      </div>
    );
  }
}
export default MainScreen;
