import Login from "./pages/Login";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
// import { AuthProvider } from "./Contexts/AuthContext";
// import Protected from "./component/Protected";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
        {/* <Route path="/login"  element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
