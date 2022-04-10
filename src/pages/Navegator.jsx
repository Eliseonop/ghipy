import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
export const Navegator = () => {
  // const { name } = useParams();
  const [value, setValue] = useState();
  let navigate = useNavigate();
  const hadleSearch = () => {
    navigate(`/${value}`);
  };
  const hadleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/${value}`);
    console.log(value);
  };

  const hadleChange = (evt) => {
    setValue(evt.target.value);
  };
  return (
    <div className="bg-slate-500 flex py-4 justify-around">
      <h1 className="font-bold text-2xl mx-4">
        <Link to={"/Home"}>Giphy Search</Link>
      </h1>
      <form className="flex" onSubmit={hadleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Que gif estas buscando..."
          className="px-6 py-2 font-semibold placeholder-gray-500 text-black rounded-l-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          onChange={hadleChange}
          value={value}
        />

        <button
          onClick={hadleSearch}
          className="py-2 border-none px-2 text-lg  ring-gray-300 bg-emerald-500 ring-2 rounded-r-xl font-semibold"
          type="submit"
        >
          search
        </button>
      </form>
    </div>
  );
};
