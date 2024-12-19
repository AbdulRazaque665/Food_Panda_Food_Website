import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Products from "./components/Products/Products";
import DeliveryPage from "./components/DeliveryPage/DeliveryPage";
import Profile from "./components/Profile/Profile";
import Home from "./Pages/Home/Home"
import City from "./Pages/City/City";





const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delivery/:productId" element={<DeliveryPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
