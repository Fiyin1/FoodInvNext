import { LogIn, ShieldUser } from "lucide-react";
import Link from "next/link";

const LoginPortal = () => {
  return (
    <>
      <div className="h-screen">
        <div className=" flex flex-col lg:flex-col justify-center items-center gap-20 h-screen ">
          <h1 className="flex items-center justify-center text-lg text-blue-400  lg:text-4xl lg:text-black">
            Login to Food Inventory Pro
          </h1>
          <div className="flex flex-col justify-center lg:flex-row gap-10 w-[60%] h-[30%]">
            <Link
              href="/login"
              className="mt-4 rounded-2xl border border-black lg:border-blue-400 w-[60%] md:w-[35%] h-[50%] md:h-60 flex justify-center items-center"
            >
              <div className="text-black flex flex-col items-center">
                <LogIn className="w-5 h-5"></LogIn>
                <span>User Login</span>
              </div>
            </Link>
            <Link
              href="/adminlogin"
              className="mt-4 rounded-2xl border border-black lg:border-blue-400 w-[60%] md:w-[35%] h-[50%] md:h-60 flex justify-center items-center"
            >
              <div className="text-black flex flex-col items-center">
                <ShieldUser className="w-5 h-5"></ShieldUser>
                <span>Admin Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPortal;
