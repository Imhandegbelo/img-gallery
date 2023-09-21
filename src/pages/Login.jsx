import { useState } from "react";
import background from "../assets/images/small-bg.jpg";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const _email = "user@example.com"
  const _password = "1Password"

  function handleSubmit(email) {
    
  }

  return (
    <div className={`bg-gray-300 flex justify-center items-center h-screen w-screen`}>
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
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
              autoFocus
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </label>

          <button
            onClick={() => preventDefault(e)}
            className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
