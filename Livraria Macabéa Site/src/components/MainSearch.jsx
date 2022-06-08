import React from "react";
import {useState} from 'react';
import { Link } from 'react-router-dom'
import '../assets/style/main-search.css'

function MainSearch() {
    const[ilivros, setIlivros] = useState('')

    return (
        <div className="busca-container">

            <h1>Busque o livro pelo seu nome</h1>

            <span>
                <input type="text" onChange={(e)=>setIlivros(e.target.value)} className='mainsearchbox' />

                <Link to={`/procurar/${ilivros}`} > 
                <button>PROCURAR</button>
                </Link>

            </span>
        </div>
    )
}

export default MainSearch;