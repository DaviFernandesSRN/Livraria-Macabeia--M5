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
                <img className='banner-top' src={"./img/Sobre.png"} alt="Sobre a equipe" />
 
            </main>
            <Footer />
        </div>
    )
}

export default Sobre;