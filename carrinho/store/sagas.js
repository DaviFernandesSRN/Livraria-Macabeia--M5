import {all, put, select, takeLatest} from 'redux-saga/effects'  // importe de redux-saga/effects
import { addSuccess, cartAmountUpdateSuccess } from '../store/actions'; // importar de store/actions

/* ### métodos para redux saga que funcionam por trás dos panos na aplicação aos quais você queira ###
** ### que funcione junto aos componentes como Home, Cart e ShowCart ###
**/

// representa o BACK-END. Caso queira para a produção, desconsidere esse objeto booksjson caso queira um banco de dados real
const booksjson = [
    {id: 1, title: 'JavaScript - Guia Definitivo', price: 74.99, img: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575222485.jpg'},
    {id: 2, title: 'PHP & MySQL', price: 84.99, img: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575225295.jpg'},
    {id: 3, title: 'Java Como Programar', price: 95.24, img: 'https://images-na.ssl-images-amazon.com/images/I/A16Dr5jlhzL.jpg'}
];

// function saga responsável por executar em segundo plano
function* addToCart({id}) {
    // obtém um book através do ID
    const book = booksjson.map(book => (book.id === id) ? book : null);

    // faz dispatch através de put de redux-saga/effects, responsável pelos efeitos colaterais em redux no react.js
    yield put(addSuccess([book[id - 1]]));
    yield put(cartAmountUpdateSuccess(id));
}

/* ### exporta como padrão com all (que junta todos os sagas de redux) com takeLatest para cada ação de add (adicionar) 
** ### quando houver cliques no botão em Home, ou seja, takeLatest ouve os eventos de adiçao de livros e nos cliques no botão
   ### em scripts Home. Você poderá adiconar mais eventos se quiser além desse que está embaixo.
**/
export default all([
    takeLatest('add', addToCart),
]);