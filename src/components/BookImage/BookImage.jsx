import React from 'react';
import './bookImage.css';

function BookImage({ Img, title }) {
    
    return (
        <div>
            <img src={Img} alt={title} />
        </div>
    );
}

export default BookImage;