import React from 'react';
import ErrorImg from '../../images/404-1.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-container'>
            <img src={ErrorImg} alt="" />
        </div>
    );
};

export default NotFound;