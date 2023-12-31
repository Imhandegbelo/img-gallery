import { useState } from "react";
import background from "../assets/images/small-bg.jpg";
// import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../utils/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const _email = "user@example.com";
  const _password = "1Password";
  const navigate = useNavigate();

  function renderErrorMessage(message) {
    return (
      <small className="text-sm md:text-base text-rose-500">{message}</small>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (email === _email && password === _password) {
      navigate("/home");
    } else if (email === "" || password === "") {
      setError("Fields cannot be blank");
    } else {
      setError("User not found");
    }
  };
  return (
    <div
      className={`bg-gray-300 flex justify-center items-center h-screen w-screen`}
    >
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-6 sm:p-12 shadow-2xl w-70vw sm:w-96">
        <h1 className="font-black text-center block text-2xl">[PhotoLux]</h1>
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form onSubmit={handleSubmit}>
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

          <label className="text-gray-500 block mt-3">
            Password
            <input
              
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </label>
          {submitted && error
            ? renderErrorMessage(error)
            : ""}
          <button
            // onClick={handleSubmit}
            className="my-4 md:my-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Login
          </button>
          <p>
            Do not have an account?{" "}
            <Link to="#" className="text-indigo-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
