import React from 'react'
import '../assets/style/book-thumb.css'
import BookThumbCover from './book-thumbnails/BookThumbCover'
import BookThumbTitle from './book-thumbnails/BookThumbTitle'
import BookThumbAuthor from './book-thumbnails/BookThumbAuthor'
import BookThumbPrice from './book-thumbnails/BookThumbPrice'

function BookThumb () {
    return (
        <section className='book-card'>
            <BookThumbCover  />
            <BookThumbTitle/>
            <BookThumbAuthor />
            <BookThumbPrice />
        </section>
    )
}

export default BookThumb;