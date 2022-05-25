import React from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';

export default class DetailsProduct extends React.Component {
  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productInfo = await fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json());
  }

  render() {
    return (
      <h1>Product details</h1>

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
