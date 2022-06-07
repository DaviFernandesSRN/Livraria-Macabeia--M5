import React from 'react'
import '../assets/style/header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function Header () {
    return (
        <header className='top'>
            <img src="src\assets\img\logo.png" className='logo' />
            <div className='rightbar'>
                <div className='search-bar'>
                    <img src="src\assets\img\search.png" className="icon" />
                    &nbsp;
                    Procure um livro
                </div>
                
                <div className='icons'>
                
                    <img src="src\assets\img\search.png" className="icon" id="search-toggle"/>
                

                <Link to="/carrinho">
                    <img src="src\assets\img\shopping-cart.png" className="icon" />
                </Link>
                <Link to='/login'>
                    <img src="src\assets\img\account.png" className="icon" />
                </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
