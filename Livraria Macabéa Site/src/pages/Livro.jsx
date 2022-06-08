import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import '../assets/style/livro.css'

function PaginaLivro (livro) {

          return(
        <section className='main' key='_id'>
            <h1>{livro.titulo}</h1>
            <h2>{livro.autor}</h2>
            <img src={titulo.imagem} />
            {/* <BookCover /> */}
            {/* <GetLivrosPor/> */}
            {/* <BookSection className='book-section' />
            <BookTable /> */}
            {/* <LivrosRelacionados /> */}
        </section>
    )
}

export default PaginaLivro;