import React, { useState, useEffect } from 'react'
import '../assets/style/home.css'
import axios from 'axios';


function Home() {
const[livros, setLivros] = useState([])
    useEffect(() => {
        axios.get("http://livrariamacabeia.herokuapp.com/livros/")
        .then((response) => {
            console.log(response)
        }).catch(() => {
            console.log("Deu errado")
        })
      
      }, [])

    return (
        <div className='container'>
            <h1>Home</h1>

        </div>
        
    )
}

export default Home