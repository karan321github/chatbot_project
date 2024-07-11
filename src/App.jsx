import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="signup" element={<SingUp />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
