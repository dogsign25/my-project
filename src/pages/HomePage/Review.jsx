import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import {data1} from '../../database/data1';
import './homePage.css';

function Review({books}) {
    return (
        
            <main className='product'> 
           <ul className='product-list'>
            {books.map(item => (
                <BookCard id={item.id} title={item.title}
                rate={item.rate} Img={item.Img} review={item.review}/>
            ))}
           </ul>
        </main>
    
    );
}

export default Review;