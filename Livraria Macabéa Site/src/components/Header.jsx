import React from 'react'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'
import GetLivrosPor from '../utils/getLivrosPor'
import axios from 'axios'
import {useState, useEffect} from 'react';

function Header () {
    const[ilivros, setIlivros] = useState('')
    const MensagemCaixaDeBusca = 'Procure o livro pelo nome';

    return (
        <header className='top'>
            <img src="src\assets\img\logo.png" className='logo' />

            <div className='rightbar'>
                <div className='search-bar' >
                    <input type="text" value={ilivros} onChange={(e)=>setIlivros(e.target.value)} placeholder={MensagemCaixaDeBusca} className='inputbox' />
                    <Link to={`/procurar/${ilivros}`} > 
                        <img src="src\assets\img\search.png" className="icon icon-search-box" />
                    </Link>
                    
                </div>   
             
                {/*Ícones  */}            
                    <img src="src\assets\img\search.png" className="icon" id="search-toggle"/>
                
                <Link to="/carrinho">
                    <img src="src\assets\img\shopping-cart.png" className="icon" />
                </Link>

                <Link to='/conta'>
                    <img src="src\assets\img\account.png" className="icon" />
                </Link>
                {/* <Link to='/Cadastro'>
                    Cadastro
                </Link> */}
            </div>  
        </header>
    )
}

export default Header;
