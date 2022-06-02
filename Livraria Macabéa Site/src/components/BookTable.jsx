import React from 'react'
import "../style/livro.css"

function BookTable () {
    return (
        <table className='booktable'>
            <tr>
                <td>Nome do título:</td>
                <td>Blablabla</td>
            </tr>
            <tr>
                <td>Autor:</td>
                <td>Blablabla</td>
            </tr>
            <tr>
                <td>Páginas:</td>
                <td>Blablabla</td>
            </tr>
            <tr>
                <td>Editora:</td>
                <td>Blablabla</td>
            </tr>
            <tr>
                <td>ISBN:</td>
                <td>Blablabla</td>
            </tr>
        </table>
    )
}

export default BookTable;