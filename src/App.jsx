import { useState } from "react";
import Login from "./pages/Login";
import road1 from "../src/assets/images/road1.jpg";
import road2 from "../src/assets/images/road2.jpg";
import road3 from "../src/assets/images/road3.jpg";
import road4 from "../src/assets/images/road4.jpg";
import beach1 from "../src/assets/images/beach1.jpg";
import beach2 from "../src/assets/images/beach2.jpg";
import beach3 from "../src/assets/images/beach3.jpg";
import mountain1 from "../src/assets/images/mountain1.jpg";
import mountain2 from "../src/assets/images/mountain2.jpg";
import mountain3 from "../src/assets/images/mountain3.jpg";
import animal1 from "../src/assets/images/animal.jpg";
import Card from "./component/Card";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/" exact element={<Login />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
