// ./src/pages/HomePage/HomePage.jsx
import {data1} from '../../database/data1.jsx';
import BookCard from '../../components/BookCard/BookCard.jsx';
import './homePage.css';

function Novel({books}) {
    console.log(books);
    const novels = books.filter(item => item.genre === "novel")
    return (
        
        <main className='product'> 
           <ul className='product-list'>
            {novels.map(item => (
                <BookCard id={item.id} title={item.title} author={item.author}
                Img={item.Img}/>
            ))}
           </ul>
           
        </main>
        
    );
}

export default Novel;