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

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-52" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="usericon"
            src={user.photoURL || ALTERNATE_TO_DEFAULT_USER_AVATAR_URL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ml-5">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
