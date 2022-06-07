import React from "react";
import '../assets/style/qtdeCart.css'

function CartAmount () {
    return (
        <div className="qtde-cart">
            <div className="muda-qtde">-</div>
            <div className="qtde">1</div>
            <div className="muda-qtde">+</div>
        </div>
    )
}

export default CartAmount;