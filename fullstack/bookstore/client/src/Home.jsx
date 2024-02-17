import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = 'http://localhost:3000/books'

    useEffect(()=>{
        // fetch(url)
        // .then(res =>{
        //     return res.json();
        // }).then(result=>{
        //     setLoading(false);
        //     setBooks(result);
        // })

        setLoading(false);
        axios
      .get(url)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    }, []);

    return (
        <>
        <div className=''>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
        </>
    )
}

export default Home