import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn,setisSignIn] = useState(true);
    const toggleSigninForm = () => {
        setisSignIn(!isSignIn);
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg" alt="logo"/>
            </div>
            <form className="w-2/5 absolute p-12 bg-black mx-auto left-0 right-0 my-36 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-4xl my-4 py-4">
                    {isSignIn ? "Sign In":"Sign Up"}
                </h1>
                {!isSignIn && <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="my-4 p-4 w-full bg-gray-800 rounded-lg"
                />}
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="my-4 p-4 w-full bg-gray-800 rounded-lg"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="my-4 p-4 w-full bg-gray-800 rounded-lg"
                />
                <button 
                    className="my-4 p-4 bg-red-700 w-full rounded-lg">
                    {isSignIn ? "Sign In":"Sign Up"}
                </button>
                <p 
                    className="my-4 py-4 cursor-pointer" 
                    onClick={toggleSigninForm}>
                    {isSignIn ? "New to Netflix? Sign Up Now":"Already a user? Sign In Now"}
                </p>
            </form>
        </div>
    )
};

export default Login;