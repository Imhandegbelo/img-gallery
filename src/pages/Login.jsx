import { useState } from "react";
import background from "../assets/images/small-bg.jpg";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    // <div
    //   style={{ background: `url(${background})` }}
    //   className="flex items-center w-full"
    // >
    <div className="bg-red-900 min-h-100vh w-full lg:w-[1440px]">
      {/* <div className="flex flex-col mx-auto w-full md:w-2/3 lg:w-2/5 gap-4 bg-slate-900"> */}
      <div className="flex flex-col w-4/5 mx-auto gap-8 bg-zinc-900 text-white py-10">
        <label htmlFor="email">
          {" "}
          Email
          <input
            type="text"
            className="w-full px-6 py-3 rounded-l-full rounded-r-full"
            placeholder="name@email.com"
            value={email.length > 0 ? email : "name@email.com"}
            name="email"
            title="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input
          type="password"
          className="w-full px-6 py-3 rounded-l-full rounded-r-full"
          title="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Login"
          className="w-full rounded-l-full rounded-r-full bg-white"
          title="Login"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
