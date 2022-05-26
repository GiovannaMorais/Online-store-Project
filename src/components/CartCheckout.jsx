import React from 'react';

class CartCheckout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            {' '}
            Nome Completo:
            <input type="text" data-testid="checkout-fullname" name="name" />
          </label>
          <label htmlFor="email">
            {' '}
            E-mail:
            <input type="email" data-testid="checkout-email" name="email" />
          </label>
          <label htmlFor="cpf">
            {' '}
            CPF:
            <input type="text" data-testid="checkout-cpf" name="cpf" />
          </label>
          <label htmlFor="phone">
            {' '}
            Telefone:
            <input type="tel" data-testid="checkout-phone" name="" />
          </label>
          <label htmlFor="cep">
            {' '}
            CEP:
            <input type="text" data-testid="checkout-cep" name="cep" />
          </label>
          <label htmlFor="address">
            {' '}
            Endereço:
            <input type="text" data-testid="checkout-address" name="address" />
          </label>
        </form>
        <form>
          <label htmlFor="boleto">
            {' '}
            Boleto:
            <input type="radio" value="Boleto" name="boleto" />
          </label>
          <label htmlFor="cartões">
            {' '}
            Cartão de Crédito:
            <label htmlFor="Visa">
              <input type="radio" value="Visa" />
            </label>
            <label htmlFor="MasterCard">
              <input type="radio" value="MasterCard" />
            </label>
            <label htmlFor="Elo">
              <input type="radio" value="Elo" />
            </label>
          </label>
        </form>
        <button type="submit">Comprar</button>
      </div>
    );
  }
}
export default CartCheckout;
