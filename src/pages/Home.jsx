import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/bg_image.png";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      <div className="w-70">
        <h1 className="text-3xl">Thanks for trying Ollum</h1>
      </div>
      <div className="px-3 py-2 mt-5 items-center gradient-bg">
        <Link to={"/signin"}>
          <button className="text-2xl font-light p-3 border border-gray-300 rounded-full bg-blue-400 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="text-2xl font-light p-3 border border-gray-300 rounded-full bg-slate-400 hover:bg-slate-500 focus:outline-none focus:bg-slate-500">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
