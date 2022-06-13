import React, { createRef } from 'react'
import Book from './Book/Book'
import Books from './Book/Books'
import '../App.css';
const Home = () => {

  // createHeart();
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="py-2  px-6 mt-24">
          <h1 className="text-white text-3xl">Welcome To Book Store App</h1>
        </div>
      </div>
    </>
  );
}

export default Home
