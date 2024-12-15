import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Products from "./components/Products/Products";
import DeliveryPage from "./components/DeliveryPage/DeliveryPage";
import Profile from "./components/Profile/Profile";
import Home from "./Pages/Home/Home"




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delivery/:productId" element={<DeliveryPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
