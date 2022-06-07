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
    const[ilivros, setIlivros] = useState('')

     function gaxios(title) {
        axios.get (`https://livrariamacabeia.herokuapp.com/livros/titulo/${title}`)
        .then((response) =>{
            console.log(response.data)
        }).catch(() => {
            console.log("Deu Errado")
        })
     }
       
    
    return (
        <div>
             <Header />
             <input type="text" onChange={(e)=>setIlivros(e.target.value)} />
             <button onClick={()=>gaxios(ilivros)}> pesquisar</button>
                <Navbar />
             <BannerTop />
            <TopCards />
            <BookShop />
            <Footer />
        </div>  
    )
}

export default Home