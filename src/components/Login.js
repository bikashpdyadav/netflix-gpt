import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const [isSignIn,setisSignIn] = useState(true);
    const [errorMessage,seterrorMessage] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    
    const toggleSigninForm = () => {
        setisSignIn(!isSignIn);
    };
    
    const handleButtonClick = () => {
        //validate form data
        const message = checkValidData(email.current.value,password.current.value);
        seterrorMessage(message);

        if(message) return;
        if(!isSignIn){
            //Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                    navigate("/browse");
                }).catch((error) => {
                    seterrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+'-'+errorMessage);
            });
        }
        else{
            //Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                //const user = userCredential.user;
                //console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+'-'+errorMessage);
            });
        }
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg" alt="logo"/>
            </div>
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className="w-2/5 absolute p-12 bg-black mx-auto left-0 right-0 my-36 text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-4xl my-4 py-4">
                        {isSignIn ? "Sign In":"Sign Up"}
                    </h1>
                    
                    {!isSignIn && <input 
                        ref={name}
                        type="text" 
                        placeholder="Full Name" 
                        className="my-4 p-4 w-full bg-gray-800 rounded-lg"
                    />}
                   
                    <input 
                        ref={email}
                        type="email" 
                        placeholder="Email Address" 
                        className="my-4 p-4 w-full bg-gray-800 rounded-lg"
                    />
                    
                    <input 
                        ref={password}
                        type="password" 
                        placeholder="Password" 
                        className="my-4 p-4 w-full bg-gray-800 rounded-lg"
                    />
                    
                    <p className="font-bold text-lg text-red-400 py-2">
                        {errorMessage}
                    </p>

                    <button 
                        className="my-4 p-4 bg-red-700 w-full rounded-lg text-lg"
                        onClick={handleButtonClick}>
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