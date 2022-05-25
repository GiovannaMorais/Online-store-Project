import React from 'react';
import propTypes from 'prop-types';

export default class AddCartButton extends React.Component {
  addToCart = (product) => {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    productsToBuy.push(product);
    sessionStorage.setItem('productsToBuy', JSON.stringify(productsToBuy));
  }

  render() {
    const { datatest, text, product } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ datatest }
          onClick={ () => this.addToCart(product) }
        >
          { text }
        </button>
      </div>
    );
  }
}

AddCartButton.propTypes = {
  datatest: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  product: propTypes.shape({}).isRequired,
};
