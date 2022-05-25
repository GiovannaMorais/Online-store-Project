import React from 'react';
import propTypes from 'prop-types';

export default class DetailsProduct extends React.Component {
  state = {
    product: {
      title: '',
      price: 0,
      pictures: [],
      shipping: false,
      attributes: [],
    },
    setImage: '',
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productInfo = await fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json());
    this.setState({ product: productInfo, setImage: productInfo.pictures[0].url });
  }

  handleChangeImageButton = (url) => {
    this.setState({ setImage: url });
  }

  generateName(name, price) {
    return (
      <div>
        <h2 className="name-container">
          <span data-testid="product-detail-name">{ name }</span>
          <span>{ ` - R$${price}` }</span>
        </h2>
      </div>
    );
  }

  render() {
    const { product } = this.state;
    const { title, price, pictures, shipping, attributes } = product;
    const { setImage } = this.state;
    const picNum = 4;
    const picList = pictures.slice(0, picNum);
    return (
      <section className="details-page">
        <main className="page-container">
          <div className="product-illustration-container">
            <div className="main-image-title-container">
              {this.generateName(title, price)}
              <img
                src={ setImage }
                alt={ title }
                className="main-image-container"
              />
            </div>
            <div className="product-pictures">
              {
                picList.slice(0, picNum).map((picture) => {
                  const key = picture.id;
                  return (
                    <button
                      key={ key }
                      className="thumbnail-container"
                      type="button"
                      onClick={ () => this.handleChangeImageButton(picture.url) }
                    >
                      <img
                        src={ picture.url }
                        alt={ title }
                      />
                    </button>
                  );
                })
              }
            </div>
          </div>
          <div className="product-attributes">
            <ul className="attribute-list">
              <li>
                {
                  shipping.free_shipping
                    ? 'Frete grátis: Sim.'
                    : 'Frete grátis: Não.'
                }
              </li>
              {
                attributes.map((attribute) => {
                  const key = attribute.id;
                  if (attribute.value_name === 'undefined'
                    || attribute.value_name === null) {
                    return null;
                  }
                  return (
                    <li key={ key }>
                      {
                        `${attribute.name}: ${attribute.value_name}`
                      }
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </main>
      </section>
    );
  }
}

DetailsProduct.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
