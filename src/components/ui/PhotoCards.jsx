const PhotoCards = () => {
  return (
    <div className="shadow-lg max-w-sm">
      <img
        className="w-full py-3 px-3 lg:max-w-sm"
        src="https://source.unsplash.com/random"
        alt="random"
      />
      <div className="px-3 py-3">
        <p className="text-green-800 font-bold text-2xl capitalize mb-2">
          photo by rohit
        </p>
        <p className="text-grey-800 lg:max-w-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum optio
          nulla distinctio deleniti maxime inventore, vero doloribus beatae
          nesciunt, asperiores harum similique odit ea unde, autem culpa alias
          provident voluptates.
        </p>
        <ul className="">
          <li>
            <strong>View: </strong>4900
          </li>
          <li>
            <strong>Download: </strong>4800
          </li>
          <li>
            <strong>Likes: </strong>600
          </li>
        </ul>
      </div>
      <div className="py-3 px-3">
        <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 mr-2">
          photos
        </span>
        <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 mr-2">
          photos
        </span>
        <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 mr-2">
          photos
        </span>
      </div>
    </div>
  );
};

export default PhotoCards;
