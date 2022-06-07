import React from 'react';
import Header from '../components/Header';

import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function CadastroPage() {
  const {cadastro, user} = useContext(AuthContext)
  console.log(user);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [favorito, setFavorito ] = useState("");


  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('submit', {email, senha}) }

    return (
      <main>
      <Header />
  
      <div id="container" >
      <a className="links" id="paralogin"></a>
      
      <div className="content">      
        <div id="cadastro">
          <form method="post" onSubmit={handleSubmit}> 

          <h1>Cadastro</h1> 
          
          <p> 
            <label htmlFor="nome">Seu nome</label>
            <input id="nome" name="nome" required="required" type="text" placeholder="Insira seu nome"
            value={nome} 
            onChange={(e)=> setNome(e.target.value)} />
          </p>
          
          <p> 
            <label htmlFor="idade">Sua idade</label>
            <input id="idade" name="idade" required="required" type="number" placeholder="Insira sua idade"
            value={idade} 
            onChange={(e)=> setIdade(e.target.value)} />
          </p>

          <p> 
            <label htmlFor="endereço">Seu Endereço</label>
            <input id="endereço" name="endereço" required="required" type="text" placeholder="Rua resilia"
            value={endereco} 
            onChange={(e)=> setEndereco(e.target.value)}/> 
          </p>

          <p> 
            <label htmlFor="comida">Seu Livro Favorito</label>
            <input id="comida" name="comida" required="required" type="text" placeholder="Contos de fada"
            value={favorito} 
            onChange={(e)=> setFavorito(e.target.value)}/> 
          </p>
          
          <p> 
            <label htmlFor="email">Seu e-mail</label>
            <input id="email" name="email" required="required" type="email" placeholder="example@example.com"
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}/> 
          </p>
          
          <p> 
            <label htmlFor="senha">Sua senha</label>
            <input id="senha" name="senha" required="required" type="password" placeholder="1234"
            value={senha} 
            onChange={(e)=> setSenha(e.target.value)}/>
          </p>
          
          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
          
          <p className="link">  
            Já tem conta?
            <a href="/Login"> Ir para Login </a>
          </p>
        </form>
      </div>
    </div>
  </div> 

    </main>
  )
}

export default CadastroPage;