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

export const createUser = async (nome,email,senha,endereco,cpf,data_de_aniversario)=>{
  return await api.post('clientes', {nome:nome , email: email , senha:senha , endereco:endereco , cpf:cpf , data_de_aniversario:data_de_aniversario} )
}

export const getLivrosPorName = async (titulo)=>{
  return api.get(`livros/titulo/${titulo}`);
 }



