import { SignedIn, SignIn, SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { useState } from "react";

import { Navigate } from "react-router-dom";

const Auth = () => {
  const [chooseAuth, setChooseAuth] = useState("signin");

  const handleChooseAuth = () => {
    if (chooseAuth === "signin") {
      setChooseAuth("signup");
    } else {
      setChooseAuth("signin");
    }
  };

  return (
    <div className=" grid place-items-center py-20 gap-10">
      <div className="flex text-white w-[25em] justify-between gap-8">
        <button
          className={`flex-1 border border-white/30 py-3 rounded-md ${
            chooseAuth === "signin"
              ? "bg-violet-600 border-none shadow-lg"
              : "bg-transparent"
          }`}
          onClick={handleChooseAuth}
        >
          Sign Up
        </button>
        <button
          className={`flex-1 border border-white/30 py-3 rounded-md ${
            chooseAuth === "signup"
              ? "bg-violet-600 border-none shadow-lg"
              : "bg-transparent"
          }`}
          onClick={handleChooseAuth}
        >
          Sign In
        </button>
      </div>
      {chooseAuth === "signin" ? (
        <SignUp appearance={{ baseTheme: dark }}></SignUp>
      ) : (
        <SignIn appearance={{ baseTheme: dark }}></SignIn>
      )}

      <SignedIn>
        <Navigate to="/"></Navigate>
      </SignedIn>
    </div>
  );
};

export default Auth;
