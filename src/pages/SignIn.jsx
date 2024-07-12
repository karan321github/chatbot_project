
import React, { useState } from "react";
import backgroundImage from "../assets/bg_image.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-blend-overlay"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-90 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-red-600">Sign In</h2>
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
          <div className="flex items-center border border-gray-300 rounded-sm">
            <input
              className="w-full px-3 py-2 border-none focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

// import { useState } from "react";
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Input,
//   Heading,
//   Text,
//   Flex,
//   Spacer,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// const MotionBox = motion(Box);

// function App() {
//   const [isSignUp, setIsSignUp] = useState(true);

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <Flex height="100vh" justifyContent="center" alignItems="center">
//       <Box width="600px">
//         <MotionBox
//           initial={{ x: 0 }}
//           animate={{ x: isSignUp ? 0 : -600 }}
//           transition={{ type: "swap", stiffness: 0 }}
//           width="600px"
//           position="absolute"
//         >
//           <Box
//             textAlign="center"
//             p={8}
//             borderWidth={1}
//             borderRadius={8}
//             boxShadow="lg"
//           >
//             <Heading mb={4}>Hello Friend!</Heading>
//             <Text mb={4}>
//               Enter your personal details and start your journey with us
//             </Text>
//             <Button onClick={toggleSignUp}>
//               {isSignUp ? "Sign In" : "Sign Up"}
//             </Button>
//           </Box>
//         </MotionBox>

//         <MotionBox
//           initial={{ x: 600 }}
//           animate={{ x: isSignUp ? 600 : 0 }}
//           transition={{ type: "swap", stiffness: 300 }}
//           width="600px"
//           position="absolute"
//           bg="gray.100"
//           p={8}
//           borderWidth={1}
//           borderRadius={8}
//           boxShadow="lg"
//         >
//           <Heading mb={4}>{isSignUp ? "Sign Up" : "Sign In"}</Heading>
//           <form>
//             {isSignUp && <Input mb={4} placeholder="Name" />}
//             <Box className="flex items-center border border-gray-300 rounded-sm mb={4}">
//               <Input
//                 className="w-full px-3 py-2 border-none focus:outline-none"
//                 type="email"
//                 placeholder="Email"
//               />
//               <span className="px-3 py-2 bg-gray-300 rounded-sm">
//                 @testingXperts.com
//               </span>
//             </Box>
//             <Input mb={4} type="password" placeholder="Password" />
//             <Button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</Button>
//           </form>
//         </MotionBox>
//       </Box>
//     </Flex>
//   );
// }

// export default App;
