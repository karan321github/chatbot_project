import React, { useState } from "react";
import backgroundImage from "../assets/bg_image.png";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const toast = useToast();
  const handleSubmit = (e) => {
    if(password !== confirmPassword){
      return toast({
        title: 'Something went wrong',
          description: "password and confirm password should be same.",
          status: 'warning',
          duration: 5000,
          isClosable: true,
      })
    }
    e.preventDefault();
    console.log("form submitted")
  }
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-blend-overlay "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-85 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-red-600">Sign Up</h2>
        <form className="space-y-4">
          {/* <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Username"
            defaultValue={'@testingXperts.com'}
          /> */}
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Email"
            defaultValue={"@testingXperts.com"}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
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

export default SignUp;
