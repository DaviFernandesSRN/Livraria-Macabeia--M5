import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Routes from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Livro from './views/Livro'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Navbar />
                <Home />
                <Footer />
            </BrowserRouter>
    </div>
    )
}

export default App;
    

