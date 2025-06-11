// ./src/pages/HomePage/HomePage.jsx
import {data1} from '../../database/data1.jsx';
import BookCard from '../../components/BookCard/BookCard.jsx';
import './homePage.css';

function HomePage({books}) {
    console.log(data1);
    return (
        <main className='product'> 
           <ul className='product-list'>
           {books.map(item => (
                    <BookCard 
                        key={item.id}
                        id={item.id} 
                        title={item.title} 
                        author={item.author}
                        Img={item.Img}
                    />
            ))}
           </ul>
        </main>
    );
}

export default HomePage;