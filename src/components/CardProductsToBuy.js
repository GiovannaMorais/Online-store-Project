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

  removeAddProduct = (id, num) => {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    if (num < 0) {
      for (let i = 0; i < productsToBuy.length; i += 1) {
        if (productsToBuy[i].id === id) {
          productsToBuy[i] = undefined;
          break;
        }
      }
      sessionStorage.setItem('productsToBuy', JSON
        .stringify(productsToBuy.filter((prod) => prod !== undefined)));
    } else {
      const chosenProduct = productsToBuy.find((product) => product.id === id);
      productsToBuy.push(chosenProduct);
      sessionStorage.setItem('productsToBuy', JSON.stringify(productsToBuy));
    }
  }

  productChangeQuantity=(id, num) => {
    const { productList } = this.state;
    const amountProducts = productList.map((item) => {
      if (item[0] === id) {
        if (num > 0) {
          item[1] += num;
          this.removeAddProduct(id, num);
          return item;
        }
        if (item[1] > 1) {
          item[1] += num;
          this.removeAddProduct(id, num);
          return item;
        }
      }
      return item;
    }).filter((item) => item !== undefined);
    this.setState({ productList: amountProducts });
  }

  removeProduct=(id) => {
    const { productList } = this.state;
    const amountProducts = productList.map((item) => {
      if (item[0] === id) {
        return undefined;
      }
      return item;
    }).filter((item) => item !== undefined);
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const newList = productsToBuy.map((product) => {
      if (product.id === id) {
        return undefined;
      }
      return product;
    }).filter((item) => item !== undefined);
    sessionStorage.setItem('productsToBuy', JSON.stringify(newList));
    this.setState({ productList: amountProducts });
  }

  render() {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const { productList } = this.state;
    const num = -1;
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
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ () => this.productChangeQuantity(key, num) }
                  >
                    -
                  </button>
                  <span data-testid="shopping-cart-product-quantity">
                    { productId[1] }
                  </span>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => this.productChangeQuantity(key, 1) }
                    value={ key }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={ () => this.removeProduct(key) }
                  >
                    Remover
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
