import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview ();
    const foodReview = reviews.slice (0, 3);
    console.log(foodReview);

    return (
        <div className='customer-review-container'>
            <h1 className='customer-name'>What Our Customers Say..</h1>
            <div className='review-container'>
            {
                foodReview.map (food => {
                    const {name, rating, description, picture} = food
                    return (
                        
                            <div className='review-card'>
                                <img src= {picture} alt="" />
                                <p> <span>Name:</span> {name}</p>
                                <p> <span>Review:</span> {description}</p>
                                <p> <span>Rating:</span> {rating}</p>
                            </div>
                    )
                })
            }
            </div>
            <Link to="/reviews" className='button review-button'>See All Reviews</Link>
        </div>
    );
};

export default Review;