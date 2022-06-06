import React from 'react'
import '../assets/style/book-shop.css'
import { Link } from 'react-router-dom'
import BookThumb from './BookThumb'

function BookShop () {
    return (
        <div className='container-book-grid'>
            <Link to="/livros">
                <BookThumb/>
            </Link>
            
        </div>
    )
}

export default BookShop