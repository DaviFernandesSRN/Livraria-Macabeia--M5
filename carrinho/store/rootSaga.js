import { all } from 'redux-saga/effects';
import saga from './sagas';

// responsável pelo funcionamento de redux saga que execute por trás dos panos na aplicação as instruções junto com o redux
export default function* rootSaga() {
  return yield all([saga]); // espera produção (yield) para todos (all) sagas
}