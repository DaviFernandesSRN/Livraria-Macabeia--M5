import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/style/livro.css'
import axios from "axios";

function PaginaLivro () {

          useEffect(() => {
            axios.get("https://livrariamacabeia.herokuapp.com/livros/")
            .then((response) => {
                console.log(response)
            }).catch(() => {
                console.log("Deu errado")
            })
          
          }, [])


          return(
        <section className='main'>
               <Header />
                <Navbar />
            <BookCover />
            <BookSection className='book-section' />
            <BookTable />
            <LivrosRelacionados />
            <Footer />
        </section>
    )
}



export default PaginaLivro;