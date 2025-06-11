import React from 'react';

function BookReview({review}) {
    return (
        <div>
            <a className='book-Review'>{review}</a>
        </div>
    );
}

export default BookReview;