import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
<<<<<<< HEAD:Livraria Macabéa Site/src/pages/Livro.jsx
import LivrosRelacionados from '../components/LivrosRelacionados'
import '../assets/style/livro.css'
=======
import '../style/livro.css'
import axios from "axios";
>>>>>>> origin/master:Livraria Macabéa Site/src/views/Livro.jsx

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
            <BookCover />
            <BookSection className='book-section' />
            <BookTable />
            <LivrosRelacionados />
        </section>
    )
}



export default PaginaLivro;