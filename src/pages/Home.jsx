import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GifView from "../components/GifView";
import { getGif, getSearchGif } from "../services/giphyApi";

const Home = () => {
  const [element, setElement] = useState([]);
  const { name } = useParams();
  if (element.length === 0) {
  }
  console.log(name);
  const getData = async () => {
    try {
      let items;
      if (typeof name === "undefined") {
        items = await getGif();
        console.log("aqui1");
      } else {
        items = await getSearchGif(name);
        console.log();
        if (items.length == 0) {
          items = await getGif();
        }
        console.log("aqui");
      }
      console.log(items);
      setElement(items);
    } catch (error) {
      console.log(error); //Swal icon:"error"
    }
  };
  console.log(element);
  // getGif().then((n) => setElement(n));
  useEffect(() => {
    getData();
  }, [name]);

  // console.log(element);
  return (
    <div className="bg-red flex flex-wrap bg-slate-600 justify-center">
      {element.map((url, i) => (
        <GifView key={i} url={url} />
      ))}
    </div>
  );
};

export default Home;
