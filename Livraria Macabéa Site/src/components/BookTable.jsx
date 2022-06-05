import React from 'react'
import "src\assets\style\livro.css"

function BookTable () {
    return (
        <table className='booktable'>
            <tbody>
            <tr>
                <td className='propname'>Nome do título:</td>
                <td className='propvalue'>Blablabla</td>
            </tr>
            <tr>
                <td className='propname'>Autor:</td>
                <td className='propvalue'>Blablabla</td>
            </tr>
            <tr>
                <td className='propname'>Páginas:</td>
                <td className='propvalue'>Blablabla</td>
            </tr>
            <tr>
                <td className='propname'>Editora:</td>
                <td className='propvalue'>Blablabla</td>
            </tr>
            <tr>
                <td className='propname'>ISBN:</td>
                <td className='propvalue'>Blablabla</td>
            </tr>
            <tr>
                <td className='propname'>Edição:</td>
                <td className='propvalue'>Blablabla</td>
            </tr>
            </tbody>
        </table>
    )
}

export default BookTable;