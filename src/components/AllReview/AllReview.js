import React from 'react';
import useReview from '../../hooks/useReview';
import './AllReview.css'

const AllReview = () => {
    const [reviews, setReviews] = useReview ();


    return (
        <div>
            <h1 className='all-review-title'>Customer Reviews....</h1>
            <div className='all-review'>
            {
                reviews.map (review => {
                    const {name, rating, picture, description} = review;
                    return (
                        <div className='all-review-card'>
                                <img src= {picture} alt="" />
                                <p> <span>Name:</span> {name}</p>
                                <p> <span>Review:</span> {description}</p>
                                <p className='rating'> <span>Rating:</span> {rating} Out Of 5</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default AllReview;