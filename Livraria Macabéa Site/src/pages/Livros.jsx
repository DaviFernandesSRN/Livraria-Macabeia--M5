import React from 'react'
import BookShop from '../components/BookShop';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Livros() {
   
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