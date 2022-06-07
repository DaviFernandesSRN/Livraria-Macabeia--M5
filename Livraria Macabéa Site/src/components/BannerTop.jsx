import React from 'react'
import '../assets/style/banner-top.css'
import '../assets/style/button.css'
import {Link} from 'react-router-dom';

function BannerTop () {
    return (
        <section className='banner-top'>
                <div className='message-top'>
                    <h4>FESTIVAL DE LEITURA</h4>
                    <h1>SELEÇÃO DE LIVROS ESPECIAIS</h1>
                    <h2>para fãs de literatura</h2>
                    <br/>
                    <Link to="/livros">
                    <button>APROVEITE</button>
                    </Link>
                    
                </div>
                <img src='src\assets\img\img-topo-red.png' className='img-top' />
            </section>
    )
}

export default BannerTop;
