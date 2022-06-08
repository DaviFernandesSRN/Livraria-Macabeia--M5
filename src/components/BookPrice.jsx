import React from "react";
import '../assets/style/livro-section.css'
import PaginaLivro from "../pages/Livro";

function BookPrice (livro) {
    return (<div className="book-price">
        {livro.preco}
    </div>)
}

export default BookPrice;