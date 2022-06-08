import React from "react";
import '../assets/style/livro-section.css'
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";
import BookRating from "./BookRating";
import BookPrice from "./BookPrice";
import BookSynopsis from './BookSynopsis'
import CartAmount from "./CartAmount"
import ButtonCart from "./ButtonCart";

function BookSection () {
    return (
        <div>
            <BookTitle />
            <BookAuthor />
            <BookRating />
            <BookPrice />
            <BookSynopsis />
            <span class="cart-line">
                <CartAmount />
                <ButtonCart />
            </span>
        </div>
    )
}

export default BookSection;