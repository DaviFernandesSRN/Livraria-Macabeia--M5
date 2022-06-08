import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {getLivrosPorName} from '../utils/axios'
import BookCover from '../components/BookCover'
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
            <ul>
              {livroIndividual.map((titulo)=>(
                <li key={titulo._id}>
                        <div className='cover-container'>
            <img src={titulo.imagem} className='cover' />
        </div>

        <p className="book-author">Autor: {titulo.autor}</p>

        <div className="book-price">
        {titulo.preco}
    </div>

    <p className="book-rating">Avaliação: 4.5</p>

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
                </li>
              ))}
            </ul>
      
         
        </div>
    )
}

export default PaginaLivro;