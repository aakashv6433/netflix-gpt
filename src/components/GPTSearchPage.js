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
      <div className="absolute -z-10">
        <img src={BGIMAGE_URL} alt="background" />
      </div>
      <div className="px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
        <img className="w-52" src={LOGO_URL} alt="logo" />
        <div>
          <select
            className="p-2 m-2 bg-gray-900 text-white"
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
            className="mx-16 py-2 px-4 bg-purple-800 text-white rounded-lg"
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
