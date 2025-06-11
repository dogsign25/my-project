import React from 'react';
import './bookTitle.css';

function BookTitle({ title }) {
    return (
        <div>
            <strong className='book-title'>{title}</strong>
        </div>
    );
}

export default BookTitle;