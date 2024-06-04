import React from "react";
import { LOGO_URL, BGIMAGE_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { changeLangauage } from "../utils/configSlice";

const GPTSearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const returnToBrowsePage = () => {
    if (user) navigate("/browse");
    else navigate("/");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLangauage(e.target.value));
  };

  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="max-sm:h-screen max-sm:object-cover"
          src={BGIMAGE_URL}
          alt="background"
        />
      </div>
      <div className="px-8 max-sm:px-0 py-2 bg-gradient-to-b from-black z-10 w-full flex max-sm:flex-row justify-between max-sm:justify-evenly items-center">
        <img
          className="w-52 cursor-pointer max-sm:w-36 max-sm:-ml-3"
          src={LOGO_URL}
          alt="logo"
          onClick={returnToBrowsePage}
        />
        <div>
          <select
            className="p-2 m-2 bg-gray-900 text-white text-lg max-sm:text-xs max-sm:ml-20"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={returnToBrowsePage}
            className="max-sm:mx-0 mx-16 py-2 px-4 bg-purple-800 text-white rounded-lg text-lg max-sm:text-xs max-sm:ml-2"
          >
            Browse
          </button>
        </div>
      </div>

      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
