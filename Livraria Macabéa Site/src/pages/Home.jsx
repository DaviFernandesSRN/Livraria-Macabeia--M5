import React from 'react'
import BannerTop from '../components/BannerTop'
import TopCards from '../components/TopCards'
import BookShop from '../components/BookShop'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {AuthContext} from '../context/AuthContext';
import {useEffect, useState} from 'react'
import axios from 'axios'

function Home() {

    const[livros, setLivros] = useState([])
     
    // // const saidaUsuario = () =>{
    // //     logout()
        // }

    useEffect(() => {
        axios.get ("http://livrariamacabeia.herokuapp.com/livros")
        .then((response) =>{
            console.log(response.data)
        }).catch(() => {
            console.log("Deu Errado")
        })
    }, [])
    
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