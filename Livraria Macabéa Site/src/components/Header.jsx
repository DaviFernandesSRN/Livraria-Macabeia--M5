import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header () {
    return (
        <nav className='top'>
            <img src="src\img\logo.png" className='logo' />
            <div className='rightbar'>
                <div className='search-bar'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                    &nbsp;
                    Procure por mais de XX livros
                </div>
                
                <div className='icons'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" id="search-toggle"/>
                    <FontAwesomeIcon icon={faCartShopping} className="icon" />
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>
            </div>
        </nav>
    )
}

export default Header;
