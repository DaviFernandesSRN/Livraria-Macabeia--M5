// essa parte é reponsável pelo funcionamento de redux saga

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {reducer, reducerAmountCart} from './reducer'
import rootSaga from './rootSaga'

// cria saga middleware
const sagaMiddleware = createSagaMiddleware()


// combina reducers com combineReducers para poder usá-los individualmente e também fazê-los funcionar separadamente
const reducers = combineReducers({
  clickCart: reducer,
  clickAmount: reducerAmountCart,
});

// cria loja (store)
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// então execute (run) rootSaga em sagaMiddleware
sagaMiddleware.run(rootSaga)

// exporta loja (store) ?
export default store;