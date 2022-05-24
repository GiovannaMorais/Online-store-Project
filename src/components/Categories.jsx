// Componente que lista categorias na tela.
/*
Possui-se uma callback chamada handleCategoryClick. Esta callback tem o propósito de enviar
informações do botão referente à categoria de volta para o componente pai. É necessário que
ela lide tanto com o nome quanto com o id.
*/
import propTypes from 'prop-types';
import React from 'react';
import * as api from '../services/api';

export default class Categories extends React.Component {
  state = {
    categoryList: [],
    loading: false,
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.setState({ categoryList: categories });
  }

  render() {
    const { categoryList, loading } = this.state;
    const { handleCategoryClick } = this.props;
    console.log(`loading:${loading}`);
    return (
      <div>
        <div>
          <h2>holder</h2>
        </div>
        <div>
          <ul>
            {
              categoryList.map((category) => {
                const { name, id } = category;
                return (
                  <li key={ id }>
                    <button
                      type="button"
                      className="category-button"
                      onClick={ () => handleCategoryClick(id, name) }
                      data-testid="category"
                    >
                      { name }
                    </button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  handleCategoryClick: propTypes.func.isRequired,
};
