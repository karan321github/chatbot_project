import React, { useState } from "react";
import backgroundImage from "../assets/bg_image.png";
import { useToast } from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      return toast({
        title: "Something went wrong",
        description: "password and confirm password should be same.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-blend-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-90 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-red-600">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-300 rounded-sm">
            <input
              className="w-full px-3 py-2 border-none focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <span className="px-3 py-2 bg-gray-300 rounded-sm">
              @testingXperts.com
            </span>
          </div>
          <div className="flex items-center border border-gray-300 rounded-sm ">
            <input
              className="w-full px-3 py-2 border-none focus:outline-none"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-sm">
            <input
              className="w-full px-3 py-2 border-none focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="p-2 border outline-none border-none rounded-r-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <Link to={"/signin"}>
          <span className="text-green-600 text-xs">Already have an account?</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
