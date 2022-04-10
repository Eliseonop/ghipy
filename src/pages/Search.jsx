import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchGif } from "../services/giphyApi";
import GifView from "../components/GifView";
const Search = () => {
  const { name } = useParams();
  const [items, setItems] = useState();
  useEffect(() => {
    getSearchGif(name).then((n) => setItems(n));
  }, [items]);
  console.log(items);
  return (
    <div className="bg-red flex flex-wrap bg-slate-600 justify-center">
      {items.map((url, i) => (
        <GifView key={i} url={url} />
      ))}
    </div>
  );
};

export default Search;
