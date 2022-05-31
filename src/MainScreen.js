import React from 'react';
import CardProducts from './components/CardProducts';
import Categories from './components/Categories';
// import ToShoppingCartButton from './components/ToShoppingCartButton';
import * as api from './services/api';
import './css/mainScreen.css';
import Header from './components/Header';

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
    const { products, categoryID, searchTerm } = this.state;
    // console.log(products);
    console.log(categoryID);
    return (
      <div className="main-screen-page">
        <div className="header-container">
          <Header screen={ () => this.update } quantity={ this.readsQuantity() } />
        </div>
        <div className="header-page-ruler" />
        <div className="search-container">
          <p data-testid="home-initial-message" className="search-text">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <label htmlFor="busca" className="search-bar">
            <input
              type="text"
              id="busca"
              data-testid="query-input"
              placeholder="Digite nome do produto."
              value={ searchTerm }
              name="searchTerm"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ () => this.handleSearch(categoryID, searchTerm) }
            >
              Search
            </button>
          </label>
        </div>
        <div className="bottom-screen">
          <div className="left-main-screen">
            <Categories handleCategoryClick={ this.handleCategoryClick } />
          </div>
          <div className="right-main-screen">
            {
              products.length > 0
                ? <CardProducts products={ products } screen={ () => this.update() } />
                : <p>Nenhum produto foi encontrado</p>
            }
          </div>
        </div>
        {/* <ToShoppingCartButton quantity={ this.readsQuantity() } /> */}
      </div>
    );
  }
}
export default MainScreen;
