import React from 'react';
import propTypes from 'prop-types';

export default class AddCartButton extends React.Component {
  addToCart = (product) => {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const itemQuantity = productsToBuy.filter((item) => item.id === product.id).length;
    let productAvailable = product.available_quantity;
    if (productAvailable < 1) productAvailable = 1;
    if (itemQuantity < productAvailable) {
      productsToBuy.push(product);
      sessionStorage.setItem('productsToBuy', JSON.stringify(productsToBuy));
    }
  }

  render() {
    const { datatest, text, product } = this.props;
    const { screen } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ datatest }
          onClick={ () => {
            screen();
            this.addToCart(product);
          } }
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
  screen: propTypes.func.isRequired,
};
