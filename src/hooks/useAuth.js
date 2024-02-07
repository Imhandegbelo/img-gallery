import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

export const EmailSignIn = async (email, password, next) => {
  let result = await signInWithEmailAndPassword(auth, email, password);
  const userInfo = {
    userID: result.user.uid,
    name: result.user.displayName,
    profilePhoto: result.user.photoURL,
    isAuth: true,
  };
  localStorage.setItem("auth", JSON.stringify(userInfo));
  navigate(`/${next}`);
};

export const PopupSignIn = async (next) => {
  const result = await signInWithPopup(auth, provider);
  const userInfo = {
    userID: result.user.uid,
    name: result.user.displayName,
    profilePhoto: result.user.photoURL,
    isAuth: true,
  };
  localStorage.setItem("auth", JSON.stringify(userInfo));
  navigate(`/${next}`);
};
