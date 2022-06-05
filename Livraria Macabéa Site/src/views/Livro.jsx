import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import LivrosRelacionados from '../components/LivrosRelacionados'
import 'src\assets\style\livro.css'

function PaginaLivro () {
    return(
        <section className='main'>
            <BookCover />
            <BookSection />
            <BookTable />
            <LivrosRelacionados />
        </section>
    )
}

export default PaginaLivro;