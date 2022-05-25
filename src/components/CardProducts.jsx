import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {
          products.map((product) => {
            const key = product.id;
            return (
              <Link key={ key } to={ `/product-details/${key}` }>
                <div data-testid="product">
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
              </Link>
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
