import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src ="/videos/video1.mp4" autoPlay loop muted />
            <h1>Welcome to my Portfolio</h1>
            <p></p>
            <p></p>
            <div className = 'hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                 Resume
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                 Projects
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                 Contact Me
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;