import React from 'react';
import Header from '../components/Header';
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function CadastroPage() {
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
            onChange={(e)=> setNome(e.target.value)} />
          </p>
          
          <p> 
            <label htmlFor="cpf">Seu Cpf</label>
            <input id="cpf" name="cpf" required="required" type="number" placeholder="Insira seu Cpf"
            onChange={(e)=> setCpf(e.target.value)} />
          </p>

          <p> 
            <label htmlFor="endereço">Seu Endereço</label>
            <input id="endereço" name="endereço" required="required" type="text" placeholder="Rua resilia"
    
            onChange={(e)=> setEndereco(e.target.value)}/> 
          </p>

          <p> 
            <label htmlFor="Data_de_aniversario"></label>
            <input id="Data_de_aniversario" name="Data_de_aniversario" required="required" type="text" placeholder="data de nascimento"
      
            onChange={(e)=>setData_de_aniversario(e.target.value)}/> 
          </p>
          
          <p> 
            <label htmlFor="email">Seu e-mail</label>
            <input id="email" name="email" required="required" type="email" placeholder="example@example.com"
           
            onChange={(e)=> setEmail(e.target.value)}/> 
          </p>
          
          <p> 
            <label htmlFor="senha">Sua senha</label>
            <input id="senha" name="senha" required="required" type="password" placeholder="1234"
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