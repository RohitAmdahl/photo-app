import React from "react";

const PhotoCards = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="shadow-lg max-w-sm">
      <img
        className="w-full py-3 px-3 lg:max-w-sm"
        src={image.webformatURL}
        alt="random"
      />
      <div className="px-3 py-3">
        <p className="text-green-800 font-bold text-2xl capitalize mb-2">
          photo by : {image.user}
        </p>
        {/* <p className="text-grey-800 lg:max-w-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum optio
          nulla distinctio deleniti maxime inventore, vero doloribus beatae
          nesciunt, asperiores harum similique odit ea unde, autem culpa alias
          provident voluptates.
        </p> */}
        <ul className="">
          <li>
            <strong>View: </strong>
            {image.views}
          </li>
          <li>
            <strong>Download: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="py-3 px-3 grid grid-cols-2 gap-2">
        {tags.map((tags) => (
          <span
            key={image.id}
            className=" inline-block bg-gray-200 rounded-2xl px-3 m-1 py-2 font-bold text-gray-700 mr-2"
          >
            #{tags}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PhotoCards;
