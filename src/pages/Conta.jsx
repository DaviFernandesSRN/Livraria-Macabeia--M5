import React from 'react'
import LoginBox from '../components/LoginBox'
import {Link} from 'react-router-dom'
import '../assets/style/conta.css'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PaginaConta() {
    return (
        <div>
            <Header/>
            <Navbar/>
        <div className='conta-container'>
            <LoginBox />
            
            {/* Pedindo para criar conta - Chamada para cadastro */}
            <section className='cadastro-chamada'>
                <h3>Ainda não tem conta?</h3>
                <br/>
                <Link to='/cadastro'>
                <h4>Faça seu cadastro</h4>
                </Link>

            </section>

        </div>
        <Footer/>
        </div>
    )
}

export default PaginaConta;