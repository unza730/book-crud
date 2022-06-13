import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image:"",
  })
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev, [e.target.name]: e.target.value,
      
    }))
  }
  const sendRequest = async () => {
   await axios.post("http://localhost:8000/books/addbook", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        available: Boolean(checked),
        image: String(inputs.image),
      }).then((res) => res.data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>navigate("/books"))
  }
  return (
    
    <div>
      <section class="text-white body-font relative">
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col mx-auto mt-12 w-full md:py-5 mt-8 md:mt-0 px-6 rounded-md border-2 border-purple-600 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h2 class="text-white text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          {/* <p class="leading-relaxed mb-5 text-white">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p> */}
          <form onSubmit={handleSubmit}>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-white">
                Name
              </label>
              <input
                onChange={handleChange}
                value={inputs.name}
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-white">
                Author
              </label>
              <input
                onChange={handleChange}
                value={inputs.author}
                type="text"
                id="author"
                name="author"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-white">
                Description
              </label>
              <input
                onChange={handleChange}
                value={inputs.description}
                type="text"
                id="description"
                name="description"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="price" class="leading-7 text-sm text-white">
                Price
              </label>
              <input
                onChange={handleChange}
                value={inputs.price}
                type="number"
                id="price"
                name="price"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="Image" class="leading-7 text-sm text-white">
                Choose an image
              </label>
              <input
                onChange={handleChange}
                value={inputs.image}
                type="text"
                id="image"
                name="image"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* <input class="form-check-input appearance-none h-4 w-4 border border-gray-900 rounded-sm bg-black checked:bg-gary-200 checked:border-gray-200 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked value={checked} id="flexCheckChecked" onChange={()=> setChecked(!checked)} />
      <label class="form-check-label inline-block text-white" for="flexCheckChecked">
        Checked checkbox */}
            {/* </label> */}
            <label class="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-6"
                value={checked}
                onChange={() => setChecked(!checked)}
              />
              <span class="ml-2">Available</span>
            </label>
            <button class="text-white  border-0 py-2 px-6 focus:outline-none hover:bg-black bg-gray-900 rounded text-lg h-full w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              Button
            </button>
          </form>
          {/* <p class="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p> */}
        </div>
      </section>
    </div>
  );
}

export default AddBook
