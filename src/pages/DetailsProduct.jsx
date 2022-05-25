import React from 'react';

export default class DetailsProduct extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <h1>Product details</h1>
    );
  }
}
