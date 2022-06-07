import React from 'react'
import '../assets/style/header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import GetLivrosPor from '../utils/getLivrosPor'
import axios from 'axios'
import {useState, useEffect} from 'react';

function Header () {
    const[ilivros, setIlivros] = useState('')
    const MessageSearchBox = 'Procure um livro pelo nome'

    return (
        <header className='top'>
    
            <img src="src\assets\img\logo.png" className='logo' />
            <div className='rightbar'>
                
            <div className='search-bar'>
                    <input type="text" onChange={(e)=>setIlivros(e.target.value)} className='searchbox' placeholder={MessageSearchBox} />

                    <Link to={`/procurar/${ilivros}`} > <img src="src\assets\img\search.png" className="icon"  /></Link>
                    
                </div>
                
                <Link to='/busca'>
                <img src="src\assets\img\search.png" className="icon" id='search-toggle' />
                </Link>
                
                <Link to="/carrinho">
                    <img src="src\assets\img\shopping-cart.png" className="icon" />
                </Link>
                <Link to='/conta'>
                    <img src="src\assets\img\account.png" className="icon" />
                </Link>

            </div>
  
   
        
        </header>
    )
}

export default Header;
