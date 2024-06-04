import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[26%] px-20 max-sm:px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" max-sm:mt-10 max-sm:text-lg text-4xl font-bold">
        {title}
      </h1>
      <p className="max-sm:hidden py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="max-sm:text-sm max-sm:text-nowrap max-sm:px-3 max-sm:h-1 bg-white text-black py-3 px-12 text-lg text-center rounded-md flex items-center hover:bg-opacity-60">
          ▷ PLAY
        </button>
        <button className="max-sm:text-sm max-sm:text-nowrap max-sm:px-3 max-sm:h-1 mx-2 bg-gray-500 text-white py-3 px-10 text-lg rounded-md text-center bg-opacity-50 flex items-center hover:bg-opacity-30">
          <p className="text-2xl mr-1">ⓘ</p> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
