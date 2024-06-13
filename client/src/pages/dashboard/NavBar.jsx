import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { dark } from "@clerk/themes";

const NavBar = () => {
  return (
    <nav className="bg-gray-700/50 px-10 py-7 flex justify-between items-center">
      <Link to="/" className="text-white font-bold">
        Dashboard
      </Link>

      <div className="border-[3px] border-violet-500 rounded-full w-[2.1em] h-[2.1em] grid place-items-center">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/auth"
            appearance={{
              baseTheme: dark,
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
