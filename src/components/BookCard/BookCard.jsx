// ./src/components/BookCard.jsx
import BookImage from '../BookImage/BookImage.jsx';
import BookTitle from '../BookTitle/BookTitle.jsx';
import BookRate from '../BookRate/BookRate.jsx';
import BookAuthor from '../BookAuthor/BookAuthor.jsx';
import './bookCard.css';
import BookReview from '../BookReview/BookReview.jsx';

function BookCard({ title, author, Img, rate, review }) {
    return (
        <li className='product-item'>
            <div className='product-img'>
                <BookImage Img={Img} title={title} />
            </div>
            <BookTitle title={title} />
            <div><BookAuthor author={author} /></div>
            {rate && <BookRate rate={rate} />}
            {review && <BookReview review={review} />}
        </li>
    );
}

export default BookCard;