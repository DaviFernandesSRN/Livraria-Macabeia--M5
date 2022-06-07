import React from 'react'
import BookShop from '../components/BookShop';

function Livros() {

    useEffect(() => {
        axios.get("https://livrariamacabeia.herokuapp.com/livros/")
        .then((response) => {
            console.log(response)
        }).catch(() => {
            console.log("Deu errado")
        })
      
      }, [])


      
    return (
        <div>
            <h1>Livros</h1>
            <BookShop />
        </div>
        
    )
}

export default Livros;