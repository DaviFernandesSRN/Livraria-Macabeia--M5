import React, { useState, useEffect, useContext } from 'react'
import {getLivrosPorName, buscaLivros} from './axios'
import { useParams } from 'react-router-dom';
import Livro from '../pages/Livro'

function GetLivrosPor() {
 const {titulo}= useParams()
 const [livros, setLivros] = useState([]);
 const [loading, setLoading] = useState(true);
 const [naoencontrado, setNaoencontrado] = useState(true);

  useEffect(()=>{
    (async()=>{
      const tituloFormatado = titulo.split("%20").join(" ");
      const response = await getLivrosPorName(tituloFormatado);
      setLivros(response.data);
      setLoading(false);
    })()
  },[])

  if(loading){
    return <div className="loading"> Carregando...</div>
  }

  // Inserir isso na página individual de livro
  return (
    <div>
      <ul>
        {livros.map((titulo)=>(
          <li key={titulo._id}>
            <img src={titulo.imagem}></img>
           <p> {titulo.titulo} - {titulo.autor} - {titulo.preco} - {titulo.sinopse}  </p>
          </li>
        ))}
      </ul>

    </div>
    
  )
}

export default GetLivrosPor;