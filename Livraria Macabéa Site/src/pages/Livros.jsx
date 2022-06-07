import React, { useEffect } from 'react'
import BookShop from '../components/BookShop';
import {useState } from 'react'
import Header from '../components/Header';
import {getLivros} from '../utils/axios'

function Livros() {
   // const [url, setUrl] = useState()
 const [livrosAll, setLivrosAll]= useState([])

  useEffect(()=>{
    (async()=>{
      const response = await getLivros();
      setLivrosAll(response.data);
      setLoading(false);
    })()
  },[])


  return (
    <div>
      
      <Header />
      <ul>
        {livrosAll.map((titulo)=>(
          <li key={titulo._id}>
           <p> 
           {titulo.titulo} - 
           {titulo.autor} - 
           {titulo.preco} - 
           {titulo.avaliacao} - 
            -   
           </p>
            <img src={titulo.imagem}></img>
          </li>
        ))}
      </ul>

    </div>
    
  )
}
export default Livros;