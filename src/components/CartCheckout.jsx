import React from 'react';

class CartCheckout extends React.Component {
  render() {
    return(
    <div>
      <form>
        <label> Nome Completo:
        <input type="text" data-testid="checkout-fullname"></input>
        </label>
        <label> E-mail:
        <input type="email" data-testid="checkout-email"></input>
        </label>
        <label> CPF:
        <input type="text" data-testid="checkout-cpf"></input>
        </label>
        <label> Telefone:
        <input type="tel" data-testid="checkout-phone"></input>
        </label>
        <label> CEP:
        <input type="text" data-testid="checkout-cep"></input>
        </label>
        <label> Endereço:
        <input type="text" data-testid="checkout-address"></input>
        </label>
      </form>
        <form>
          <label> Boleto:
            <input type="radio" value="Boleto"></input>
          </label>
          <label> Cartão de Crédito:
            <input type="radio" value="Visa"></input>
            <input type="radio" value="MasterCard"></input>
            <input type="radio" value="Elo"></input>
          </label>
        </form>
        <button type='submit'>Comprar</button>
    </div>
    )
  }
}
export default CartCheckout;