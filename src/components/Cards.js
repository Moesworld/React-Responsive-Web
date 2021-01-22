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
                        <CardItem
                        src = "images/image2.png" 
                        text ="Cardigan Frame 1"
                        label ="Something dope"
                        />
                        <CardItem
                        src = "images/image3.png" 
                        text ="Wow so cool"
                        label ="SUPERRR"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = "images/image2.png" 
                        text ="Cardigan Frame 1"
                        label ="Something dope"
                        />
                        <CardItem
                        src = "images/image3.png" 
                        text ="Wow so cool"
                        label ="SUPERRR"
                        />
                        <CardItem
                        src = "images/image4.png" 
                        text ="I am A React King"
                        label="wonderful"
                        />
                    </ul>
                </div>    
            </div>         
        </div>
    )
}

export default Cards
