import React from "react";

const GifView = ({ url }) => {
  return (
    <div className="flex h-64 m-2 ">
      <img className="" src={url}></img>
    </div>
  );
};

export default GifView;
