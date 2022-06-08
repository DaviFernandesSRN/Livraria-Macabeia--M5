import React from 'react'

function BookCover(imgURL) {
    return (
        <div className='cover-container'>
            <img src={imgURL} className='cover' />
        </div>
    )
}

export default BookCover;