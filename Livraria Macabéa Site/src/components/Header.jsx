import React from 'react'
import '../assets/style/header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header () {
    return (
        <header className='top'>
            <img src="src\assets\img\logo.png" className='logo' />
            <div className='rightbar'>
                <div className='search-bar'>
                    <img src="src\assets\img\search.png" className="icon" />
                    &nbsp;
                    Procure por mais de XX livros
                </div>
                
                <div className='icons'>
                <img src="src\assets\img\search.png" className="icon" id="search-toggle"/>
                <img src="src\assets\img\shopping-cart.png" className="icon" />
                    <img src="src\assets\img\account.png" className="icon" />
                </div>
            </div>
        </header>
    )
}

export default Header;
