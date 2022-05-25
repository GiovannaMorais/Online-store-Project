import React from 'react';
import propTypes from 'prop-types';
import ShowCard from './ShowCard';

export default class CardProducts extends React.Component {
  addToCart = (product) => {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    productsToBuy.push(product);
    sessionStorage.setItem('productsToBuy', JSON.stringify(productsToBuy));
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {
          products.map((product) => {
            const key = product.id;
            return (
              <div key={ key }>
                <ShowCard keyid={ key } product={ product } />
                <div>
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                    onClick={ () => this.addToCart(product) }
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
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
