import React from 'react'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'
import GetLivrosPor from '../utils/getLivrosPor'
import axios from 'axios'
import {useState} from 'react';

function Header () {
    const[ilivros, setIlivros] = useState('')

    return (
        <header className='top'>
            <img src="src\assets\img\logo.png" className='logo' />
            <div className='rightbar'>
                <div className='search-bar'>
                    <img src="src\assets\img\search.png" className="icon" />
                    &nbsp;
                    Procure por mais de 10 livros
                </div>
                
                <div className='icons'>
                
                    <img src="src\assets\img\search.png" className="icon" id="search-toggle"/>
                

                <Link to="/carrinho">
                    <img src="src\assets\img\shopping-cart.png" className="icon" />
                </Link>
                <Link to='/conta'>
                    <img src="src\assets\img\account.png" className="icon" />
                </Link>
                <Link to='/Cadastro'>
                    Cadastro
                </Link>


                </div>
            </div>

            <input type="text" onChange={(e)=>setIlivros(e.target.value)} />
             <Link to={`/procurar/${ilivros}`} > pesquisar</Link>
        </header>
    )
}

export default Header;
