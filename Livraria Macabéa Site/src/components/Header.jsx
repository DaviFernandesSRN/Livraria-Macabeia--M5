import React from 'react'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'
import GetLivrosPor from '../utils/getLivrosPor'
import axios from 'axios'
import {useState} from 'react';

function Header () {
    const[ilivros, setIlivros] = useState('')
    const MensagemCaixaDeBusca = 'Procure o livro pelo nome';

    return (
        <header className='top'>
            <img src="src\assets\img\logo.png" className='logo' />
            <div className='rightbar'>
              
                <input type="text" value={ilivros} onChange={(e)=>setIlivros(e.target.value)} className='search-bar' placeholder={MensagemCaixaDeBusca} />
                    <img src="src\assets\img\search.png" className="icon" />
                    &nbsp;
                    Procure por mais de 10 livros
             
                
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

            
             <Link to={`/procurar/${ilivros}`} > pesquisar</Link>
        </header>
    )
}

export default Header;
