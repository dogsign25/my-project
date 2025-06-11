import './App.css'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AddReview from './pages/HomePage/AddReview'
import Review from './pages/HomePage/Review'
import Novel from './pages/HomePage/Novel'
import React, { useState } from 'react';
import { data1 } from './database/data1';

function App() {
  const [books, setBooks] = useState(data1);
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>홈</Link>
        <Link to='/review'>리뷰</Link>
        <Link to='/addReview'>리뷰 추가</Link>
        <Link to='/Novel'>소설</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage books={books}/>} />
        <Route path="/Review" element={<Review books={books}/>} />
        <Route path="/AddReview" element={<AddReview setBooks={setBooks}/>} />
        <Route path="/Novel" element={<Novel books={books}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App