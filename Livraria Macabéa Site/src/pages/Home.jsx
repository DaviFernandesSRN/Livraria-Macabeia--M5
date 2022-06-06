import React from 'react'
import '../assets/style/home.css'
import '../assets/style/button.css'

function Home() {
    return (
        // <div className='container'>
            <section className='banner-top'>
                <div className='message-top'>
                    <h4>FESTIVAL DE LEITURA</h4>
                    <h1>SELEÇÃO DE LIVROS ESPECIAIS</h1>
                    <h2>para fãs de literatura</h2>
                    <br/>
                    <button>APROVEITE</button>
                </div>
                <img src='src\assets\img\img-topo-red.png' className='img-top' />
            </section>

        // </div>
        
    )
}

export default Home