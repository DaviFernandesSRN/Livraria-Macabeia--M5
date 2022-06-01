import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PaginaLivro from './views/Livro'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <PaginaLivro />
    <Footer />
  </React.StrictMode>
)
