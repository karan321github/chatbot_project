import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SingUp from "./assets/pages/SingUp";
import Home from "./assets/pages/Home";
import SignIn from "./assets/pages/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<SingUp />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
