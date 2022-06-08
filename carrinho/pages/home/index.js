import './index.css'; // importa css de App.css
import React, {Component} from 'react'; // importar de react
import {bindActionCreators} from 'redux'; // importar de redux
import { useSelector, useDispatch, connect } from 'react-redux'; // importar de react-redux
import { add } from '../../store/actions'; // importar de store/actions

import {  // importa Link de react-router-dom para gerar os links de JSX
  Link, Redirect
} from "react-router-dom";

// declare Home como componente de classe que herda (estende) de Component 
class Home extends Component {
  // hook state responsável pelo redirecionamento ao carrinho de compras após de adicionar um item
  state = {
    redirect: null  // define como indefinido (nulo)
  }

  // renderiza (exiba) o HTML
  render() {
    const books = []; // declare array books que conterá a lista (objeto literal) JSON JavaScript
    /** ### booksjson representa aqui como se fosse um BACK-END. Caso queira ter um sistema de banco de dados junto ao back-end,
    *** ### tendo os dados de cada livro, você terá que desconsiderar esse objeto JSON abaixo.
      */
    const booksjson = [
      {id: 1, title: 'JavaScript - Guia Definitivo', price: 74.99, img: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575222485.jpg'},
      {id: 2, title: 'PHP & MySQL', price: 84.99, img: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575225295.jpg'},
      {id: 3, title: 'Java Como Programar', price: 95.24, img: 'https://images-na.ssl-images-amazon.com/images/I/A16Dr5jlhzL.jpg'}
    ];
    const {
      add,  // add para adicionar lista (objeto literal) que representa um JSON
      cart, // text para a interpolação dos valores da lista (objeto literal)
      amount, // amount responsável pela quantia de cada livro individualmente
    } = this.props; // obtém de this.props os objetos (add, cart e amount)

    // declare uma função addBook para adicionar lista (objeto literal)
    const addBook = book => {
      add(book); // adicione à lista
      // define (set) o hook state como botão clicado para redirecionar ao carrinho de compras
      this.setState({
        redirect: 'clicked' // clicked diz que o botão de adicionar livro com clicado
      });
    }

    // se botão addBook clicado, então redirecionar ao carrinho de compras
    if(this.state.redirect !== null)
      // livro-adicionado-com-sucesso responsável pela exibição da notificação no carrinho de compras
      return <Redirect to="/cart/livro-adicionado-com-sucesso" />

    // agora, renderiza (exiba) o HTML
    return (
      <>
      <div className="container-home">
        <header className="home-header">
          <h1>LISTA DE LIVROS</h1>
          <span><Link className="link-cart" to="/show-cart">CARRINHO</Link></span>
        </header>
        <main>
          <div className="list-books">
            {booksjson.map((book, index) => <>
              <div class="list-row">
                <p><img src={book.img} width={150} height={200} /></p>
                <p>{book.title}</p>
                <p>R$ {book.price}</p>
                <p>
                  <button className="list-button" onClick={() => addBook(book.id)}>
                    <span style={{padding: '9px', background: 'rgb(69, 14, 121)'}}>{(amount[book.id] > 0) ? amount[book.id] : 0}</span><span>ADICIONAR AO CARRINHO</span>
                  </button>
                </p>
              </div>
            </>)}
          </div>
        </main>
      </div>
      </>
    );
  }
}

// declare método padrão (mapStateToProps) do React para recuperar os valores da Store que vem de combineReducers do script main.js
const mapStateToProps = store => ({
  cart: store.clickCart.cart, // obtém de combineReducers de main.js
  amount: store.clickAmount.amount,
});

// declare método padrão (mapDispatchToProps) para realizar dispatch (ações) para add com bindActionCreators
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add }, dispatch); // vincula (bind) ações (actions) com bindActionCreators

// exporta connect vinculando métodos padrão acima ao componente Home para que o combineReducers funcione em main.js
export default connect(mapStateToProps, mapDispatchToProps)(Home);