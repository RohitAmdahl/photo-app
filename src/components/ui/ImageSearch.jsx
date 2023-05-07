import React from "react";
import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-md rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <div className="flex items-center  border-b-4 border-green-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 font-bold bg-blue-500  hover:bg-teal-700 border-blue-500 hover:border-blue-700 text-lg border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
