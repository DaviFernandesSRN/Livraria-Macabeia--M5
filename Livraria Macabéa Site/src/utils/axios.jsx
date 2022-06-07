import axios from 'axios';


const api = axios.create({
  baseURL: "https://livrariamacabeia.herokuapp.com/",
});

export default api;

export const createSession = async (email ) =>{
  return await api.get(`clientes/email/${email}`);
}

 export const getLivros = async ()=>{
  return api.get('livros');
 }

export const createUser = async ()=>{
  return await api.post('clientes')
}

export const getLivrosPorName = async (titulo)=>{
  return api.get(`livros/titulo/${titulo}`);
 }

