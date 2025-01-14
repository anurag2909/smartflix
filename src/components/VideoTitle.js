import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-3 px-8 text-lg rounded-md hover:bg-opacity-80">
          ➤ Play
        </button>
        <button className=" mx-2 bg-gray-600 text-white py-3 px-8 text-lg rounded-md hover:bg-opacity-60">
          ℹMore Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
