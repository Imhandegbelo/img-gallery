import { useNavigate } from "react-router-dom";
import logout from "../assets/images/logout.svg";
// import avatar from "../assets/images/user.svg";
import { auth } from "../config/firebase";

export default function Navbar({ userInfo }) {
  const navigate = useNavigate();
  const Logout = async () => {
    await auth.signOut();
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav id="header" className="">
      <div className="w-full flex items-center justify-between mb-4 px-12 md:px-20 shadow-xl">
        <div className="py-4">
          <h1 className="text-2xl text-indigo-600 font-black md:hidden">
            [F]&sup;2
          </h1>
          <h1 className="text-2xl text-indigo-600 font-black hidden md:block">
            [FotoFilia]
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="flex gap-2 items-center my-4 md:my-6 transition transition-all block py-3 px-4 text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
            onClick={Logout}
          >
            <img src={logout} alt="" />
            Logout
          </button>
          <div className="">
            {/* <img
              src={userInfo.photoURL !== null ? userInfo.photoURL : avatar}
              alt=""
              className="w-10 h-10 rounded-full"
            /> */}
          </div>
          <label htmlFor="menu-toggle" className="cursor-pointer hidden">
            <svg
              className="fill-current text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
}
