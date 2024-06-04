import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {
  LOGO_URL,
  ALTERNATE_TO_DEFAULT_USER_AVATAR_URL,
} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchBtnClick = () => {
    navigate("/gptsearch");
  };

  return (
    <div
      className={`max-sm:-mt-12 fixed max-sm:px-0 px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex md:justify-between items-center max-sm:bg-black  ${
        user ? "mt-32" : "mt-0 max-sm:mt-0"
      }`}
    >
      <img
        className="w-52 mx-auto md:mx-0 max-sm:w-36"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 ">
          <button
            onClick={handleGptSearchBtnClick}
            className=" mx-16 max-sm:mx-0 max-sm:mr-2 max-sm:ml-24 max-sm:p-1 py-2 px-4 bg-purple-800 text-white rounded-lg max-sm:text-xs max-sm:text-nowrap"
          >
            GPT Search
          </button>
          <img
            className="w-12 h-12 max-sm:w-8 max-sm:h-8"
            alt="usericon"
            src={user.photoURL || ALTERNATE_TO_DEFAULT_USER_AVATAR_URL}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white ml-5 max-sm:ml-1 max-sm:text-xs max-sm:text-nowrap"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
