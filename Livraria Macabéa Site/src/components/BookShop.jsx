import React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";
import '../assets/style/livro-section.css'
import '../assets/style/book-thumb.css'
import '../assets/style/book-shop.css'

function BookShop() {
    const baseURL = "https://livrariamacabeia.herokuapp.com";
    const [listaLivros, setListaLivros] = useState([]);

    useEffect( () => {
        buscaLivros();
    }, [])

    const buscaLivros = async () => {
        const {data} = await axios.get(`${baseURL}/livros`) 
     
        setListaLivros(data)
      }

    return (
    
        <div className="container-book-grid">
            {listaLivros.map(livro => (
                <div key={livro._id} className="book-card">
                    <img src={livro.imagem} className='thumb-cover'></img>
                    <br/>
                    <h4 className="book-thumb-title">{livro.titulo}</h4>
                    <p>{livro.autor}</p>
                    <div className="book-price">R$ {livro.preco}</div>
                </div>
            ))}
        </div>
      
    )
}

export default BookShop;