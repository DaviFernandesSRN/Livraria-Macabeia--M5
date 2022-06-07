import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import LivrosRelacionados from '../components/LivrosRelacionados'
import '../assets/style/livro.css'
import axios from 'axios';

function PaginaLivro () {

          return(
              <div>
                  <Header />
                <Navbar />
        <section className='main'>
            <BookCover />
            <BookSection className='book-section' />
            <BookTable />
            <LivrosRelacionados />
        </section>
        <Footer />
        </div>
    )
}



export default PaginaLivro;