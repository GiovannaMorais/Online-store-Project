import React from 'react';

export default class CardProductsToBuy extends React.Component {
  state = {
    productList: [],
  }

  componentDidMount() {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const cartproducts = productsToBuy.map((product) => product.id)
      .reduce((acc, product) => {
        if (acc[product] === undefined) {
          acc[product] = 1;
        } else {
          acc[product] += 1;
        }
        return acc;
      }, {});
    this.setState({ productList: Object.entries(cartproducts) });
  }

  render() {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const { productList } = this.state;
    return (
      <div>
        {
          productList.map((productId) => {
            const key = productId[0];
            const product = productsToBuy.find((item) => item.id === key);
            return (
              <div key={ key }>
                <div>
                  <span data-testid="shopping-cart-product-name">{ product.title }</span>
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
                <div>
                  <span data-testid="shopping-cart-product-quantity">
                    { productId[1] }
                  </span>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
