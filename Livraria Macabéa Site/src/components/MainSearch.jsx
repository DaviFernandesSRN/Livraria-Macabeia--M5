import React from "react";
import {useState} from 'react';
import { Link } from 'react-router-dom'

function MainSearch() {
    const[ilivros, setIlivros] = useState('')
    const MessageSearchBox = 'Procure um livro pelo nome'

    return (
        <div className="busca-container">
            <input type="text" onChange={(e)=>setIlivros(e.target.value)} className='searchbox' placeholder={MessageSearchBox} />

            <Link to={`/procurar/${ilivros}`} > <img src="src\assets\img\search.png" className="icon"  /></Link>
        </div>
    )
}

export default MainSearch;