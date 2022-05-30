import React from 'react';
import propTypes from 'prop-types';
import ShowCard from './ShowCard';
import AddCartButton from './AddCartButton';
import '../css/cardProduct.css';

export default class CardProducts extends React.Component {
  render() {
    const { products } = this.props;
    const datatest = 'product-add-to-cart';
    const text = 'Adicionar ao Carrinho';
    return (
      <div className="product-card-list-container">
        {
          products.map((product) => {
            const key = product.id;
            const { screen } = this.props;
            return (
              <div className="card-container" key={ key }>
                <ShowCard keyid={ key } product={ product } />
                <AddCartButton
                  datatest={ datatest }
                  text={ text }
                  product={ product }
                  screen={ screen }
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}

CardProducts.propTypes = {
  products: propTypes.arrayOf(propTypes.object).isRequired,
  screen: propTypes.func.isRequired,
};
