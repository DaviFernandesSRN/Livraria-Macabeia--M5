import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Sobre() {
    return (
        <div>
                <Header />
                <Navbar />
            <main>
                <img className='banner' src={"./img/Sobre.png"} alt="Sobre a equipe" />
                <h1>Sobre Nós!</h1>
                <p>Texto sobre a livraria...</p>
            </main>
            <Footer />
        </div>
    )
}

export default Sobre;