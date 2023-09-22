import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,Route
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Protected from "./component/Protected.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route path="login" exact element={<Login />} />
//       <Route path="signup" exact element={<Signup />} />
//       <Route path="/" element={<Protected />}>
//         <Route path="/" index element={<Home />} />
//       </Route>
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
