import axios from 'axios'


const api = axios.create({
  baseURL: "https://livrariamacabeia.herokuapp.com/",
});

export default api;

export const createSession = async (email ) =>{
  return await api.get(`clientes/email/${email}`);
}

export const getUsers = async ()=>{
  return api.get('clientes');
}