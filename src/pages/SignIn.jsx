import React, { useState } from "react";
import backgroundImage from "../assets/bg_image.png";

const SignIn = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };
  const [password, setPassword] = useState("");
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-blend-overlay "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-90 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-red-600">Sign In</h2>
        <form className="space-y-4">
          <div className="relative-flex ">
            <input
              className="w-100 form-control px-3 py-2 border border-gray-300 border-r-0 rounded-sm focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Email"
            />
            <span className=" leading-3 px-3 py-2 bg-gray-300 border-gray-300 border-r-2">
              @testingXperts.com
            </span>
          </div>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
