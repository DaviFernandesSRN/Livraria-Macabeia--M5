import React from "react";
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import '../assets/style/cadastro.css'

function CaixaCadastro() {
    const {cadastro, user} = useContext(AuthContext)
    console.log(user);
  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [data_de_aniversario, setData_de_aniversario] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cpf, setCpf] = useState("");
  
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      await cadastro(nome,email,senha,endereco,cpf,data_de_aniversario)
   }

   return (
       <div className="cadastro">
    <form method="post" onSubmit={handleSubmit} className='cadastro-container'> 

    <h1 className="title-form">Cadastro</h1> 
    


      <label htmlFor="nome">Nome</label>
      <input id="nome" name="nome" required="required" type="text"
      onChange={(e)=> setNome(e.target.value)} />

    

      <label htmlFor="cpf">CPF</label>
      <input id="cpf" name="cpf" required="required" type="number" 
      onChange={(e)=> setCpf(e.target.value)} />


    
      <label htmlFor="endereço">Endereço</label>
      <input id="endereço" name="endereço" required="required" type="text" 
      onChange={(e)=> setEndereco(e.target.value)}/> 



      <label htmlFor="Data_de_aniversario">Data de nascimento:</label>
      <input id="Data_de_aniversario" name="Data_de_aniversario" required="required" type="text" onChange={(e)=>setData_de_aniversario(e.target.value)}/> 
    
    

      <label htmlFor="email">E-mail</label>
      <input id="email" name="email" required="required" type="email" onChange={(e)=> setEmail(e.target.value)}/> 
    
    

      <label htmlFor="senha">Senha</label>
      <input id="senha" name="senha" required="required" type="password" 
      onChange={(e)=> setSenha(e.target.value)}/>

      <button type="submit">CADASTRAR</button> 

    <span className="offer-login">  
      Já tem conta?
      <Link to="/Login"> Ir para Login </Link>
    </span>
  </form>
  </div>
   )
}

export default CaixaCadastro;