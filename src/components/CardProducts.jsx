import React from 'react';
import propTypes from 'prop-types';

export default class CardProducts extends React.Component {
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
