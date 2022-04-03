import React from 'react';
import useReview from '../../hooks/useReview';
import './AllReview.css'

const AllReview = () => {
    const [reviews, setReviews] = useReview ();


    return (
        <div className='all-review'>
            {
                reviews.map (review => {
                    const {name, rating, picture, description} = review;
                    return (
                        <div className='all-review-card'>
                                <img src= {picture} alt="" />
                                <p>Name: {name}</p>
                                <p>Description: {description}</p>
                                <p>Rating: {rating}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllReview;