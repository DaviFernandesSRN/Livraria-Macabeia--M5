import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getLivrosPorName} from '../utils/axios'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../assets/style/qtdeCart.css'
import '../assets/style/livro.css'
import '../assets/style/livro-section.css'

function PaginaLivro () {
    const titulo = useParams().titulo;
    console.log(titulo)
    const [livroIndividual, setLivroIndividual] = useState([]);
    const [loading, setLoading] = useState(true);
   
    // Procura de acordo com o nome
     useEffect(()=>{
       (async()=>{
         const tituloFormatado = titulo.split("%20").join(" ");
         const response = await getLivrosPorName(tituloFormatado);
         setLivroIndividual(response.data);
         setLoading(false);
       })()
     },[])

          return(
            <div>
           <Header/>
           <Navbar/>
   
              {livroIndividual.map((titulo)=>(
               
                <div  className='main' key={titulo._id}>
                    <h1 className='book-title'>{titulo.titulo}</h1>
                    {/* Capa */}
                    <div className='cover-container'>
                        <img src={titulo.imagem} className='cover' />
                    </div>


        <p className="book-author">Autor: {titulo.autor}</p>

        <p className="book-rating">Avaliação: 4.5</p>

        <div className="book-price">{titulo.preco}</div>

 

    <p className="sinopse">{titulo.sinopse}</p>

                <div className='cart-line'>
        {/* Quantidade no carrinho */}
        <div className="qtde-cart">
            <div className="muda-qtde">-</div>
            <div className="qtde">1</div>
            <div className="muda-qtde">+</div>
        </div>

    <button>
            COMPRAR
        </button>
        </div>
     
                </div>

              ))}
   
      <Footer/>
            </div>
      
    )
}

export default PaginaLivro;