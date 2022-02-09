import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src ="/videos/video-2.mp4" autoPlay loop muted />
            <hi>Welcome</hi>
            <p>to my playground</p>
            <div>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                 LOOK
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