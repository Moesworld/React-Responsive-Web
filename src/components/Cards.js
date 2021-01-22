import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these destinations </h1>   
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className="cards__items">
                        <CardItem/>
                    </ul>
                </div>    
            </div>         
        </div>
    )
}

export default Cards