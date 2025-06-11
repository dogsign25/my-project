import React, { useState } from 'react';
import { data1 } from '../../database/data1.jsx';

function AddReview({ setBooks }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [review, setReview] = useState('');
    const [img, setImg] = useState('');
    const [rate, setRate] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제출 시도');
        console.log({ title, author, rate, img, genre, review });
        const newBook = {
            id: Date.now(),
            title,
            author,
            rate: Number(rate),
            Img: img,
            genre,
            review,
    };
        setBooks(prev => [...prev, newBook]);
        setTitle('');
        setAuthor('');
        setReview('');
        setImg('');
        setRate('');
        setGenre('');
        alert('리뷰가 추가되었습니다!');
    };

    return (
        <div>
            <h1>리뷰 추가</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <hr />
                <input
                    type="text"
                    placeholder="저자"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
                <hr />
                <input
                    type="number"
                    placeholder="점수"
                    value={rate}
                    onChange={e => setRate(e.target.value)}
                    required
                    min="0.0"
                    max="5.0"
                />
                <hr />
                <input
                    type="text"
                    placeholder="이미지 URL"
                    value={img}
                    onChange={e => setImg(e.target.value)}
                    required
                />
                <hr />
                <select
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    required
                >
                    <option value="" disabled>장르를 선택하세요</option>
                    <option value="novel">소설</option>
                    <option value="!novel">비소설</option>
                </select>
                <hr />
                <textarea
                    placeholder="리뷰"
                    value={review}
                    onChange={e => setReview(e.target.value)}
                    required
                />
                <hr />
                <button type="submit">추가</button>
            </form>
        </div>
    );
}

export default AddReview;