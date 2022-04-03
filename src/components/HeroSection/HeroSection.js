import React from 'react';
import foodImg from '../../images/food-1.jpg'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='food-container'>
            <div className='food-details'>
                <h1>A Bite Of Yummy!!!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad, expedita deleniti omnis consectetur facilis ullam sint aspernatur! Ad exercitationem, alias eaque tempore deleniti recusandae. Quibusdam earum neque ipsa quae!</p>
                <button className='food-button'>SEE MORE</button>
            </div>

            <div>
                <img src={foodImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;