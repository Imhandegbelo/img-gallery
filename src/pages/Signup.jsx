import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  // const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { error, setError } = useState("");
  const apiKey = import.meta.env.VITE_unsplashKey;

  useEffect(() => {
    // FetchSearchData();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    // setSubmitted(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userInfo = {
          userID: userCredential.user.uid,
          name: userCredential.user.displayName,
          profilePhoto: userCredential.user.photoURL,
          isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(userInfo));
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error({ errorCode, errorMessage });
      });
  };

  return (
    <div
      className={`bg-gray-300 flex justify-center items-center h-screen w-screen`}
    >
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-6 sm:p-12 shadow-2xl w-70vw sm:w-96">
        <h1 className="font-black text-center block text-2xl">[PhotoLux]</h1>
        <h1 className="font-bold text-center block text-2xl">Sign Up</h1>
        <form method="POST" onSubmit={handleSignUp}>
          <label className="text-gray-500 block mt-3">
            Email
            <input
              autoFocus
              type="email"
              id="email"
              name="email"
              placeholder="me@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </label>
          {/* {submitted && email === ""
            ? renderErrorMessage("Email cannot be blank")
            : ""} */}
          <label className="text-gray-500 block mt-3">
            Password
            <input
              autoFocus
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </label>
          {/* {submitted && password === ""
            ? renderErrorMessage("Password cannot be blank")
            : ""} */}
          <button
            // onClick={handleSignUp}
            className="my-4 md:my-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
          >
            SignUp
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-indigo-600 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
