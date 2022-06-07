import React, { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import {getLivrosPorName} from './axios'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';


function GetLivrosPor() {
 // const [url, setUrl] = useState()
 const {titulo}= useParams()
 const [livros, setLivros] = useState([]);
 const [loading, setLoading] = useState(true);
 const {logout} = useContext(AuthContext);
  const handleLogout = ()=>{
    logout();
  }

  useEffect(()=>{
    (async()=>{
        const tituloFormatado = titulo.split("%20").join(" ")
      const response = await getLivrosPorName(tituloFormatado);
      setLivros(response.data);
      setLoading(false);
    })()
  },[])

  if(loading){
    return <div className="loading"> Carregando dados...</div>
  }

  return (
    <div>
      
      <Header />
      <button onClick={handleLogout}>Sair</button>
      <ul>
        {livros.map((titulo)=>(
          <li key={titulo._id}>
           <p> {titulo.titulo} - {titulo.autor} - {titulo.preco} - {titulo.sinopse}  </p>
            <img src={titulo.imagem}></img>
          </li>
        ))}
      </ul>

    </div>
    
  )
}

export default GetLivrosPor