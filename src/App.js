import React from "react";
import { useState, useEffect } from "react";
import Title from "./components/ui/AppTitle";
import PhotoCards from "./components/ui/photoCards";
import search from "./images/search.svg";

const ApiUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`;

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const ImagesGallery = async (tags) => {
    const response = await fetch(`${ApiUrl}&s=${tags}`);
    const data = await response.json();
    console.log(data);
    setImages(data.hits);
  };
  useEffect(() => {
    ImagesGallery("birds");
  }, []);
  return (
    <>
      <Title />
      <div className="mx-auto w-full m-4 p-4 flex justify-center items-center ">
        <input
          className="border-2 focus:border-sky-500 w-1/2 py-2 mr-2 px-2 shadow-lg rounded-full"
          type="text"
          placeholder="Search photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          className="w-10 h-10 drop-shadow-2xl cursor-pointer px-1 bg-green-300 rounded-full shadow-lg hover:bg-green-500"
          src={search}
          alt="search icon"
          onClick={() => ImagesGallery(searchTerm)}
        />
      </div>
      <PhotoCards />
    </>
  );
}

export default App;
