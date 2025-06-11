import React from 'react';
import './bookRate.css';

function BookRate({ rate }) {
    return (
        <div>
            <strong className='rate m-rate'>{rate}<span>점</span></strong>
        </div>
    );
}

export default BookRate;