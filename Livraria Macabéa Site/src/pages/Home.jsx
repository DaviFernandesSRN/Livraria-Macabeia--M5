import React from 'react'
import BannerTop from '../components/BannerTop'
import TopCards from '../components/TopCards'
import BookShop from '../components/BookShop'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';
import { useState} from 'react'
import axios from 'axios'

function Home() {

    // const[livros, setLivros] = useState([])
   

    // const[iImg, setiImg] = useState('')
    // function ImBuscar() {
    //     axios.get (`https://livrariamacabeia.herokuapp.com/livros/`)
    //     .then((response) =>{
    //         console.log(response.data.imagem)
    //     }).catch(() => {
    //         console.log("Deu Errado")
    //     })


    //  function gaxios(title) {
    //     axios.get (`https://livrariamacabeia.herokuapp.com/livros/titulo/${title}`)
    //     .then((response) =>{
    //         setLivros(response.data)
    //     }).catch(() => {
    //         console.log("Deu Errado")
    //     })
    
       
    return (
        <div>
             <Header />
                <Navbar />
             <BannerTop />
            <TopCards />
            <BookShop />
            <Footer />
        </div>  
    )
}

export default Home