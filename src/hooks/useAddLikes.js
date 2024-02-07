import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";
import { db } from "../config/firebase";

export const useAddLikes = () => {
  const likeCollectionRef = collection(db, "likes");
  const addLike = async () => {
    await addDoc(likeCollectionRef, {
      userID: "",
      likes: [],
      lastUpdated: "",
    });
  };

  const removeLike = async () => {};
  return { addLike, removeLike };
};
