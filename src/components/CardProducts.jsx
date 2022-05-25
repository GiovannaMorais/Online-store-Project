import React from 'react';
import propTypes from 'prop-types';
import ShowCard from './ShowCard';
import AddCartButton from './AddCartButton';

export default class CardProducts extends React.Component {
  render() {
    const { products } = this.props;
    const datatest = 'product-add-to-cart';
    const text = 'Adicionar ao Carrinho';
    return (
      <div>
        {
          products.map((product) => {
            const key = product.id;
            return (
              <div key={ key }>
                <ShowCard keyid={ key } product={ product } />
                <AddCartButton datatest={ datatest } text={ text } product={ product } />
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
};
