
import './App.css';

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Books from './components/Book/Books';
import AddBook from './components/AddBook';
import BookDetail from './components/Book/BookDetail';

function App() {
   
  return (
    <>
      <header>
        <Header />
        {/* <Home /> */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />

          <Route path="/books" element={<Books />} />

          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
