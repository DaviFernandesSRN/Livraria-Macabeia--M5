import React from 'react'
import BookShop from '../components/BookShop';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Livros() {

    // mantendo como referencia - exibir dados no console - apagar depois
    // useEffect(() => {
    //     axios.get("https://livrariamacabeia.herokuapp.com/livros/")
    //     .then((response) => {
    //         console.log(response)
    //     }).catch(() => {
    //         console.log("Deu errado")
    //     })
      
    //   }, [])


      
    return (
        <div>
            <Header />
                <Navbar />
            <h1>Livros</h1>
            <BookShop />
            <Footer />
        </div>
        
    )
}

export default Livros;