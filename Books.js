import React,{ useEffect, useState} from 'react'

import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:8000/books/";
// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
       const fetchPosts = async () => {
          const res = await axios.get("http://localhost:8000/books");
         const postData = res.data;
         setBooks(postData.book);
        };
         fetchPosts();
  
    //  fetchHandler().then((data) => setBooks(data));
  }, []);
  // console.log(books);
  // }, []);
 
   console.log(books);
  return (
    <div className="grid grid-cols-3   mx-9">
     
        {books && books.map((book, i) => (
          // <h1>{book.name}</h1>
            <div key={i} className="">
              <Book book={book} />
            </div>
        ))
        }
     
      {/* <>
      {books ?
        books.map((book, i) => {
          <h1 key={i} className="text-blue-800">{book.author}</h1>
        } )
     : null}
      
</> */}
      
      {/* <h1>al books are here</h1> */}
    </div>
  );
}

export default Books
