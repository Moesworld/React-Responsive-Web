import React from 'react';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'> 
            <h1>Advernture awaits</h1>
            <p>what are you wainting for</p>
            <div className='Hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn-l-large'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
