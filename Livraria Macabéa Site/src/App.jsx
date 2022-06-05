import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PaginaLivro from './views/Livro'
import Routes from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Navbar />
                <PaginaLivro />
                <Footer />
            </BrowserRouter>
    </div>
    )
}

export default App;
    

