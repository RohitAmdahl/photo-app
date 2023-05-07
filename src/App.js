import React from "react";
import { useState, useEffect } from "react";
import Title from "./components/ui/AppTitle";
import PhotoCards from "./components/ui/PhotoCards";
import search from "./images/search.svg";

const ApiUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const ImagesGallery = async (tags) => {
      const response = await fetch(`${ApiUrl}&s=${tags}`);
      const data = await response.json();
      const picture = data.hits;
      console.log(picture);
      setImages(picture);
    };
    ImagesGallery();
  }, []);

  return (
    <>
      <Title />
      <div className="mx-auto w-full m-4 p-4 flex justify-center items-center ">
        <input
          className="border-2 focus:border-sky-500 w-1/2 py-2 mr-2 px-2 shadow-lg rounded-full"
          type="text"
          placeholder="Search photos"
        />
        <img
          className="w-10 h-10 drop-shadow-2xl cursor-pointer px-1 bg-green-300 rounded-full shadow-lg hover:bg-green-500"
          src={search}
          alt="search icon"
        />
      </div>
      <div className="container mx-auto flex justify-items-center">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl ">
          {images.map((images) => (
            <PhotoCards key={images.id} image={images} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
