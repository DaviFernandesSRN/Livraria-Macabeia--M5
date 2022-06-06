import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import app from './views/home'
import AppHOME from './views/Home.jsx'
import './index.css'
import PaginaLivro from './views/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Header />
    <Navbar />
    <AppHOME/>
   
    <Footer />
  </React.StrictMode>
 
)

