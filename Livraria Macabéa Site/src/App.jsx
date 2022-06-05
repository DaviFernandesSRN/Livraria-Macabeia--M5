import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PaginaLivro from './views/Livro'
import './index.css'

function App() {
    return (
        <div>
        <Header />
    <Navbar />
    <PaginaLivro />
    <Footer />
    </div>
    )
}

export default App;
    

