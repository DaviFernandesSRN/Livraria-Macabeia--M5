// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://github.com/DaviFernandesSRN/backend_Projeto_Livraria_Macabeia',
});
