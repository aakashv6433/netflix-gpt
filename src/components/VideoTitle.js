import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[26%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-3 px-12 text-lg text-center rounded-md flex items-center hover:bg-opacity-60">
          ▷ PLAY
        </button>
        <button className="mx-2 bg-gray-500 text-white py-3 px-10 text-lg rounded-md text-center bg-opacity-50 flex items-center hover:bg-opacity-30">
          <p className="text-2xl mr-1">ⓘ</p> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
