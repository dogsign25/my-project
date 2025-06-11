import React from 'react';
import './bookAuthor.css';

function BookAuthor({ author }) {
    return (
        <div>
           <strong className='book-author'>{author}</strong>
        </div>
    );
}

export default BookAuthor;