import './index.css'; // importa css de App.css
import React, {Component} from 'react'; // importe de React
import {bindActionCreators} from 'redux'; // importar de redux
import { useSelector, useDispatch, connect } from 'react-redux'; // importar de react-redux
import { increment, decrement, add } from '../../store/actions'; // importar de store/actions

import {  // importa Link de react-router-dom para gerar os links de JSX
  Link
} from "react-router-dom";
import showCart from './show-cart';

// declare ShowCart como componente de classe que herda (estende) de Component 
class ShowCart extends Component {
  state = {
    addSuccess: 'block'
  }

  render() {
    let total = 0;
    const {
      cart, // text para a interpolação dos valores da lista (objeto literal)
      amount, // amount para representar a quantia de cada livro no carrinho individualmente
      increment,  // representa o incremento (soma) da quantia de livros
      decrement,  // representa o decremento (subtração) da quantia de livros
    } = this.props; // obtém de this.props os objetos (id, add, cart, amount, increment, decrement)

    // responsável em retirar a exibição da notificação de adição de item ao carrinho de compras
    const addCartSuccess = () => {
      this.setState({
        addSuccess: 'none'
      });
    }
    setTimeout(addCartSuccess, 7000); // ocultar a notificação em 7 segundos

    // responsável pelo preço total de todos os items ao carrinho de compras
    const totalCart = (price, amount) => {
      total += price * amount;
      return total.toFixed(2);  // fixe somente duas casas decimais depois da vírgula
    }

    // responsável pelo preço subtotal de cada livro individualmente
    const subTotal = (price, amount) => {
      return (price * amount).toFixed(2); // fixe somente duas casas decimais depois da vírgula
    }

    // responsável pela exibição (show) do carrinho de compras
    const ShowCart = () => {
      // renderiza (exiba) o HTML do carrinho de compras
      return (cart.length > 0) ? cart.map((book, index) => {return <>
        <div className="header-list-cart">
          <div style={{textAlign: 'center'}} className="cart-item">LIVRO</div>
          <div className="cart-item"></div>
          <div className="cart-item">PREÇO</div>
          <div className="cart-item">QUANTIDADE</div>
          <div class="cart-item">SUBTOTAL</div>
        </div>
        <div className="items-list-cart">
          <div className="cart-item"><img src={book[0].img} width={100} height={150} /></div>
          <div className="cart-item">{book[0].title}</div>
          <div className="cart-item">R$ {book[0].price}</div>
          <div className="cart-item">
            <button onClick={() => decrement(book[0].id)} className="btn-amount-cart">-</button> 
            &nbsp;{amount[book[0].id]}&nbsp; 
            <button onClick={() => increment(book[0].id)}  className="btn-amount-cart">+</button>
          </div>
          <div className="cart-item">{subTotal(book[0].price, amount[book[0].id])}</div>
        </div>
        <div className="footer-list-cart">TOTAL R$ {totalCart(book[0].price, amount[book[0].id])}</div>
        </>
      }) : <h4 style={{marginTop: '25%', textAlign: 'center', fontSize: '20pt'}}>carrinho vázio</h4>
    }

    // agora, renderiza (exiba) o HTML
    return (
      <>
      <div class="container-cart">
          <header className="home-header">
              <h1>CARRINHO DE COMPRAS</h1>
              <span><Link className="link-home" to="/">HOME PAGE</Link></span>
          </header>
          <div className="list-cart">
            {ShowCart()}
          </div>
      </div>
      </>
    );
  }
}

// declare método padrão (mapStateToProps) do React para recuperar os valores da Store que vem de combineReducers do script main.js
const mapStateToProps = store => ({
  cart: store.clickCart.cart, // obtém de combineReducers de main.js
  amount: store.clickAmount.amount, // obtém de compineReducers de main.js
});

// declare método padrão (mapDispatchToProps) para realizar dispatch (ações) para increment, decrement e add com bindActionCreators
const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement, add }, dispatch); // vincula (bind) ações (actions) com bindActionCreators

// exporta connect vinculando métodos padrão acima ao componente ShowCart para que o combineReducers funcione em main.js
export default connect(mapStateToProps, mapDispatchToProps)(ShowCart);