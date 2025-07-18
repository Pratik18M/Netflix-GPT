import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [IsSignInForm , setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_large.jpg"
          alt="logo"
        />
      </div>

      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-70">
        <h1 className="text-3xl font-bold ">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !IsSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg "
        />}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg "
        />
        <button className="p-3 my-6 bg-red-600 w-full rounded-lg">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {IsSignInForm ? "New to Netflix? Sign Up Now In" : "Already Registered? Sign In Now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
