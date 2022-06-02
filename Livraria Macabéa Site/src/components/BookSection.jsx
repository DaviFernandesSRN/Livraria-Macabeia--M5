import React from "react";
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";
import BookRating from "./BookRating";
import BookPrice from "./BookPrice";
import CartAmount from "./CartAmount"
import ButtonCart from "./ButtonCart";

function BookSection () {
    return (
        <div>
            <BookTitle />
            <BookAuthor />
            <BookRating />
            <BookPrice />
            <CartAmount />
            <ButtonCart />
        </div>
    )
}

export default BookSection;