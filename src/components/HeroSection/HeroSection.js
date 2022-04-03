import React from 'react';
import foodImg from '../../images/food-1.jpg'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='food-container'>
            <div className='food-details'>
                <h1>A Bite Of <span className='short-title'>Yummy!!!!</span></h1>
                <p>If You Are Looking For A Recipe, You Can Filter Your Search By Season, Holiday, Special Diet, Meal Type, Or Ingredient.!</p>
                <button className='button'>SEE MORE</button>
            </div>

            <div>
                <img src={foodImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;