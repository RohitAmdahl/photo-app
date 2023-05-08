import React from "react";
import { useState, useEffect } from "react";
import Title from "./components/ui/AppTitle";
import PhotoCards from "./components/ui/PhotoCards";
import ImageSearch from "./components/ui/ImageSearch";

const Base_Url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;

// &q=yellow+flowers&image_type=photo&pretty=true
// const Url = `&q=${searchTerm}s&image_type=photo&pretty=true`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const ImagesGallery = async () => {
      const response = await fetch(
        `${Base_Url}&q=${searchTerm}s&image_type=photo&pretty=true`
      );
      const data = await response.json();
      const picture = data.hits;
      console.log(picture);
      setImages(picture);
    };
    ImagesGallery();
  }, [searchTerm]);

  return (
    <>
      <Title />
      <ImageSearch searchText={(text) => setSearchTerm(text)} />
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
