import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import '../style/livro.css'
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
            <BookCover />
            <BookSection />
            <BookTable />
        </section>
    )
}



export default PaginaLivro;