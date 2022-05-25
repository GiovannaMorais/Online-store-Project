import React from 'react';
import propTypes from 'prop-types';

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
              <div key={ key } data-testid="product">
                <div>
                  <p>{ product.title }</p>
                </div>
                <div>
                  <div>
                    <img src={ product.thumbnail } alt="" />
                  </div>
                  <div>
                    <span>R$</span>
                    <span>{ product.price }</span>
                  </div>
                </div>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this.addToCart(product) }
                >
                  Adicionar ao Carrinho
                </button>
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
