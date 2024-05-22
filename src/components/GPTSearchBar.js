import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.langKey);

  return (
    <div className="pt-[10%] flex justify-center z-30">
      <form className="w-1/2 bg-black grid grid-cols-9">
        <input
          type="text"
          className="p-4 m-4 col-span-7"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-2 my-4 mr-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
