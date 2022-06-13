import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  const navigate = useNavigate();
  const [del, setDel] = useState(false);
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:8000/books/${_id}`)
      .then((res) => res.data);
      setDel(true);
        // .then(() => navigate("/"))
        // .then(() => navigate("/books"));
    //  const res = await axios.delete(`http://localhost:8000/books/${_id}`);
    //  console.log(res.data);
    //  navigate("/")
    //   navigate("/books");
  };
  
  useEffect(() => {
   
    handleDelete();
    navigate("/");
    navigate("/books");
  }, [del])
  

  return (
    <div className="">
      <section class="text-white body-font   ">
        <div class="container  px-5 py-14 mx-auto  ">
          <div class="flex  -m-4">
            <div class="p-2 w-96 ">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">
                    {name}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    {author}
                  </h1>
                  <p class="leading-relaxed mb-3 truncate">{description}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      {price}
                      {/* <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg> */}
                    </a>
                    {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span> */}
                    <span class="text-white mr-3 gap-4 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <button className="bg-purple-800 p-3 rounded-md hover:bg-purple-500">
                        <Link to={`/books/${_id}`}>Update</Link>
                      </button>
                      <button  onClick={ handleDelete} className="bg-purple-800 hover:bg-purple-500 p-3 rounded-md">
                    Delete
                    </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book
