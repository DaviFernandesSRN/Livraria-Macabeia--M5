import React from 'react'
import '../assets/style/top-cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faCreditCard, faTag, faLock } from '@fortawesome/free-solid-svg-icons'

function TopCards() {
    return (
        <div className='container-cards-shadow'>
        <div className='cardcontainer'>

            {/* 1st card */}
             <div className='card'>
             <FontAwesomeIcon icon={faTruckFast} className='icon-card-top' />
                 <div className='cardtext'>
                    <h4>Frete rápido</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                 </div>
             </div>

             {/* 2nd card */}
             <div className='card'>
             <FontAwesomeIcon icon={faCreditCard} className='icon-card-top' />
                 <div className='cardtext'>
                    <h4>Diversos pagamentos</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                 </div>
             </div>

             {/* 3rd card */}
<div className='card'>
             <FontAwesomeIcon icon={faTag} className='icon-card-top' />
                 <div className='cardtext'>
                    <h4>Preços incríveis</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                 </div>
             </div>

             {/* 4th card */}
             <div className='card'>
             <FontAwesomeIcon icon={faLock} className='icon-card-top' />
                 <div className='cardtext'>
                    <h4>Segurança extra</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                 </div>
             </div>
        </div>
    </div>
    )
}

export default TopCards;